#/bin/sh

if [ -z "$1" ]; then
    echo "ERROR: Please provide commit message."
    exit 1
fi

curr_dir=$(pwd)
main_repo="/c/Users/leoma/develop/git/GGJTeamWhatever2021/website/"
page_repo="/c/Users/leoma/develop/git/lmandres.github.io/GGJTeamWhatever2021"

rsync -r "$main_repo" "$page_repo"

cd "$main_repo"
git add .
git commit -m "$1"
git pull
git push

cd "$page_repo"
git add .
git commit -m "$1"
git push

cd "$curr_dir"
