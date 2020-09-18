import { GolbalAuroraRDS } from '../src/index';
import { App, Stack } from '@aws-cdk/core';
import '@aws-cdk/assert/jest';


test('test create RDS', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-stack');
  new GolbalAuroraRDS(stack, 'GolbalAuroraRDS');
  expect(stack).toHaveResource('AWS::RDS::DBCluster')
});