/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 02.08.2018
 * Time: 0:38
 */

const temp = [
    {
        originalString: 'abcdefghijklmnopqrstuvwxyz',
        processedString: 'abcdefghijklmnopqrstuvwxyz',
    }
]






module.exports = function (app) {
    app.get ('/api', (req, res) => {
        const param = req.params.filter;
        console.log (`req.params`, req.params);
        console.log (`param`, param);
        res
            .set ("Access-Control-Allow-Origin", "*")
            .status (200)
            .send(temp);
    })
}
