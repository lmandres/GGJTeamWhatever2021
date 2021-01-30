#/bin/sh

if [ -z "$1" ]; then
    echo "ERROR: Please provide commit message."
fi

curr_dir=$(pwd)
main_repo="~/git/GGJTeamWhatever2021/website"
page_repo="~/git/lmandres.github.io/GGJTeamWhatever2021"

rsync $main_repo $page_repo 
cd $page_repo
git add .
git commit -m "$1"
git push

cd "$curr_dir"
