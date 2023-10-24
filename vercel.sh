#!/bin/bash

source .env

if [[ $BRANCH_NAME == "PROD"  ]] ; then 
    npm run build:prod
elif [[ $BRANCH_NAME == "UAT"  ]] ; then
    npm run build:uat
elif [[ $BRANCH_NAME == "QA"  ]] ; then
    npm run build:qa
else
    echo $BRANCH_NAME
    echo "BRANCH NOT MATCHED"
fi