/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 02.08.2018
 * Time: 0:38
 */

// const url = require ('url');
// const qs = require ('qs');

const db = require ('./db');

const temp = [
    {
        originalString: 'abcdefghijklmnopqrstuvwxyz',
        processedString: 'abcdefghijklmnopqrstuvwxyz',
    }
];

module.exports = async function (app) {
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
    app.post ('/api', (req, res) => {
        let _status = 200, _statusString = `Сохранено`;

        if (!req.body.originalString || !req.body.processedString ) {
            _status = 400;
            _statusString = `Не верный запрос !`;
            console.error(`${_statusString} ->`, req.body);
            res
                .set ("Access-Control-Allow-Origin", "*")
                .status (_status)
                .send ();
        }

        db.writeJSON (req.body)
            .then ( (response)=> {
                console.log (`Then ->`, response)
                res
                    .set ("Access-Control-Allow-Origin", "*")
                    .status (_status)
                    .send ();
            })
            .catch ((error) => {
                _status = 500;
                _statusString = `Не удалось сохранить!`;
                console.error (`${_statusString}->`, error)
                res
                    .set ("Access-Control-Allow-Origin", "*")
                    .status (_status)
                    .send (error);
            });

    })
};


