#!/bin/bash

printf "Deleting node_modules \n\n"
rm -fr ./node_modules
rm -fr ./backend/node_modules
rm -fr ./frontend/node_modules
printf "\n\n"

printf "Installing node_modules \n\n"
yarn install
cd "backend" && yarn install
cd ..
cd "frontend" && yarn install
cd ..
printf "\r\r"

