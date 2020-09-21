import { GolbalAuroraRDSMaster, GolbalAuroraRDSSlave } from '../src/index';
import { App, Stack } from '@aws-cdk/core';
import { Vpc, SubnetType } from '@aws-cdk/aws-ec2';
import '@aws-cdk/assert/jest';

const envTokyo = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'ap-northeast-1' };
test('test create Matser RDS', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack',{env: envTokyo});
  new GolbalAuroraRDSMaster(stack, 'GolbalAuroraRDS');
  expect(stack).toHaveResource('AWS::RDS::DBCluster')
  expect(stack).toHaveResource('AWS::RDS::DBInstance',{
    PubliclyAccessible: false,
  })
});

test('test create Matser Vpc Public', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack',{env: envTokyo});
  const VPCPublic = new Vpc(stack,'defaultVpc',{
    natGateways: 0,
    maxAzs: 3,
    subnetConfiguration: [{
      cidrMask: 26,
      name: 'RunnerVPC',
      subnetType: SubnetType.PUBLIC,
    }],
  });
  new GolbalAuroraRDSMaster(stack, 'GolbalAuroraRDS',{vpc: VPCPublic});
  expect(stack).toHaveResource('AWS::EC2::Subnet',{
    MapPublicIpOnLaunch: true,
  })
  expect(stack).toHaveResource('AWS::RDS::DBInstance',{
    PubliclyAccessible: true,
  })
});

test('test create Slave region vpc', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack',{env: envTokyo});
  new GolbalAuroraRDSSlave(stack, 'GolbalAuroraRDS');
  expect(stack).toHaveResource('AWS::EC2::VPC')
});

test('test create Slave region vpc default Private Subnet', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack',{env: envTokyo});
  new GolbalAuroraRDSSlave(stack, 'GolbalAuroraRDS');
  expect(stack).toHaveResource('AWS::RDS::DBSubnetGroup',{
    DBSubnetGroupDescription: 'Private Subnets for database',
  })
});


test('test create Slave region vpc use Public Subnet', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack',{env: envTokyo});
  new GolbalAuroraRDSSlave(stack, 'GolbalAuroraRDS',{
    subnetType: SubnetType.PUBLIC,
  });
  expect(stack).toHaveResource('AWS::RDS::DBSubnetGroup',{
    DBSubnetGroupDescription: 'Public Subnets for database',
  })
});