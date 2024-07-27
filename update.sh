#!/bin/sh
git pull

sudo docker compose rm -s -f

sudo docker compose up --build -d