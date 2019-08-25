const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');
const shell = require('shelljs');
const dotenv = require('dotenv');
dotenv.config();

// map environment variables to local variables
const port = process.env.TWIT_TEE_WEBHOOK_PORT || 7001;
const secret = process.env.TWIT_TEE_WEBHOOK_SECRET;
// const repo = process.env.TWIT_TEE_WEBHOOK_REPO;
const script = process.env.TWIT_TEE_WEBHOOK_SCRIPT;
 
http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        console.log('attempting!'); // TODO remove
        shell.exec(script);
        // let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

        // if (req.headers['x-hub-signature'] == sig) {
        //     shell.exec(script)
        //     // exec('cd ' + repo + ' && git pull');
        // }
    });

    res.end();
}).listen(port);