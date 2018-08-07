/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 07.08.2018
 * Time: 1:19
 */

const fs = require ('fs');

function writeJSON(obj) {
    const json = JSON.stringify (obj);
    fs.writeFile('Server/data/myjsonfile.json', json, 'utf8', (error) => {
        if (error) {
            console.log (`error ->`, error);
            return false;
        } else {
            console.log (`Сохранено ->`);
            return true;
        }
    });
}

module.exports = {
    writeJSON: writeJSON,
};