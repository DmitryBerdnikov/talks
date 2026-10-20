#!/bin/sh
set -eu
cd "$(dirname "$0")"

rm -rf docs
pnpm --dir mantine-overview build --base /talks/mantine-overview/ --out ../docs/mantine-overview

cp index.html docs/index.html
mkdir -p docs/not-obvious-things-in-typescript
cp -R not-obvious-things-in-typescript/index.html not-obvious-things-in-typescript/assets not-obvious-things-in-typescript/dist not-obvious-things-in-typescript/plugin docs/not-obvious-things-in-typescript/
touch docs/.nojekyll
