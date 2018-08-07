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
    app.post ('/api', async (req, res) => {
        let _status = 200, _statusString = `Сохранено`;
        try {
            if (!req.body.originalString || !req.body.processedString) {
                throw new SyntaxError ({name: `SyntaxError`, message: `Не верный запрос !`, status: 400});
            }
            await db.writeJSON (req.body);
        }
        catch (error) {
            _statusString = error.message ;
            if (error.name === `SyntaxError`) {
                _status = 400;
                console.error (`${_statusString} ->`, req.body);
            } else {
                _status = 500;
                console.error (`Error ->`, error);
            }
        }
        finally {
            res
                .set ("Access-Control-Allow-Origin", "*")
                .status (_status)
                .send (_statusString);
        }
    });

};


