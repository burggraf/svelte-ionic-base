npm run build && mkdir -p ./docs && cp -r ./build/* ./docs && touch ./docs/.nojekyll && rm -r build
git add docs/.nojekyll
git add docs

