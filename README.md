# aws-delivlib-playground

learn [aws-delivlib](https://github.com/awslabs/aws-delivlib), which is a library for defining continuous pipelines for building, testing and publishing code libraries through AWS CodeBuild and AWS CodePipeline

## Prerequisites

* pipeline source github repo must exist. (e.g. [pfeilbr/aws-delivlib-playground](https://github.com/pfeilbr/aws-delivlib-playground))
* github personal access token must be stored in SSM Parameter named `/com/brianpfeil/aws-delivlib-playground/github-personal-access-token`
    ![](https://www.evernote.com/l/AAF_-QmIfApO6L_mprwOy_t1KOBcrEHejtwB/image.png)



## Running

[`src/pipeline-hello-world`](src/pipeline-hello-world) is an example pipeline where the source is *this* github repo ([pfeilbr/aws-delivlib-playground](https://github.com/pfeilbr/aws-delivlib-playground))

```sh
mkdir -p src/pipeline-hello-world
cd src/pipeline-hello-world
cdk init --language typescript

# at this time, `aws-delivlib` is not using the most recent version of CDK
# need to do the following
# see https://github.com/aws/aws-cdk/issues/1733
npm remove aws-cdk @aws-cdk/core aws-delivlib
npm i aws-cdk@0.24.1 -D
npm i @aws-cdk/cdk@0.24.1
npm i aws-delivlib

# for dev
npm run watch

# build
npm run build

# generate cfn to stdout
npm run cdk synth

# deploy stack
npm run cdk deploy

# make changes

# build
npm run build

# diff
npm run cdk diff

# delete stack
npm run cdk destroy
```