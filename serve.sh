#!/bin/sh

ng serve &
gin --port 4201 --path . --build ./go/src/server/src/main --i --all

wait