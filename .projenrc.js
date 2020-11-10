const { AwsCdkConstructLibrary, GithubWorkflow } = require('projen');

const PROJECT_NAME = 'cdk-aurora-globaldatabase';
const PROJECT_DESCRIPTION = 'cdk-aurora-globaldatabase is an AWS CDK construct library that provides Cross Region Create Global Aurora RDS Databases.';
const AUTOMATION_TOKEN = 'AUTOMATION_GITHUB_TOKEN';
const CDK_VERSION = '1.72.0';

const project = new AwsCdkConstructLibrary({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/guan840912/cdk-aurora-globaldatabase.git',
  authorName: 'Neil Kuan',
  authorEmail: 'guan840912@gmail.com',
  keywords: ['aws', 'cdk', 'rds', 'global'],
  catalog: {
    twitter: 'neil_kuan',
    announce: true,
  },
  compat: true,
  projenUpgradeSecret: AUTOMATION_TOKEN,
  cdkVersion: CDK_VERSION,
  stability: 'experimental',
  dependabot: false,
  cdkDependencies: [
    `@aws-cdk/aws-iam@^${CDK_VERSION}`,
    `@aws-cdk/aws-ec2@^${CDK_VERSION}`,
    `@aws-cdk/aws-rds@^${CDK_VERSION}`,
    `@aws-cdk/aws-lambda@^${CDK_VERSION}`,
    `@aws-cdk/aws-logs@^${CDK_VERSION}`,
    `@aws-cdk/core@^${CDK_VERSION}`,
    `@aws-cdk/custom-resources@^${CDK_VERSION}`,
    `@aws-cdk/aws-iam@^${CDK_VERSION}`,
  ],
  python: {
    distName: 'cdk-aurora-globaldatabase',
    module: 'cdk_aurora_globaldatabase',
  },
});

// create a custom projen and yarn upgrade workflow
const workflow = new GithubWorkflow(project, 'ProjenYarnUpgrade');

workflow.on({
  schedule: [{
    cron: '11 0 * * *'
  }], // 0:11am every day
  workflow_dispatch: {}, // allow manual triggering
});

workflow.addJobs({
  upgrade: {
    'runs-on': 'ubuntu-latest',
    'steps': [
      { uses: 'actions/checkout@v2' },
      { 
        uses: 'actions/setup-node@v1',
        with: {
          'node-version': '10.17.0',
        }
      },
      { run: `yarn upgrade` },
      { run: `yarn projen:upgrade` },
      // submit a PR
      {
        name: 'Create Pull Request',
        uses: 'peter-evans/create-pull-request@v3',
        with: {
          'token': '${{ secrets.' + AUTOMATION_TOKEN + ' }}',
          'commit-message': 'chore: upgrade projen',
          'branch': 'auto/projen-upgrade',
          'title': 'chore: upgrade projen and yarn',
          'body': 'This PR upgrades projen and yarn upgrade to the latest version',
          'labels': 'auto-merge',
        }
      },
    ],
  },
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'image', 'yarn-error.log', 'coverage', 'venv'];
const common_exclude_image = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage', 'venv'];
project.gitignore.exclude(...common_exclude_image);

project.npmignore.exclude(...common_exclude);
project.synth();