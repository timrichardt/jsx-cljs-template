#!/usr/bin/env bash

babel src/jsx --out-dir src/js --watch &
npx shadow-cljs watch app
