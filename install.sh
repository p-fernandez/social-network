#!/bin/bash

echo "Deleting node_modules \n\n"
rm -fr ./node_modules
rm -fr ./backend/node_modules
rm -fr ./frontend/node_modules
echo "\n\n"

echo "Installing node_modules \n\n"
yarn install
cd "backend" && yarn install
cd ..
cd "frontend" && yarn install
cd ..
echo "\n\n"

