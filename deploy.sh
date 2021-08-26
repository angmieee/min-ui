rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "upload" &&
git branch -M master &&
git remote add origin git@gitee.com:angmieee/min-ui.git &&
git push -f -u origin master &&
cd -