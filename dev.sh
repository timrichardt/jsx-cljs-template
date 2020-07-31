#!/usr/bin/env bash

babel src/jsx --out-dir src/js --watch --source-maps &
npx shadow-cljs watch app
