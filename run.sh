#!/bin/bash

# Runs the website,
# either on ec2 or locally

if [[ "$USER" == "ec2-user" ]]; then
	echo "Running for ec2"
	docker-compose pull
	docker-compose up -d
else 
	docker-compose up --build
fi

