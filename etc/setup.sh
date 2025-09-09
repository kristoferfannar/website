#!/bin/bash

# This script is intended to run inside an ec2 instance
# don't think there's a better way to check this
if [[ "$USER" != "ec2-user" ]]; then
	echo "error: This script should run in an ec2-instance"
	exit 1
fi

# for this script to succeed:
# - ensure docker (and docker-compose) is installed
# - ensure nginx is installed

sudo rm -rf /etc/nginx && sudo cp -R ./etc/nginx/ /etc/nginx
docker-compose up --build -d
sudo nginx -t && sudo systemctl restart nginx
