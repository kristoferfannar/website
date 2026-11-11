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
# - ensure certbot is installed and a cert already exists at
#   /etc/letsencrypt/live/kristoferfannar.com/ (run `certbot certonly` once,
#   manually, on a fresh instance before relying on this script)

sudo rm -rf /etc/nginx && sudo cp -R ./etc/nginx/ /etc/nginx
docker-compose up --build -d
sudo nginx -t && sudo systemctl restart nginx

# set up certbot auto-renewal (idempotent: safe to re-run)
sudo cp ./etc/certbot-renew.service /etc/systemd/system/certbot-renew.service
sudo cp ./etc/certbot-renew.timer /etc/systemd/system/certbot-renew.timer
sudo systemctl daemon-reload
sudo systemctl enable --now certbot-renew.timer
