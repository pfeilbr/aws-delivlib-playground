#!/bin/bash

# aws-delivlib-playground v2

set -e
scriptdir=$(cd $(dirname $0) && pwd)

# Some diagnostics output
echo "| Workdir:"
pwd

echo "| Files in workdir:"
find .

echo "| environmentVariables"
set

# Verify that test artifacts are downloaded together with the test script
echo "| Test artifact:"

echo "| cat ./package.json"
cat ./package.json

echo "-------"
echo "TEST PASS"