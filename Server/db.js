/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 07.08.2018
 * Time: 1:19
 */

const fs = require ('fs');
const dataFile = 'Server/data/myjsonfile.json';

function writeJSON_OLD(obj) {
    const json = JSON.stringify (obj);
    fs.writeFile(dataFile, json, 'utf8', (error) => {
        if (error) {
            console.log (`error ->`, error);
            return false;
        } else {
            console.log (json, `Сохранено ->`, dataFile );
            return true;
        }
    });
}

function writeJSON(obj) {
    return new Promise((resolve, reject)=>{
        const json = JSON.stringify (obj);
        fs.writeFile(dataFile, json, 'utf8', (error) => {
            if (error) {
                console.error (`error ->`, error);
                reject(error);
            } else {
                console.log (json, `Сохранено ->`, dataFile );
                resolve ('Ok');
            }
        });
    })

}

module.exports = {
    writeJSON: writeJSON,
};