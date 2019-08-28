const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');
const shell = require('shelljs');
const dotenv = require('dotenv');
dotenv.config();

// map environment variables to local variables
const port = process.env.TWIT_TEE_WEBHOOK_PORT || 7001;
const secret = process.env.TWIT_TEE_WEBHOOK_SECRET;
const script = process.env.TWIT_TEE_WEBHOOK_SCRIPT;
const branch = process.env.TWIT_TEE_WEBHOOK_BRANCH;
 
http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        const json = JSON.parse(chunk);
        let sig= "sha1=" + crypto.createHmac('sha1', secret).update(JSON.stringify(json)).digest('hex');
        console.log("branch => ", json.ref);
        if (json.ref == branch) {
            console.log("branch ok");
            if (req.headers['x-hub-signature'] == sig) {
                console.log("security ok");
                shell.exec(script)
            }
        }
    });

    res.end();
}).listen(port);