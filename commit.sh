#!/bin/sh
git add .

DIR="$( dirname "$0" )"
FILES="$( git --no-pager diff --name-only HEAD )"
CTX="$(cd "$DIR"; echo "$FILES" | deno run summerize.ts)"

git commit -m "\`$CTX\`: $1";