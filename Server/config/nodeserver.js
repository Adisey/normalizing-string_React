/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 01.08.2018
 * Time: 21:28
 */

const os = require('os');
const ifaces = os.networkInterfaces();
let currentIp = '';

Object.keys(ifaces).forEach(function (ifname) {
    let alias = 0;

    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }

        if (alias >= 1) {
            // this single interface has multiple ipv4 addresses
            currentIp = iface.address;
            // console.log(ifname + ':' + alias, iface.address);
        } else {
            // this interface has only one ipv4 adress
            currentIp = iface.address;
            // console.log(ifname, iface.address);
        }
        ++alias;
    });
});

module.exports = {
    port : '9009',
    ip: currentIp
};