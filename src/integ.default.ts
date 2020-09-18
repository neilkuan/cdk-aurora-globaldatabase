import { GolbalAuroraRDS, InstanceTypeEnum } from './index';
import { App, Stack, CfnOutput } from '@aws-cdk/core';

const mockApp = new App();
const stack = new Stack(mockApp, 'testing-stack');

const  Gdb = new GolbalAuroraRDS(stack, 'testing',{
  instanceType: InstanceTypeEnum.R5_LARGE,
});


new CfnOutput(stack, 'role', { value: Gdb.rdsPassword });