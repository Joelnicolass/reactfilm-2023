#!/bin/bash
 
if [[ $VERCEL_GIT_COMMIT_REF == "PROD"  ]] ; then 
    npm run build:prod
elif [[ $VERCEL_GIT_COMMIT_REF == "UAT"  ]] ; then
    npm run build:uat
elif [[ $VERCEL_GIT_COMMIT_REF == "QA"  ]] ; then
    npm run build:qa
else
    echo "BRANCH: $VERCEL_GIT_COMMIT_REF"
    echo "URL: $VERCEL_BRANCH_URL"
    echo "ENV: $VERCEL_ENV"
    echo "BRANCH NOT MATCHED"
fi