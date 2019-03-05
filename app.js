const fs = require("fs");
const path = require('path');
var CodeGen = require("swagger-typescript-codegen").CodeGen;
const express = require('express');
const axios = require('axios');
const { swaggers } = require('./config');
// var swagger = JSON.parse(fs.readFileSync(file, "UTF-8"));

// TODO: express & make this logic run when triggering through an endpoint 
// & deliver information back to requester
const directory = './typescript';
const app = express();

app
    .get('/build', (req, res, next) => {
        Promise.all(
            swaggers.map(({name, url}) => {
            return axios.get(`${url}/swagger/docs/swagger.json`)
            .then(response => {
                const tsSourceCode = CodeGen.getTypescriptCode({
                    className: name,
                    swagger: response.data,
                    imports: ["../../typings/tsd.d.ts"]
                });
                return {
                    name,
                    tsFeed: tsSourceCode
                }
            })
        })
        ).then( res => {
            res.forEach(({name, tsFeed}) => {
                fs.writeFile(`typescript/${name}.js`, tsFeed, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                }); 
            })
        }).catch(err => {
            console.log(err)
            res.status(500).send('Internal server error')
        })
    })
    .get('/publish', (req, res, next) => {
        // publish stuff
        console.log('Publish packages')
        // then

        // cleanup
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
          
            for (const file of files) {
              fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
              });
            }
          });

          // then

          res.status(200).send('Successfully published to NPM')
    })


module.exports = app;
