#!/bin/sh
echo -n "コメント : "
read COMMENT
echo -n "プッシュ先 : "
read name
name=${name:-master}

git add .
git commit -m "$COMMENT"
security delete-internet-password -l  git-codecommit.ap-northeast-1.amazonaws.com
git push origin master
