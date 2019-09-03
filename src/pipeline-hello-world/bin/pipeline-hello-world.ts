#!/usr/bin/env node
import "source-map-support/register";
import cdk = require("@aws-cdk/cdk");
import { PipelineHelloWorldStack } from "../lib/pipeline-hello-world-stack";

const app = new cdk.App();
new PipelineHelloWorldStack(app, "PipelineHelloWorldStack");
app.run();
