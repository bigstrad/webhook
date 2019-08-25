# cd into repository path
#cd /home/appuser/projects/twittee
cd /Users/bigstrad/Documents/Development/NodeJSApps/twitteeTEST
#cd /repo

# bring down the server
docker-compose down

# pull latest
git pull

# cp .env
#cp /home/appuser/projects/twittee-build/twittee.env /home/appuser/projects/twittee/api/.env
#cp /data/twittee.env /repo/api/.env

# bring up the server
docker-compose up -d #--build -d