/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 02.08.2018
 * Time: 0:38
 */

// const url = require ('url');
// const qs = require ('qs');

const db = require('./db');

const temp = [
    {
        originalString: 'abcdefghijklmnopqrstuvwxyz',
        processedString: 'abcdefghijklmnopqrstuvwxyz',
    }
];

module.exports = function (app) {
    app.get ('/api', (req, res) => {
        const param = req.params.filter;
        console.log (`GET`);
        console.log (`req.params`, req.params);
        console.log (`param`, param);
        res
            .set ("Access-Control-Allow-Origin", "*")
            .status (200)
            .send (temp);
    });
    app.post ('/api', async (req, res) => {
        let _status = 200;
        if (!req.body.originalString || !req.body.processedString) {
            _status = 400
        }
        if ( !await db.writeJSON (req.body) ) {
            _status = 500
        }
        await res
            .set ("Access-Control-Allow-Origin", "*")
            .status (_status)
            .send ();
    })
};


