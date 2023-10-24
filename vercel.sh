#!/bin/bash
 
if [[ $VERCEL_GIT_COMMIT_REF == "PROD"  ]] ; then 
    npm run build:prod
elif [[ $VERCEL_GIT_COMMIT_REF == "UAT"  ]] ; then
    npm run build:uat
elif [[ $VERCEL_GIT_COMMIT_REF == "QA"  ]] ; then
    npm run build:qa
else
    echo "BRANCH: $VERCEL_GIT_COMMIT_REF"
    echo "BRANCH NOT MATCHED"
fi