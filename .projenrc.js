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
  cdkVersion: '2.126.0',
  /**
   * we default release the main branch(cdkv2) with major version 2.
   */
  majorVersion: 2,
  defaultReleaseBranch: 'master',
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
  npmProvenance: true,
  npmTokenSecret: '',
  npmTrustedPublishing: true,
  devDeps: [
    // 'ts-jest@29.1.2',
    'jsii-rosetta@5.0.x',
  ],
  minNodeVersion: '24.0.0',
  workflowNodeVersion: '24',
  typescriptVersion: '^5.5',
  jsiiVersion: '5.9.x',
});

// Add registry-url to setup-node in release_npm job for OIDC Trusted Publishing
const releaseWorkflow = project.release.publisher.project.tryFindObjectFile('.github/workflows/release.yml');
if (releaseWorkflow) {
  releaseWorkflow.addOverride('jobs.release_npm.steps.0.with.registry-url', 'https://registry.npmjs.org');
}

// Add provenance to publishConfig in package.json
project.package.addField('publishConfig', {
  access: 'public',
  provenance: true,
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'image', 'yarn-error.log', 'coverage', 'venv'];
const common_exclude_image = ['cdk.out', 'cdk.context.json', 'yarn-error.log', 'coverage', 'venv', '.history'];
project.gitignore.exclude(...common_exclude_image);

project.npmignore.exclude(...common_exclude);
project.synth();
