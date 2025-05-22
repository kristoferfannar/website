# [https://kristoferfannar.com](https://kristoferfannar.com)

I finally decided to make one

## Idea

This website isn't just built with one tech stack.
Rather, I chose to set it up so that each endpoint is it's own tech stack.

I'm doing this by combining docker containers and some nginx magic.

### Endpoints

Below is a list of each endpoint and the associated tech stack for that endpoint.

```
/           html/css/js
/about      nextjs
/projects   templ
```

## Development

Through the magic of docker-compose, building locally is a single command:

```bash
docker-compose up --build
```

This sets up the website on `127.0.0.1:3000`.

## Deploying

This website is deployed on AWS EC2 server.

To setup HTTPS, we use let's encrypt.
As the docker containers expose the website with http from port 3000,
the EC2 instance must configure an nginx proxy to encrypt through port 443.
This proxy is found in [`./etc/nginx/`](./etc/nginx/), and is setup in an ec2 instance
by running the script in [`./etc/setup.sh`](./etc/setup.sh).

This script also sets up the docker containers and starts the nginx proxy.
The ec2 instance should now be serving https on port 443.
