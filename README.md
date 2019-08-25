# Overview
Used as a target for webhook. Once called, will verify secret and run desired git pull script.

## Modify Environment Variables
Rename .env.tmp to .env and update appropriately.

## Update Script Permission
An external script is executed. Do remember to make the script executable. 

```sh
$  chmod +x xxxx.sh
```
## Update Firewall If Necessary
You will likely need to update your firewall rule to allow your port.

```sh
$ sudo ufw allow xxxx/tcp
```

## Process Manager
On the server, you will probably want to run with a process manager like [PS2](https://www.npmjs.com/package/pm2)

## Credits
Added Docker and shell external shell script logic. Modified from [DigitalOcean Communty]() - How to Use Node.js and Github Webhooks to Keep Remote Projects in Sync