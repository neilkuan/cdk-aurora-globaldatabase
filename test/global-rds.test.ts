import { App, NestedStack, Stack, Token } from 'aws-cdk-lib';
import * as assertions from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as _rds from 'aws-cdk-lib/aws-rds';
import { GlobalAuroraRDSMaster, GlobalAuroraRDSSlaveInfra, InstanceTypeEnum, MySQLtimeZone, StackParams } from '../src/index';

const envTokyo = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'ap-northeast-1' };

test('test create Master RDS', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });
  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS');
  assertions.Template.fromStack(stack).findResources('AWS::RDS::DBCluster');
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBClusterParameterGroup', {
    Family: 'aurora-mysql5.7',
    Parameters: {
      time_zone: 'UTC',
    },
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBInstance', {
    PubliclyAccessible: false,
  });
});

test('test create Matser Vpc Public', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });
  const VPCPublic = new ec2.Vpc(stack, 'defaultVpc', {
    natGateways: 0,
    maxAzs: 3,
    subnetConfiguration: [{
      cidrMask: 26,
      name: 'PublicVPC',
      subnetType: ec2.SubnetType.PUBLIC,
    }],
  });
  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', { vpc: VPCPublic });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::EC2::Subnet', {
    MapPublicIpOnLaunch: true,
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBInstance', {
    PubliclyAccessible: true,
  });
});

test('test update Parameter Group', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });;
  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
    parameters: {
      time_zone: MySQLtimeZone.ASIA_TAIPEI,
    },
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBClusterParameterGroup', {
    Parameters: {
      time_zone: 'Asia/Taipei',
    },
  });
});

test('test update timeZone', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });;
  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
    timeZone: MySQLtimeZone.ASIA_TAIPEI,
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBClusterParameterGroup', {
    Parameters: {
      time_zone: 'Asia/Taipei',
    },
  });
});

test('test change default dbUserName and default database Name', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });;
  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
    dbUserName: 'superuser',
    defaultDatabaseName: 'superdb',
    rdsPassword: '1qaz2wsx',
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBCluster', {
    Engine: 'aurora-mysql',
    DatabaseName: 'superdb',
    EngineVersion: '5.7.mysql_aurora.2.07.9',
    MasterUsername: 'superuser',
    MasterUserPassword: '1qaz2wsx',
  });
});

test('test no default rdsPassword', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });;
  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
    defaultDatabaseName: 'superdb',
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBCluster', {
    Engine: 'aurora-mysql',
    DatabaseName: 'superdb',
    EngineVersion: '5.7.mysql_aurora.2.07.9',
    MasterUsername: {
      'Fn::Join': [
        '',
        [
          '{{resolve:secretsmanager:',
          {
            Ref: 'GlobalAuroraRDSRDSClusterSecretE59E7C4B',
          },
          ':SecretString:username::}}',
        ],
      ],
    },
    MasterUserPassword: {
      'Fn::Join': [
        '',
        [
          '{{resolve:secretsmanager:',
          {
            Ref: 'GlobalAuroraRDSRDSClusterSecretE59E7C4B',
          },
          ':SecretString:password::}}',
        ],
      ],
    },
  });
});

test('test create Slave region vpc', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });
  new GlobalAuroraRDSSlaveInfra(stack, 'GlobalAuroraRDS');
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
});

test('test create Slave region use self vpc', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });
  const rdsVpcSecond = new ec2.Vpc(stack, 'RDSVpcRegionSlave', {
    cidr: '10.109.0.0/16',
    enableDnsHostnames: true,
    enableDnsSupport: true,
    natGateways: 1,
  });
  new GlobalAuroraRDSSlaveInfra(stack, 'GlobalAuroraRDS', {
    vpc: rdsVpcSecond,
  });
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
});

test('test create Slave region vpc default Private Subnet', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });
  new GlobalAuroraRDSSlaveInfra(stack, 'GlobalAuroraRDS');
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBSubnetGroup', {
    DBSubnetGroupDescription: 'Private Subnets for database',
  });
});


test('test create Slave region vpc use Public Subnet', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });
  new GlobalAuroraRDSSlaveInfra(stack, 'GlobalAuroraRDS', {
    subnetType: ec2.SubnetType.PUBLIC,
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBSubnetGroup', {
    DBSubnetGroupDescription: 'Public Subnets for database',
  });
});

