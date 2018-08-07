/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 07.08.2018
 * Time: 1:19
 */

const fs = require ('fs');
const dataFile = `${__dirname}\\data\\myjsonfile.json`;

function writeJSON(obj) {
    return new Promise ((resolve, reject) => {
        const json = JSON.stringify (obj);
        fs.writeFile (dataFile, json, 'utf8', (error) => {
            if (error) {
                console.error (`error ->`, error);
                reject (error);
            } else {
                console.log (json, `Сохранено ->`, dataFile);
                resolve ('Ok');
            }
        });
    })
}

function readJSON() {
    return new Promise ((resolve, reject) => {
        fs.readFile (dataFile, 'utf8', (error, data) => {
            if (error) {
                console.error (`error ->`, error);
                reject (error);
            } else {
                console.log (`Прочитано ->`, data);
                const obj = JSON.parse (data);
                resolve (obj);
            }
        });
    })
}

module.exports = {
    writeJSON: writeJSON,
    readJSON: readJSON,
};