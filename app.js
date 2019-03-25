const fs = require("fs");
const path = require('path');
const ncp = require('ncp').ncp;
const CodeGen = require("swagger-typescript-codegen").CodeGen;
const dirTree = require("directory-tree");
const rimraf = require("rimraf");
const git = require("simple-git/promise");
const express = require('express');
const axios = require('axios');
const { swaggers, GIT_USER, GIT_PASSWORD } = require('./config');
const { emptyFolder } = require('./lib/fs');
const directory = './typescript';
const app = express();

const REPO = 'github.com/bergendahlsfood/Bergendahls.Typescript.Models.git';
const remote = `https://${GIT_USER}:${GIT_PASSWORD}@${REPO}`;

const myGit = git('./gitpackage');
myGit.addConfig('user.name', 'Swaggerman')
myGit.addConfig('user.email', 'swagger@dynamicdog.se')

const createDirectories = (data) => {
    data.forEach(({title, version, tsFeed}) => {
        let pathname = `typescript/${title}/${version}/`;

        const __dirname = path.resolve();
        pathname = pathname.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, ''); // Remove leading directory markers, and remove ending /file-name.extension
        
        fs.mkdir(path.resolve(__dirname, pathname), { recursive: true }, (e) => {
            if(e) {
                return console.log('Mkdir failed:: ' + e);
            }
            fs.writeFile(`${pathname}/index.ts`, tsFeed, function(err) {
                if(err) {
                    return console.log(err);
                }

                console.log("The file was saved!");
            });
        })
    })
}
 
app
    .get('/build', async (req, res, next) => {
        await rimraf('./gitpackage', function () { console.log("Successfully purged git directory"); });
        await rimraf(directory, function () { console.log("Successfully purged directory"); });

        Promise.all(
            swaggers.map(url => {
            return axios.get(`${url.trim()}/swagger/docs/swagger.json`)
            .then(response => {
                const { title, version } = response.data.info;
                const tsSourceCode = CodeGen.getTypescriptCode({
                    className: title,
                    swagger: response.data,
                    imports: ["../../typings/tsd.d.ts"]
                });
                return {
                    title,
                    version,
                    tsFeed: tsSourceCode
                }
            })
        })
        ).then( data => {
            createDirectories(data)
            const repoName = 'gitpackage';
            console.log('attempting to clone with', remote)
            git()
            .silent(false)
            .clone(remote, repoName)
            .then(test => {
                console.log(test)
                ncp(directory, './gitpackage/models', function (err) {
                    if (err) {
                        return console.error(err);
                    }

                    const dirMeta = dirTree('./typescript', {extensions:/\.ts$/}, null, (item, PATH, stats) => {
                        return item
                    });

                    res.status(200).send(dirMeta)
                    console.log('done!');
                });                
            })
            
        }).catch(err => {
            console.log(err);
            rimraf(directory, function () { console.log("Successfully purged directory"); });
            rimraf('./gitpackage', function () { console.log("Successfully purged git directory"); });
            res.status(500).send('Internal server error');
        })


    })
    .get('/status', (req, res, next) => {
        const dirMeta = dirTree('./typescript', {extensions:/\.ts$/}, null, (item, PATH, stats) => {
            return item
        });

        res.status(200).send(dirMeta)
    })
    .get('/publish', (req, res, next) => {

        myGit.commit('Added changes', '.')
        .then(debug => {
            console.log(debug)
        })

        myGit.push(['--set-upstream', 'origin', 'master'])
        .then(debug => {
            console.log(debug)
            res.status(200).send('Success')
        })

    })


module.exports = app;