test('test create Main region vpc use Postgres cluster', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });
  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
    instanceType: InstanceTypeEnum.R5_LARGE,
    rdsPassword: '1qaz2wsx',
    engineVersion: _rds.DatabaseClusterEngine.auroraPostgres({ version: _rds.AuroraPostgresEngineVersion.VER_12_11 }),
    dbClusterpPG: new _rds.ParameterGroup(stack, 'dbClusterparametergroup', {
      engine: _rds.DatabaseClusterEngine.auroraPostgres({
        version: _rds.AuroraPostgresEngineVersion.VER_12_11,
      }),
      parameters: {
        'rds.force_ssl': '1',
        'timezone': 'UTC+8',
      },
    }),
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBCluster', {
    Engine: 'aurora-postgresql',
    DatabaseName: 'globaldatabase',
    MasterUsername: 'sysadmin',
    MasterUserPassword: '1qaz2wsx',
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::RDS::DBClusterParameterGroup', {
    Parameters: {
      'timezone': 'UTC+8',
      'rds.force_ssl': '1',
    },
  });
});

test('test Create Custom Resource', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });
  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
    instanceType: InstanceTypeEnum.R5_LARGE,
    rdsPassword: '1qaz2wsx',
    engineVersion: _rds.DatabaseClusterEngine.auroraPostgres({ version: _rds.AuroraPostgresEngineVersion.VER_12_11 }),
    dbClusterpPG: new _rds.ParameterGroup(stack, 'dbClusterparametergroup', {
      engine: _rds.DatabaseClusterEngine.auroraPostgres({
        version: _rds.AuroraPostgresEngineVersion.VER_12_11,
      }),
    }),
  });
  assertions.Template.fromStack(stack).findResources('Custom::UpgradeGlobalClusterProvider');
});

test('test add Regional Function', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envTokyo });
  const globalmainstack = new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
    instanceType: InstanceTypeEnum.R5_LARGE,
    rdsPassword: '1qaz2wsx',
    engineVersion: _rds.DatabaseClusterEngine.auroraPostgres({ version: _rds.AuroraPostgresEngineVersion.VER_12_11 }),
    dbClusterpPG: new _rds.ParameterGroup(stack, 'dbClusterparametergroup', {
      engine: _rds.DatabaseClusterEngine.auroraPostgres({
        version: _rds.AuroraPostgresEngineVersion.VER_12_11,
      }),
    }),
  });

  globalmainstack.addRegionalCluster(stack, 'regional', {
    region: 'ap-southeast-1',
    dbSubnetGroupName: 'mock-db-subnet-group-name',
  });

  assertions.Template.fromStack(stack).findResources('Custom::UpgradeGlobalClusterProvider');
  assertions.Template.fromStack(stack).findResources('Custom::addRegionalClusterProvider');
});

const envErrorRegion = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'sa-east-1' };
test('test error Region', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envErrorRegion });
  expect(() => {
    const globalmainstack = new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
      instanceType: InstanceTypeEnum.R5_LARGE,
      rdsPassword: '1qaz2wsx',
      engineVersion: _rds.DatabaseClusterEngine.auroraPostgres({ version: _rds.AuroraPostgresEngineVersion.VER_12_11 }),
      dbClusterpPG: new _rds.ParameterGroup(stack, 'dbClusterparametergroup', {
        engine: _rds.DatabaseClusterEngine.auroraPostgres({
          version: _rds.AuroraPostgresEngineVersion.VER_12_11,
        }),
      }),
    });

    globalmainstack.addRegionalCluster(stack, 'regional', {
      region: 'ap-southeast-1',
      dbSubnetGroupName: 'mock-db-subnet-group-name',
    });
  }).toThrowError(/This region sa-east-1 not Support Global RDS !!!/);
});

test('test error Region input addRegional Function', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack', { env: envErrorRegion });
  expect(() => {
    new GlobalAuroraRDSSlaveInfra(stack, 'GlobalAuroraRDS');
    assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
  }).toThrowError(/This region sa-east-1 not Support Global RDS !!!/);
});

test('test stack resources identifiers', () => {
  const rootStackName = 'root-stack';

  const app = new App();
  const stack = new Stack(app, rootStackName, { env: envTokyo });

  expect(Token.isUnresolved(stack.stackName)).toBeFalsy();
  expect(Token.isUnresolved(stack.region)).toBeFalsy();

  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
    instanceType: InstanceTypeEnum.R5_LARGE,
    credentials: _rds.Credentials.fromGeneratedSecret('sysadmin'),
    engineVersion: _rds.DatabaseClusterEngine.auroraPostgres({ version: _rds.AuroraPostgresEngineVersion.VER_12_11 }),
    dbClusterpPG: new _rds.ParameterGroup(stack, 'dbClusterparametergroup', {
      engine: _rds.DatabaseClusterEngine.auroraPostgres({
        version: _rds.AuroraPostgresEngineVersion.VER_12_11,
      }),
      parameters: {},
    }),
  });

  const synthesized = assertions.Template.fromStack(stack);
  const { Properties: { DBClusterIdentifier } } = Object.values(synthesized.findResources('AWS::RDS::DBCluster'))[0];

  expect(DBClusterIdentifier).toEqual(`${rootStackName}-primary`);

  const { Properties: { GlobalClusterIdentifier } } = Object.values(synthesized.findResources('Custom::UpgradeGlobalClusterProvider'))[0];

  expect(GlobalClusterIdentifier).toEqual(`global-${rootStackName}`);
});

