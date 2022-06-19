const { awscdk } = require('projen');

const PROJECT_NAME = 'cdk-aurora-globaldatabase';
const PROJECT_DESCRIPTION = 'cdk-aurora-globaldatabase is an AWS CDK construct library that provides Cross Region Create Global Aurora RDS Databases.';

const project = new awscdk.AwsCdkConstructLibrary({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/neilkuan/cdk-aurora-globaldatabase.git',
  authorName: 'Neil Kuan',
  authorEmail: 'guan840912@gmail.com',
  keywords: ['aws', 'cdk', 'rds', 'global'],
  catalog: {
    twitter: 'neil_kuan',
    announce: false,
  },
  compat: true,
  cdkVersion: '1.134.0',
  /**
   * we default release the main branch(cdkv2) with major version 2.
   */
  majorVersion: 2,
  defaultReleaseBranch: 'master',
  /**
    * we also release the cdkv1 branch with major version 1.
    */
  releaseBranches: {
    cdkv1: { npmDistTag: 'cdkv1', majorVersion: 1 },
  },
  stability: 'experimental',
  defaultReleaseBranch: 'master',
  autoDetectBin: false,
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: 'AUTOMATION_GITHUB_TOKEN',
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
  publishToPypi: {
    distName: 'cdk-aurora-globaldatabase',
    module: 'cdk_aurora_globaldatabase',
  },
  rebuildBot: false,
  workflowNodeVersion: '^14.17.0',
  deps: [
    '@aws-cdk/aws-rds@^1.134.0',
    '@aws-cdk/aws-ec2@^1.134.0',
    '@aws-cdk/aws-events@^1.134.0',
    '@aws-cdk/aws-events-targets@^1.134.0',
    '@aws-cdk/aws-lambda@^1.134.0',
    '@aws-cdk/aws-logs@^1.134.0',
    '@aws-cdk/core@^1.134.0',
    '@aws-cdk/aws-iam@^1.134.0',
    '@aws-cdk/custom-resources@^1.134.0',
    'constructs',
  ],
  devDeps: [
    '@types/node',
    '@types/prettier@2.6.0',
  ],
  peerDeps: [
    '@aws-cdk/aws-rds@^1.134.0',
    '@aws-cdk/core@^1.134.0',
    '@aws-cdk/aws-ec2@^1.134.0',
  ],
  typescriptVersion: '4.6.2',
});
project.package.addField('resolutions', {
  'trim-newlines': '3.0.1',

});
const common_exclude = ['cdk.out', 'cdk.context.json', 'image', 'yarn-error.log', 'coverage', 'venv'];
const common_exclude_image = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage', 'venv'];
project.gitignore.exclude(...common_exclude_image);

project.npmignore.exclude(...common_exclude);
project.synth();
