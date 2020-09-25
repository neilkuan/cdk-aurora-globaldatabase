const { ConstructLibraryAws } = require('projen');

const PROJECT_NAME = 'cdk-aurora-globaldatabase';
const PROJECT_DESCRIPTION = 'cdk-aurora-globaldatabase is an AWS CDK construct library that provides Cross Region Create Global Aurora RDS Databases.';

const project = new ConstructLibraryAws({
  name: PROJECT_NAME,
  description: PROJECT_DESCRIPTION,
  repository: 'https://github.com/guan840912/cdk-aurora-globaldatabase.git',
  authorName: 'Neil Kuan',
  authorEmail: 'guan840912@gmail.com',
  keywords: ['aws', 'cdk', 'rds', 'global'],
  catalog: {
    twitter: 'neil_kuan',
    announce: false,
  },
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  cdkVersion: '1.64.0',
  cdkDependencies: [
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-rds',
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-logs',
    '@aws-cdk/core',
    '@aws-cdk/custom-resources',
    '@aws-cdk/aws-iam',
  ],
  python: {
    distName: 'cdk-aurora-globaldatabase',
    module: 'cdk_aurora_globaldatabase',
  },
});

project.gitignore.exclude('cdk.context.json', 'cdk.out', 'venv');

project.npmignore.exclude(
  'cdk.context.json',
  'cdk.out',
  'coverage',
  'yarn-error.log',
  'image',
  'venv',
);
project.synth();