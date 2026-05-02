#!/bin/bash
set -e

# This script publishes ec2 compatible images on dockerhub,

docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml build
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml push
