const fs = require("fs");
const path = require('path');
const ncp = require('ncp').ncp;
const CodeGen = require("swagger-typescript-codegen").CodeGen;
const dirTree = require("directory-tree");
const rimraf = require("rimraf");
const git = require("simple-git");
const express = require('express');
const axios = require('axios');
const { swaggers, GIT_USER, GIT_PASSWORD } = require('./config');
const { emptyFolder } = require('./lib/fs');
const directory = './typescript';
const app = express();

const REPO = 'https://github.com/bergendahlsfood/Bergendahls.Typescript.Models';
const remote = `https://${GIT_USER}:${GIT_PASS}@${REPO}`;

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
            
            git()
            .silent(false)
            .clone(remote, repoName)
            .then(() => {
                ncp(directory, './gitpackage/models', function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('done!');
                });
            })

            res.status(200).send("Success")

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
        git('./gitpackage')
        .status((err, status) => console.log(status))
        .add('.')
        .commit('Added changes')
        .push(['--set-upstream', 'origin', 'master'])
        .then(() => res.status(200).send())
    })


module.exports = app;
