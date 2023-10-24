#!/bin/bash

source .env

if [[ $VERCEL_GIT_COMMIT_REF == "PROD"  ]] ; then 
    npm run build:prod
elif [[ $VERCEL_GIT_COMMIT_REF == "UAT"  ]] ; then
    npm run build:uat
elif [[ $VERCEL_GIT_COMMIT_REF == "QA"  ]] ; then
    npm run build:qa
else
    
    echo $VITE_VERCEL_BRANCH_URL
    echo $VERCEL_BRANCH_URL
    echo $VITE_VERCEL_GIT_COMMIT_REF
    echo $VERCEL_GIT_COMMIT_REF
    echo $VERCEL_GIT_COMMIT_REF_TYPE
    echo $VITE_VERCEL_GIT_COMMIT_REF_TYPE
    echo $BRANCH_NAME

    echo "BRANCH NOT MATCHED"
fi