#!/bin/sh

read COMMENT
git add .
git commit -m "$COMMENT"
security delete-internet-password -l  git-codecommit.ap-northeast-1.amazonaws.com
git push origin master