test('test stack resources identifiers', () => {
  const stackName = 'test-stack';

  const app = new App();
  const stack = new Stack(app, 'resource', { stackName, env: envTokyo });

  expect(Token.isUnresolved(stack.stackName)).toBeFalsy();
  expect(Token.isUnresolved(stack.region)).toBeFalsy();
  expect(stack.stackName).toEqual(stackName);

  new GlobalAuroraRDSMaster(stack, 'GlobalAuroraRDS', {
    instanceType: InstanceTypeEnum.R5_LARGE,
    credentials: _rds.Credentials.fromGeneratedSecret('sysadmin'),
    engineVersion: _rds.DatabaseClusterEngine.auroraPostgres({ version: _rds.AuroraPostgresEngineVersion.VER_12_11 }),
    dbClusterpPG: new _rds.ParameterGroup(stack, 'dbClusterparametergroup', {
      engine: _rds.DatabaseClusterEngine.auroraPostgres({
        version: _rds.AuroraPostgresEngineVersion.VER_12_11,
      }),
      parameters: {},
    }),
  });

  const synthesized = assertions.Template.fromStack(stack);

  const { Properties: { DBClusterIdentifier } } = Object.values(synthesized.findResources('AWS::RDS::DBCluster'))[0];

  expect(DBClusterIdentifier).toEqual(`${stack.stackName}-primary`);

  const { Properties: { GlobalClusterIdentifier } } = Object.values(synthesized.findResources('Custom::UpgradeGlobalClusterProvider'))[0];

  expect(GlobalClusterIdentifier).toEqual(`global-${stack.stackName}`);
});

test('test nested stack resources identifiers', () => {
  const nestedStackName = 'nested-stack';

  const app = new App();
  const stack = new Stack(app, 'root-stack', { env: envTokyo });

  const nestedStack = new NestedStack(stack, nestedStackName);

  expect(Token.isUnresolved(stack.stackName)).toBeFalsy();
  expect(Token.isUnresolved(stack.region)).toBeFalsy();

  expect(Token.isUnresolved(nestedStack.stackName)).toBeTruthy();
  expect(Token.isUnresolved(nestedStack.region)).toBeFalsy();

  new GlobalAuroraRDSMaster(nestedStack, 'GlobalAuroraRDS', {
    instanceType: InstanceTypeEnum.R5_LARGE,
    credentials: _rds.Credentials.fromGeneratedSecret('sysadmin'),
    engineVersion: _rds.DatabaseClusterEngine.auroraPostgres({ version: _rds.AuroraPostgresEngineVersion.VER_12_11 }),
    dbClusterpPG: new _rds.ParameterGroup(nestedStack, 'dbClusterparametergroup', {
      engine: _rds.DatabaseClusterEngine.auroraPostgres({
        version: _rds.AuroraPostgresEngineVersion.VER_12_11,
      }),
      parameters: {},
    }),
  });

  const synthesized = assertions.Template.fromStack(nestedStack);
  const { Properties: { DBClusterIdentifier } } = Object.values(synthesized.findResources('AWS::RDS::DBCluster'))[0];

  expect(DBClusterIdentifier).toEqual(`${nestedStackName}-primary`);

  const { Properties: { GlobalClusterIdentifier } } = Object.values(synthesized.findResources('Custom::UpgradeGlobalClusterProvider'))[0];

  expect(GlobalClusterIdentifier).toEqual(`global-${nestedStackName}`);
});

test('test StackParams', () => {
  const rootStackName = 'root-stack';
  const nestedStackName = 'nested-stack';

  const app = new App();
  const stack = new Stack(app, 'root-stack', { env: envTokyo });
  const nestedStack = new NestedStack(stack, nestedStackName);

  expect(Token.isUnresolved(stack.stackName)).toBeFalsy();
  expect(Token.isUnresolved(stack.region)).toBeFalsy();

  expect(Token.isUnresolved(nestedStack.stackName)).toBeTruthy();
  expect(Token.isUnresolved(nestedStack.region)).toBeFalsy();

  const rootStackParams = new StackParams(stack);
  const nestedStackParams = new StackParams(nestedStack);

  expect(rootStackParams.region).toEqual(envTokyo.region);
  expect(rootStackParams.name).toEqual(rootStackName);

  expect(nestedStackParams.region).toEqual(nestedStackParams.region);
  expect(nestedStackParams.name).toEqual(nestedStackName);
});