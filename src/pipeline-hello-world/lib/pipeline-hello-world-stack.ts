import cdk = require("@aws-cdk/cdk");
import delivlib = require("aws-delivlib");
import path = require("path");

const testDir = path.join(__dirname, "..", "tests");

export class PipelineHelloWorldStack extends cdk.Stack {
  constructor(parent: cdk.App, id: string, props: cdk.StackProps = {}) {
    super(parent, id, props);

    const githubRepo = new delivlib.GitHubRepo({
      tokenParameterName:
        "/com/brianpfeil/aws-delivlib-playground/github-personal-access-token",
      repository: "pfeilbr/aws-delivlib-playground"
    });

    const pipeline = new delivlib.Pipeline(this, "GithubPipeline", {
      title: "aws-delivlib test pipeline",
      repo: githubRepo,
      buildSpec: {
        version: "0.2",
        phases: {
          build: {
            commands: [
              'echo "Hello, world!"',
              "mkdir dist",
              "cp README.md dist"
            ]
          }
        },
        artifacts: {
          files: ["**/*"],
          "base-directory": "dist"
        }
      }
    });

    pipeline.addTest("HelloLinux", {
      platform: delivlib.ShellPlatform.LinuxUbuntu,
      entrypoint: "test.sh",
      scriptDirectory: testDir
    });
  }
}
