#!/bin/bash
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

echo "| Removing cat"
#cat ./README.md


echo "-------"
echo "TEST PASS"