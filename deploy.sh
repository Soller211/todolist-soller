
# abort on errors
set -e

# build
npm run build

git add dist && git commit -m "initial deploy"

git subtree add push --prefix dist origin gh-pages
