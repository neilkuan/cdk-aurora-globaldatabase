# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalAuroraRDSMaster <a name="GlobalAuroraRDSMaster" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster"></a>

#### Initializers <a name="Initializers" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.Initializer"></a>

```typescript
import { GlobalAuroraRDSMaster } from 'cdk-aurora-globaldatabase'

new GlobalAuroraRDSMaster(scope: Construct, id: string, props?: GlobalAuroraRDSMasterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps">GlobalAuroraRDSMasterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps">GlobalAuroraRDSMasterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.addRegionalCluster">addRegionalCluster</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addRegionalCluster` <a name="addRegionalCluster" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.addRegionalCluster"></a>

```typescript
public addRegionalCluster(scope: Construct, id: string, options: RegionalOptions): void
```

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.addRegionalCluster.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.addRegionalCluster.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.addRegionalCluster.parameter.options"></a>

- *Type:* <a href="#cdk-aurora-globaldatabase.RegionalOptions">RegionalOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.isConstruct"></a>

```typescript
import { GlobalAuroraRDSMaster } from 'cdk-aurora-globaldatabase'

GlobalAuroraRDSMaster.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.clusterEngineVersion">clusterEngineVersion</a></code> | <code>string</code> | return RDS Cluster DB Engine Version. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.dbClusterpPG">dbClusterpPG</a></code> | <code>aws-cdk-lib.aws_rds.IParameterGroup</code> | return RDS Cluster ParameterGroup. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.engine">engine</a></code> | <code>string</code> | return RDS Cluster DB Engine . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.engineVersion">engineVersion</a></code> | <code>aws-cdk-lib.aws_rds.IClusterEngine</code> | return RDS Cluster DB Engine Version. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.globalClusterArn">globalClusterArn</a></code> | <code>string</code> | return Global RDS Cluster Resource ARN . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.globalClusterIdentifier">globalClusterIdentifier</a></code> | <code>string</code> | return Global RDS Cluster Identifier . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsCluster">rdsCluster</a></code> | <code>aws-cdk-lib.aws_rds.DatabaseCluster</code> | return RDS Cluster. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsClusterarn">rdsClusterarn</a></code> | <code>string</code> | return RDS Cluster Resource ARN . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsInstanceType">rdsInstanceType</a></code> | <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum">InstanceTypeEnum</a></code> | return Global RDS Cluster instance Type . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsIsPublic">rdsIsPublic</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetType</code> | return RDS Cluster is Public ? |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsPassword">rdsPassword</a></code> | <code>string</code> | return RDS Cluster password. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `clusterEngineVersion`<sup>Required</sup> <a name="clusterEngineVersion" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.clusterEngineVersion"></a>

```typescript
public readonly clusterEngineVersion: string;
```

- *Type:* string

return RDS Cluster DB Engine Version.

---

##### `dbClusterpPG`<sup>Required</sup> <a name="dbClusterpPG" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.dbClusterpPG"></a>

```typescript
public readonly dbClusterpPG: IParameterGroup;
```

- *Type:* aws-cdk-lib.aws_rds.IParameterGroup

return RDS Cluster ParameterGroup.

---

##### `engine`<sup>Required</sup> <a name="engine" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

return RDS Cluster DB Engine .

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.engineVersion"></a>

```typescript
public readonly engineVersion: IClusterEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterEngine

return RDS Cluster DB Engine Version.

---

##### `globalClusterArn`<sup>Required</sup> <a name="globalClusterArn" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.globalClusterArn"></a>

```typescript
public readonly globalClusterArn: string;
```

- *Type:* string

return Global RDS Cluster Resource ARN .

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="globalClusterIdentifier" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.globalClusterIdentifier"></a>

```typescript
public readonly globalClusterIdentifier: string;
```

- *Type:* string

return Global RDS Cluster Identifier .

---

##### `rdsCluster`<sup>Required</sup> <a name="rdsCluster" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsCluster"></a>

```typescript
public readonly rdsCluster: DatabaseCluster;
```

- *Type:* aws-cdk-lib.aws_rds.DatabaseCluster

return RDS Cluster.

---

##### `rdsClusterarn`<sup>Required</sup> <a name="rdsClusterarn" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsClusterarn"></a>

```typescript
public readonly rdsClusterarn: string;
```

- *Type:* string

return RDS Cluster Resource ARN .

---

##### `rdsInstanceType`<sup>Required</sup> <a name="rdsInstanceType" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsInstanceType"></a>

```typescript
public readonly rdsInstanceType: InstanceTypeEnum;
```

- *Type:* <a href="#cdk-aurora-globaldatabase.InstanceTypeEnum">InstanceTypeEnum</a>

return Global RDS Cluster instance Type .

---

##### `rdsIsPublic`<sup>Required</sup> <a name="rdsIsPublic" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsIsPublic"></a>

```typescript
public readonly rdsIsPublic: SubnetType;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetType

return RDS Cluster is Public ?

---

##### `rdsPassword`<sup>Optional</sup> <a name="rdsPassword" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMaster.property.rdsPassword"></a>

```typescript
public readonly rdsPassword: string;
```

- *Type:* string

return RDS Cluster password.

if not define props.rdsPassword , password will stored in Secret Manager
Please use this command get password back , "aws secretsmanager get-secret-value --secret-id secret name"

---


### GlobalAuroraRDSSlaveInfra <a name="GlobalAuroraRDSSlaveInfra" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra"></a>

#### Initializers <a name="Initializers" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.Initializer"></a>

```typescript
import { GlobalAuroraRDSSlaveInfra } from 'cdk-aurora-globaldatabase'

new GlobalAuroraRDSSlaveInfra(scope: Construct, id: string, props?: GlobalAuroraRDSSlaveInfraProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps">GlobalAuroraRDSSlaveInfraProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps">GlobalAuroraRDSSlaveInfraProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.isConstruct"></a>

```typescript
import { GlobalAuroraRDSSlaveInfra } from 'cdk-aurora-globaldatabase'

GlobalAuroraRDSSlaveInfra.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.property.dbSubnetGroup">dbSubnetGroup</a></code> | <code>aws-cdk-lib.aws_rds.CfnDBSubnetGroup</code> | GlobalAuroraRDSSlaveInfra subnet group . |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dbSubnetGroup`<sup>Required</sup> <a name="dbSubnetGroup" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfra.property.dbSubnetGroup"></a>

```typescript
public readonly dbSubnetGroup: CfnDBSubnetGroup;
```

- *Type:* aws-cdk-lib.aws_rds.CfnDBSubnetGroup
- *Default:* true

GlobalAuroraRDSSlaveInfra subnet group .

---


## Structs <a name="Structs" id="Structs"></a>

### GlobalAuroraRDSMasterProps <a name="GlobalAuroraRDSMasterProps" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps"></a>

#### Initializer <a name="Initializer" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.Initializer"></a>

```typescript
import { GlobalAuroraRDSMasterProps } from 'cdk-aurora-globaldatabase'

const globalAuroraRDSMasterProps: GlobalAuroraRDSMasterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.credentials">credentials</a></code> | <code>aws-cdk-lib.aws_rds.Credentials</code> | Credentials to use for the RDS database. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.dbClusterpPG">dbClusterpPG</a></code> | <code>aws-cdk-lib.aws_rds.IParameterGroup</code> | RDS ParameterGroup. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.dbUserName">dbUserName</a></code> | <code>string</code> | RDS default Super User Name. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.defaultDatabaseName">defaultDatabaseName</a></code> | <code>string</code> | RDS default Database Name. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | Global RDS Database Cluster Engine Deletion Protection Option . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.engineVersion">engineVersion</a></code> | <code>aws-cdk-lib.aws_rds.IClusterEngine</code> | RDS Database Cluster Engine . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.instanceType">instanceType</a></code> | <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum">InstanceTypeEnum</a></code> | RDS Instance Type only can use r4 or r5 type see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.monitoringInterval">monitoringInterval</a></code> | <code>aws-cdk-lib.Duration</code> | The interval, in seconds, between points when Amazon RDS collects enhanced monitoring metrics for the DB instances. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.monitoringRole">monitoringRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Role that will be used to manage DB instances monitoring. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | RDS Parameters. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.rdsPassword">rdsPassword</a></code> | <code>string</code> | return RDS Cluster password. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Credentials to use for the RDS database. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean</code> | Global RDS Database Cluster Engine Storage Encrypted Option . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.timeZone">timeZone</a></code> | <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone">MySQLtimeZone</a></code> | RDS time zone. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | RDS default VPC. |

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.credentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* aws-cdk-lib.aws_rds.Credentials
- *Default:* creates new credentials

Credentials to use for the RDS database.

---

##### `dbClusterpPG`<sup>Optional</sup> <a name="dbClusterpPG" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.dbClusterpPG"></a>

```typescript
public readonly dbClusterpPG: IParameterGroup;
```

- *Type:* aws-cdk-lib.aws_rds.IParameterGroup
- *Default:* Aurora MySQL ParameterGroup

RDS ParameterGroup.

---

##### `dbUserName`<sup>Optional</sup> <a name="dbUserName" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.dbUserName"></a>

```typescript
public readonly dbUserName: string;
```

- *Type:* string
- *Default:* sysadmin

RDS default Super User Name.

---

##### `defaultDatabaseName`<sup>Optional</sup> <a name="defaultDatabaseName" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.defaultDatabaseName"></a>

```typescript
public readonly defaultDatabaseName: string;
```

- *Type:* string
- *Default:* globaldatabase

RDS default Database Name.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Global RDS Database Cluster Engine Deletion Protection Option .

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.engineVersion"></a>

```typescript
public readonly engineVersion: IClusterEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterEngine
- *Default:* rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_2_07_1,})

RDS Database Cluster Engine .

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceTypeEnum;
```

- *Type:* <a href="#cdk-aurora-globaldatabase.InstanceTypeEnum">InstanceTypeEnum</a>
- *Default:* r5.large

RDS Instance Type only can use r4 or r5 type see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations.

---

##### `monitoringInterval`<sup>Optional</sup> <a name="monitoringInterval" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.monitoringInterval"></a>

```typescript
public readonly monitoringInterval: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* no enhanced monitoring

The interval, in seconds, between points when Amazon RDS collects enhanced monitoring metrics for the DB instances.

---

##### `monitoringRole`<sup>Optional</sup> <a name="monitoringRole" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.monitoringRole"></a>

```typescript
public readonly monitoringRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role is automatically created for you

Role that will be used to manage DB instances monitoring.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {time_zone: 'UTC'}

RDS Parameters.

---

##### `rdsPassword`<sup>Optional</sup> <a name="rdsPassword" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.rdsPassword"></a>

```typescript
public readonly rdsPassword: string;
```

- *Type:* string

return RDS Cluster password.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* []

Credentials to use for the RDS database.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean;
```

- *Type:* boolean
- *Default:* true

Global RDS Database Cluster Engine Storage Encrypted Option .

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.timeZone"></a>

```typescript
public readonly timeZone: MySQLtimeZone;
```

- *Type:* <a href="#cdk-aurora-globaldatabase.MySQLtimeZone">MySQLtimeZone</a>
- *Default:* MySQLtimeZone.UTC

RDS time zone.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-aurora-globaldatabase.GlobalAuroraRDSMasterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* new VPC

RDS default VPC.

---

### GlobalAuroraRDSSlaveInfraProps <a name="GlobalAuroraRDSSlaveInfraProps" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps"></a>

#### Initializer <a name="Initializer" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.Initializer"></a>

```typescript
import { GlobalAuroraRDSSlaveInfraProps } from 'cdk-aurora-globaldatabase'

const globalAuroraRDSSlaveInfraProps: GlobalAuroraRDSSlaveInfraProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | Global RDS Database Cluster Engine Deletion Protection Option . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | RDS Stack. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.storageEncrypted">storageEncrypted</a></code> | <code>boolean</code> | Global RDS Database Cluster Engine Storage Encrypted Option . |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.subnetType">subnetType</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetType</code> | Slave region. |
| <code><a href="#cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | Slave region VPC. |

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Global RDS Database Cluster Engine Deletion Protection Option .

---

##### `stack`<sup>Optional</sup> <a name="stack" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

RDS Stack.

---

##### `storageEncrypted`<sup>Optional</sup> <a name="storageEncrypted" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: boolean;
```

- *Type:* boolean
- *Default:* true

Global RDS Database Cluster Engine Storage Encrypted Option .

---

##### `subnetType`<sup>Optional</sup> <a name="subnetType" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.subnetType"></a>

```typescript
public readonly subnetType: SubnetType;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetType

Slave region.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-aurora-globaldatabase.GlobalAuroraRDSSlaveInfraProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* new VPC

Slave region VPC.

---

### RegionalOptions <a name="RegionalOptions" id="cdk-aurora-globaldatabase.RegionalOptions"></a>

#### Initializer <a name="Initializer" id="cdk-aurora-globaldatabase.RegionalOptions.Initializer"></a>

```typescript
import { RegionalOptions } from 'cdk-aurora-globaldatabase'

const regionalOptions: RegionalOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.RegionalOptions.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aurora-globaldatabase.RegionalOptions.property.dbParameterGroup">dbParameterGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aurora-globaldatabase.RegionalOptions.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aurora-globaldatabase.RegionalOptions.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `region`<sup>Required</sup> <a name="region" id="cdk-aurora-globaldatabase.RegionalOptions.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `dbParameterGroup`<sup>Optional</sup> <a name="dbParameterGroup" id="cdk-aurora-globaldatabase.RegionalOptions.property.dbParameterGroup"></a>

```typescript
public readonly dbParameterGroup: string;
```

- *Type:* string

---

##### `dbSubnetGroupName`<sup>Optional</sup> <a name="dbSubnetGroupName" id="cdk-aurora-globaldatabase.RegionalOptions.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="cdk-aurora-globaldatabase.RegionalOptions.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### StackParams <a name="StackParams" id="cdk-aurora-globaldatabase.StackParams"></a>

#### Initializers <a name="Initializers" id="cdk-aurora-globaldatabase.StackParams.Initializer"></a>

```typescript
import { StackParams } from 'cdk-aurora-globaldatabase'

new StackParams(scope: Construct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.StackParams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-aurora-globaldatabase.StackParams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.StackParams.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aurora-globaldatabase.StackParams.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aurora-globaldatabase.StackParams.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `account`<sup>Required</sup> <a name="account" id="cdk-aurora-globaldatabase.StackParams.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-aurora-globaldatabase.StackParams.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="cdk-aurora-globaldatabase.StackParams.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### InstanceTypeEnum <a name="InstanceTypeEnum" id="cdk-aurora-globaldatabase.InstanceTypeEnum"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R4_LARGE">R4_LARGE</a></code> | db Instance Type r4.large. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R4_XLARGE">R4_XLARGE</a></code> | db Instance Type r4.xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R4_2XLARGE">R4_2XLARGE</a></code> | db Instance Type r4.2xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R4_4XLARGE">R4_4XLARGE</a></code> | db Instance Type r4.4xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R4_8XLARGE">R4_8XLARGE</a></code> | db Instance Type r4.8xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R4_16XLARGE">R4_16XLARGE</a></code> | db Instance Type r4.16xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R5_LARGE">R5_LARGE</a></code> | db Instance Type r5.large. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R5_XLARGE">R5_XLARGE</a></code> | db Instance Type r5.xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R5_2XLARGE">R5_2XLARGE</a></code> | db Instance Type r5.2xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R5_4XLARGE">R5_4XLARGE</a></code> | db Instance Type r5.4xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R5_8XLARGE">R5_8XLARGE</a></code> | db Instance Type r5.8xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R5_12XLARGE">R5_12XLARGE</a></code> | db Instance Type r5.12xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R5_16XLARGE">R5_16XLARGE</a></code> | db Instance Type r5.16xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R5_24XLARGE">R5_24XLARGE</a></code> | db Instance Type r5.24xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_LARGE">R6G_LARGE</a></code> | db Instance Type r6g.large. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_XLARGE">R6G_XLARGE</a></code> | db Instance Type r6g.xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_2XLARGE">R6G_2XLARGE</a></code> | db Instance Type r6g.2xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_4XLARGE">R6G_4XLARGE</a></code> | db Instance Type r6g.4xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_8XLARGE">R6G_8XLARGE</a></code> | db Instance Type r6g.8xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_12XLARGE">R6G_12XLARGE</a></code> | db Instance Type r6g.12xlarge. |
| <code><a href="#cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_16XLARGE">R6G_16XLARGE</a></code> | db Instance Type r6g.16xlarge. |

---

##### `R4_LARGE` <a name="R4_LARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R4_LARGE"></a>

db Instance Type r4.large.

---


##### `R4_XLARGE` <a name="R4_XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R4_XLARGE"></a>

db Instance Type r4.xlarge.

---


##### `R4_2XLARGE` <a name="R4_2XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R4_2XLARGE"></a>

db Instance Type r4.2xlarge.

---


##### `R4_4XLARGE` <a name="R4_4XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R4_4XLARGE"></a>

db Instance Type r4.4xlarge.

---


##### `R4_8XLARGE` <a name="R4_8XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R4_8XLARGE"></a>

db Instance Type r4.8xlarge.

---


##### `R4_16XLARGE` <a name="R4_16XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R4_16XLARGE"></a>

db Instance Type r4.16xlarge.

---


##### `R5_LARGE` <a name="R5_LARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R5_LARGE"></a>

db Instance Type r5.large.

---


##### `R5_XLARGE` <a name="R5_XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R5_XLARGE"></a>

db Instance Type r5.xlarge.

---


##### `R5_2XLARGE` <a name="R5_2XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R5_2XLARGE"></a>

db Instance Type r5.2xlarge.

---


##### `R5_4XLARGE` <a name="R5_4XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R5_4XLARGE"></a>

db Instance Type r5.4xlarge.

---


##### `R5_8XLARGE` <a name="R5_8XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R5_8XLARGE"></a>

db Instance Type r5.8xlarge.

---


##### `R5_12XLARGE` <a name="R5_12XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R5_12XLARGE"></a>

db Instance Type r5.12xlarge.

---


##### `R5_16XLARGE` <a name="R5_16XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R5_16XLARGE"></a>

db Instance Type r5.16xlarge.

---


##### `R5_24XLARGE` <a name="R5_24XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R5_24XLARGE"></a>

db Instance Type r5.24xlarge.

---


##### `R6G_LARGE` <a name="R6G_LARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_LARGE"></a>

db Instance Type r6g.large.

---


##### `R6G_XLARGE` <a name="R6G_XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_XLARGE"></a>

db Instance Type r6g.xlarge.

---


##### `R6G_2XLARGE` <a name="R6G_2XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_2XLARGE"></a>

db Instance Type r6g.2xlarge.

---


##### `R6G_4XLARGE` <a name="R6G_4XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_4XLARGE"></a>

db Instance Type r6g.4xlarge.

---


##### `R6G_8XLARGE` <a name="R6G_8XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_8XLARGE"></a>

db Instance Type r6g.8xlarge.

---


##### `R6G_12XLARGE` <a name="R6G_12XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_12XLARGE"></a>

db Instance Type r6g.12xlarge.

---


##### `R6G_16XLARGE` <a name="R6G_16XLARGE" id="cdk-aurora-globaldatabase.InstanceTypeEnum.R6G_16XLARGE"></a>

db Instance Type r6g.16xlarge.

---


### MySQLtimeZone <a name="MySQLtimeZone" id="cdk-aurora-globaldatabase.MySQLtimeZone"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.UTC">UTC</a></code> | TIME ZONE UTC. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_TAIPEI">ASIA_TAIPEI</a></code> | TIME ZONE Asia/Taipei. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_CAIRO">AFRICA_CAIRO</a></code> | TIME ZONE Africa/Cairo. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_BANGKOK">ASIA_BANGKOK</a></code> | TIME ZONE Asia/Bangkok. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_DARWIN">AUSTRALIA_DARWIN</a></code> | TIME ZONE Australia/Darwin. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_CASABLANCA">AFRICA_CASABLANCA</a></code> | TIME ZONE Africa/Casablanca. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_BEIRUT">ASIA_BEIRUT</a></code> | TIME ZONE Asia/Beirut. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_HOBART">AUSTRALIA_HOBART</a></code> | TIME ZONE Australia/Hobart. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_HARARE">AFRICA_HARARE</a></code> | TIME ZONE Africa/Harare. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_CALCUTTA">ASIA_CALCUTTA</a></code> | TIME ZONE Asia/Calcutta. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_PERTH">AUSTRALIA_PERTH</a></code> | TIME ZONE Australia/Perth. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_MONROVIA">AFRICA_MONROVIA</a></code> | TIME ZONE Africa/Monrovia. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_DAMASCUS">ASIA_DAMASCUS</a></code> | TIME ZONE Asia/Damascus. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_SYDNEY">AUSTRALIA_SYDNEY</a></code> | TIME ZONE Australia/Sydney. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_NAIROBI">AFRICA_NAIROBI</a></code> | TIME ZONE Africa/Nairobi. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_DHAKA">ASIA_DHAKA</a></code> | TIME ZONE Asia/Dhaka. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.BRAZIL_EAST">BRAZIL_EAST</a></code> | TIME ZONE Brazil/East. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_TRIPOLI">AFRICA_TRIPOLI</a></code> | TIME ZONE Africa/Tripoli. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_IRKUTSK">ASIA_IRKUTSK</a></code> | TIME ZONE Asia/Irkutsk. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.CANADA_NEWFOUNDLAND">CANADA_NEWFOUNDLAND</a></code> | TIME ZONE Canada/Newfoundland. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_WINDHOEK">AFRICA_WINDHOEK</a></code> | TIME ZONE Africa/Windhoek. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_JERUSALEM">ASIA_JERUSALEM</a></code> | TIME ZONE Asia/Jerusalem. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.CANADA_SASKATCHEWAN">CANADA_SASKATCHEWAN</a></code> | TIME ZONE Canada/Saskatchewan. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_ARAGUAINA">AMERICA_ARAGUAINA</a></code> | TIME ZONE America/Araguaina. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_KABUL">ASIA_KABUL</a></code> | TIME ZONE Asia/Kabul. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_AMSTERDAM">EUROPE_AMSTERDAM</a></code> | TIME ZONE Europe/Amsterdam. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_ASUNCION">AMERICA_ASUNCION</a></code> | TIME ZONE America/Asuncion. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_KARACHI">ASIA_KARACHI</a></code> | TIME ZONE Asia/Karachi. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_ATHENS">EUROPE_ATHENS</a></code> | TIME ZONE Europe/Athens. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_BOGOTA">AMERICA_BOGOTA</a></code> | TIME ZONE America/Bogota. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_KATHMANDU">ASIA_KATHMANDU</a></code> | TIME ZONE Asia/Kathmandu. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_DUBLIN">EUROPE_DUBLIN</a></code> | TIME ZONE Europe/Dublin. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_CARACAS">AMERICA_CARACAS</a></code> | TIME ZONE America/Caracas. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_KRASNOYARSK">ASIA_KRASNOYARSK</a></code> | TIME ZONE Asia/Krasnoyarsk. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_HELSINKI">EUROPE_HELSINKI</a></code> | TIME ZONE Europe/Helsinki. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_CHIHUAHUA">AMERICA_CHIHUAHUA</a></code> | TIME ZONE America/Chihuahua. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_MAGADAN">ASIA_MAGADAN</a></code> | TIME ZONE Asia/Magadan. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_ISTANBUL">EUROPE_ISTANBUL</a></code> | TIME ZONE Europe/Istanbul. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_CUIABA">AMERICA_CUIABA</a></code> | TIME ZONE America/Cuiaba. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_MUSCAT">ASIA_MUSCAT</a></code> | TIME ZONE Asia/Muscat. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_KALININGRAD">EUROPE_KALININGRAD</a></code> | TIME ZONE Europe/Kaliningrad. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_DENVER">AMERICA_DENVER</a></code> | TIME ZONE America/Denver. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_NOVOSIBIRSK">ASIA_NOVOSIBIRSK</a></code> | TIME ZONE Asia/Novosibirsk. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_MOSCOW">EUROPE_MOSCOW</a></code> | TIME ZONE Europe/Moscow'. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_FORTALEZA">AMERICA_FORTALEZA</a></code> | TIME ZONE America/Fortaleza. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_RIYADH">ASIA_RIYADH</a></code> | TIME ZONE Asia/Riyadh. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_PARIS">EUROPE_PARIS</a></code> | TIME ZONE Europe/Paris. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_GUATEMALA">AMERICA_GUATEMALA</a></code> | TIME ZONE America/Guatemala. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_SEOUL">ASIA_SEOUL</a></code> | TIME ZONE Asia/Seoul. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_PRAGUE">EUROPE_PRAGUE</a></code> | TIME ZONE Europe/Prague. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_HALIFAX">AMERICA_HALIFAX</a></code> | TIME ZONE America/Halifax. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_SHANGHAI">ASIA_SHANGHAI</a></code> | TIME ZONE Asia/Shanghai. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_SARAJEVO">EUROPE_SARAJEVO</a></code> | TIME ZONE Europe/Sarajevo. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_MANAUS">AMERICA_MANAUS</a></code> | TIME ZONE America/Manaus. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_SINGAPORE">ASIA_SINGAPORE</a></code> | TIME ZONE Asia/Singapore. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_AUCKLAND">PACIFIC_AUCKLAND</a></code> | TIME ZONE Pacific/Auckland. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_MATAMOROS">AMERICA_MATAMOROS</a></code> | TIME ZONE America/Matamoros. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_FIJI">PACIFIC_FIJI</a></code> | TIME ZONE Pacific/Fiji. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_MONTERREY">AMERICA_MONTERREY</a></code> | TIME ZONE America/Monterrey. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_TEHRAN">ASIA_TEHRAN</a></code> | TIME ZONE Asia/Tehran. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_GUAM">PACIFIC_GUAM</a></code> | TIME ZONE Pacific/Guam. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_MONTEVIDEO">AMERICA_MONTEVIDEO</a></code> | TIME ZONE America/Montevideo. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_TOKYO">ASIA_TOKYO</a></code> | TIME ZONE Asia/Tokyo. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_HONOLULU">PACIFIC_HONOLULU</a></code> | TIME ZONE Pacific/Honolulu. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_PHOENIX">AMERICA_PHOENIX</a></code> | TIME ZONE America/Phoenix. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_ULAANBAATAR">ASIA_ULAANBAATAR</a></code> | TIME ZONE Asia/Ulaanbaatar. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_SAMOA">PACIFIC_SAMOA</a></code> | TIME ZONE Pacific/Samoa. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_SANTIAGO">AMERICA_SANTIAGO</a></code> | TIME ZONE America/Santiago. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_VLADIVOSTOK">ASIA_VLADIVOSTOK</a></code> | TIME ZONE Asia/Vladivostok. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.US_ALASKA">US_ALASKA</a></code> | TIME ZONE US/Alaska. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_TIJUANA">AMERICA_TIJUANA</a></code> | TIME ZONE America/Tijuana. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_YAKUTSK">ASIA_YAKUTSK</a></code> | TIME ZONE Asia/Yakutsk. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.US_CENTRAL">US_CENTRAL</a></code> | TIME ZONE US/Central. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_AMMAN">ASIA_AMMAN</a></code> | TIME ZONE Asia/Amman. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_YEREVAN">ASIA_YEREVAN</a></code> | TIME ZONE Asia/Yerevan. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.US_EASTERN">US_EASTERN</a></code> | TIME ZONE US/Eastern. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_ASHGABAT">ASIA_ASHGABAT</a></code> | TIME ZONE Asia/Ashgabat. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ATLANTIC_AZORES">ATLANTIC_AZORES</a></code> | TIME ZONE Atlantic/Azores. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.US_EAST_INDIANA">US_EAST_INDIANA</a></code> | TIME ZONE US/East-Indiana. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_BAGHDAD">ASIA_BAGHDAD</a></code> | TIME ZONE Asia/Baghdad. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_ADELAIDE">AUSTRALIA_ADELAIDE</a></code> | TIME ZONE Australia/Adelaide. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.US_PACIFIC">US_PACIFIC</a></code> | TIME ZONE US/Pacific. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_BAKU">ASIA_BAKU</a></code> | TIME ZONE Asia/Baku. |
| <code><a href="#cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_BRISBANE">AUSTRALIA_BRISBANE</a></code> | TIME ZONE Australia/Brisbane. |

---

##### `UTC` <a name="UTC" id="cdk-aurora-globaldatabase.MySQLtimeZone.UTC"></a>

TIME ZONE UTC.

---


##### `ASIA_TAIPEI` <a name="ASIA_TAIPEI" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_TAIPEI"></a>

TIME ZONE Asia/Taipei.

---


##### `AFRICA_CAIRO` <a name="AFRICA_CAIRO" id="cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_CAIRO"></a>

TIME ZONE Africa/Cairo.

---


##### `ASIA_BANGKOK` <a name="ASIA_BANGKOK" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_BANGKOK"></a>

TIME ZONE Asia/Bangkok.

---


##### `AUSTRALIA_DARWIN` <a name="AUSTRALIA_DARWIN" id="cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_DARWIN"></a>

TIME ZONE Australia/Darwin.

---


##### `AFRICA_CASABLANCA` <a name="AFRICA_CASABLANCA" id="cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_CASABLANCA"></a>

TIME ZONE Africa/Casablanca.

---


##### `ASIA_BEIRUT` <a name="ASIA_BEIRUT" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_BEIRUT"></a>

TIME ZONE Asia/Beirut.

---


##### `AUSTRALIA_HOBART` <a name="AUSTRALIA_HOBART" id="cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_HOBART"></a>

TIME ZONE Australia/Hobart.

---


##### `AFRICA_HARARE` <a name="AFRICA_HARARE" id="cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_HARARE"></a>

TIME ZONE Africa/Harare.

---


##### `ASIA_CALCUTTA` <a name="ASIA_CALCUTTA" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_CALCUTTA"></a>

TIME ZONE Asia/Calcutta.

---


##### `AUSTRALIA_PERTH` <a name="AUSTRALIA_PERTH" id="cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_PERTH"></a>

TIME ZONE Australia/Perth.

---


##### `AFRICA_MONROVIA` <a name="AFRICA_MONROVIA" id="cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_MONROVIA"></a>

TIME ZONE Africa/Monrovia.

---


##### `ASIA_DAMASCUS` <a name="ASIA_DAMASCUS" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_DAMASCUS"></a>

TIME ZONE Asia/Damascus.

---


##### `AUSTRALIA_SYDNEY` <a name="AUSTRALIA_SYDNEY" id="cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_SYDNEY"></a>

TIME ZONE Australia/Sydney.

---


##### `AFRICA_NAIROBI` <a name="AFRICA_NAIROBI" id="cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_NAIROBI"></a>

TIME ZONE Africa/Nairobi.

---


##### `ASIA_DHAKA` <a name="ASIA_DHAKA" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_DHAKA"></a>

TIME ZONE Asia/Dhaka.

---


##### `BRAZIL_EAST` <a name="BRAZIL_EAST" id="cdk-aurora-globaldatabase.MySQLtimeZone.BRAZIL_EAST"></a>

TIME ZONE Brazil/East.

---


##### `AFRICA_TRIPOLI` <a name="AFRICA_TRIPOLI" id="cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_TRIPOLI"></a>

TIME ZONE Africa/Tripoli.

---


##### `ASIA_IRKUTSK` <a name="ASIA_IRKUTSK" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_IRKUTSK"></a>

TIME ZONE Asia/Irkutsk.

---


##### `CANADA_NEWFOUNDLAND` <a name="CANADA_NEWFOUNDLAND" id="cdk-aurora-globaldatabase.MySQLtimeZone.CANADA_NEWFOUNDLAND"></a>

TIME ZONE Canada/Newfoundland.

---


##### `AFRICA_WINDHOEK` <a name="AFRICA_WINDHOEK" id="cdk-aurora-globaldatabase.MySQLtimeZone.AFRICA_WINDHOEK"></a>

TIME ZONE Africa/Windhoek.

---


##### `ASIA_JERUSALEM` <a name="ASIA_JERUSALEM" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_JERUSALEM"></a>

TIME ZONE Asia/Jerusalem.

---


##### `CANADA_SASKATCHEWAN` <a name="CANADA_SASKATCHEWAN" id="cdk-aurora-globaldatabase.MySQLtimeZone.CANADA_SASKATCHEWAN"></a>

TIME ZONE Canada/Saskatchewan.

---


##### `AMERICA_ARAGUAINA` <a name="AMERICA_ARAGUAINA" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_ARAGUAINA"></a>

TIME ZONE America/Araguaina.

---


##### `ASIA_KABUL` <a name="ASIA_KABUL" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_KABUL"></a>

TIME ZONE Asia/Kabul.

---


##### `EUROPE_AMSTERDAM` <a name="EUROPE_AMSTERDAM" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_AMSTERDAM"></a>

TIME ZONE Europe/Amsterdam.

---


##### `AMERICA_ASUNCION` <a name="AMERICA_ASUNCION" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_ASUNCION"></a>

TIME ZONE America/Asuncion.

---


##### `ASIA_KARACHI` <a name="ASIA_KARACHI" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_KARACHI"></a>

TIME ZONE Asia/Karachi.

---


##### `EUROPE_ATHENS` <a name="EUROPE_ATHENS" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_ATHENS"></a>

TIME ZONE Europe/Athens.

---


##### `AMERICA_BOGOTA` <a name="AMERICA_BOGOTA" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_BOGOTA"></a>

TIME ZONE America/Bogota.

---


##### `ASIA_KATHMANDU` <a name="ASIA_KATHMANDU" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_KATHMANDU"></a>

TIME ZONE Asia/Kathmandu.

---


##### `EUROPE_DUBLIN` <a name="EUROPE_DUBLIN" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_DUBLIN"></a>

TIME ZONE Europe/Dublin.

---


##### `AMERICA_CARACAS` <a name="AMERICA_CARACAS" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_CARACAS"></a>

TIME ZONE America/Caracas.

---


##### `ASIA_KRASNOYARSK` <a name="ASIA_KRASNOYARSK" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_KRASNOYARSK"></a>

TIME ZONE Asia/Krasnoyarsk.

---


##### `EUROPE_HELSINKI` <a name="EUROPE_HELSINKI" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_HELSINKI"></a>

TIME ZONE Europe/Helsinki.

---


##### `AMERICA_CHIHUAHUA` <a name="AMERICA_CHIHUAHUA" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_CHIHUAHUA"></a>

TIME ZONE America/Chihuahua.

---


##### `ASIA_MAGADAN` <a name="ASIA_MAGADAN" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_MAGADAN"></a>

TIME ZONE Asia/Magadan.

---


##### `EUROPE_ISTANBUL` <a name="EUROPE_ISTANBUL" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_ISTANBUL"></a>

TIME ZONE Europe/Istanbul.

---


##### `AMERICA_CUIABA` <a name="AMERICA_CUIABA" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_CUIABA"></a>

TIME ZONE America/Cuiaba.

---


##### `ASIA_MUSCAT` <a name="ASIA_MUSCAT" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_MUSCAT"></a>

TIME ZONE Asia/Muscat.

---


##### `EUROPE_KALININGRAD` <a name="EUROPE_KALININGRAD" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_KALININGRAD"></a>

TIME ZONE Europe/Kaliningrad.

---


##### `AMERICA_DENVER` <a name="AMERICA_DENVER" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_DENVER"></a>

TIME ZONE America/Denver.

---


##### `ASIA_NOVOSIBIRSK` <a name="ASIA_NOVOSIBIRSK" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_NOVOSIBIRSK"></a>

TIME ZONE Asia/Novosibirsk.

---


##### `EUROPE_MOSCOW` <a name="EUROPE_MOSCOW" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_MOSCOW"></a>

TIME ZONE Europe/Moscow'.

---


##### `AMERICA_FORTALEZA` <a name="AMERICA_FORTALEZA" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_FORTALEZA"></a>

TIME ZONE America/Fortaleza.

---


##### `ASIA_RIYADH` <a name="ASIA_RIYADH" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_RIYADH"></a>

TIME ZONE Asia/Riyadh.

---


##### `EUROPE_PARIS` <a name="EUROPE_PARIS" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_PARIS"></a>

TIME ZONE Europe/Paris.

---


##### `AMERICA_GUATEMALA` <a name="AMERICA_GUATEMALA" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_GUATEMALA"></a>

TIME ZONE America/Guatemala.

---


##### `ASIA_SEOUL` <a name="ASIA_SEOUL" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_SEOUL"></a>

TIME ZONE Asia/Seoul.

---


##### `EUROPE_PRAGUE` <a name="EUROPE_PRAGUE" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_PRAGUE"></a>

TIME ZONE Europe/Prague.

---


##### `AMERICA_HALIFAX` <a name="AMERICA_HALIFAX" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_HALIFAX"></a>

TIME ZONE America/Halifax.

---


##### `ASIA_SHANGHAI` <a name="ASIA_SHANGHAI" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_SHANGHAI"></a>

TIME ZONE Asia/Shanghai.

---


##### `EUROPE_SARAJEVO` <a name="EUROPE_SARAJEVO" id="cdk-aurora-globaldatabase.MySQLtimeZone.EUROPE_SARAJEVO"></a>

TIME ZONE Europe/Sarajevo.

---


##### `AMERICA_MANAUS` <a name="AMERICA_MANAUS" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_MANAUS"></a>

TIME ZONE America/Manaus.

---


##### `ASIA_SINGAPORE` <a name="ASIA_SINGAPORE" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_SINGAPORE"></a>

TIME ZONE Asia/Singapore.

---


##### `PACIFIC_AUCKLAND` <a name="PACIFIC_AUCKLAND" id="cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_AUCKLAND"></a>

TIME ZONE Pacific/Auckland.

---


##### `AMERICA_MATAMOROS` <a name="AMERICA_MATAMOROS" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_MATAMOROS"></a>

TIME ZONE America/Matamoros.

---


##### `PACIFIC_FIJI` <a name="PACIFIC_FIJI" id="cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_FIJI"></a>

TIME ZONE Pacific/Fiji.

---


##### `AMERICA_MONTERREY` <a name="AMERICA_MONTERREY" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_MONTERREY"></a>

TIME ZONE America/Monterrey.

---


##### `ASIA_TEHRAN` <a name="ASIA_TEHRAN" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_TEHRAN"></a>

TIME ZONE Asia/Tehran.

---


##### `PACIFIC_GUAM` <a name="PACIFIC_GUAM" id="cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_GUAM"></a>

TIME ZONE Pacific/Guam.

---


##### `AMERICA_MONTEVIDEO` <a name="AMERICA_MONTEVIDEO" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_MONTEVIDEO"></a>

TIME ZONE America/Montevideo.

---


##### `ASIA_TOKYO` <a name="ASIA_TOKYO" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_TOKYO"></a>

TIME ZONE Asia/Tokyo.

---


##### `PACIFIC_HONOLULU` <a name="PACIFIC_HONOLULU" id="cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_HONOLULU"></a>

TIME ZONE Pacific/Honolulu.

---


##### `AMERICA_PHOENIX` <a name="AMERICA_PHOENIX" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_PHOENIX"></a>

TIME ZONE America/Phoenix.

---


##### `ASIA_ULAANBAATAR` <a name="ASIA_ULAANBAATAR" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_ULAANBAATAR"></a>

TIME ZONE Asia/Ulaanbaatar.

---


##### `PACIFIC_SAMOA` <a name="PACIFIC_SAMOA" id="cdk-aurora-globaldatabase.MySQLtimeZone.PACIFIC_SAMOA"></a>

TIME ZONE Pacific/Samoa.

---


##### `AMERICA_SANTIAGO` <a name="AMERICA_SANTIAGO" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_SANTIAGO"></a>

TIME ZONE America/Santiago.

---


##### `ASIA_VLADIVOSTOK` <a name="ASIA_VLADIVOSTOK" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_VLADIVOSTOK"></a>

TIME ZONE Asia/Vladivostok.

---


##### `US_ALASKA` <a name="US_ALASKA" id="cdk-aurora-globaldatabase.MySQLtimeZone.US_ALASKA"></a>

TIME ZONE US/Alaska.

---


##### `AMERICA_TIJUANA` <a name="AMERICA_TIJUANA" id="cdk-aurora-globaldatabase.MySQLtimeZone.AMERICA_TIJUANA"></a>

TIME ZONE America/Tijuana.

---


##### `ASIA_YAKUTSK` <a name="ASIA_YAKUTSK" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_YAKUTSK"></a>

TIME ZONE Asia/Yakutsk.

---


##### `US_CENTRAL` <a name="US_CENTRAL" id="cdk-aurora-globaldatabase.MySQLtimeZone.US_CENTRAL"></a>

TIME ZONE US/Central.

---


##### `ASIA_AMMAN` <a name="ASIA_AMMAN" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_AMMAN"></a>

TIME ZONE Asia/Amman.

---


##### `ASIA_YEREVAN` <a name="ASIA_YEREVAN" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_YEREVAN"></a>

TIME ZONE Asia/Yerevan.

---


##### `US_EASTERN` <a name="US_EASTERN" id="cdk-aurora-globaldatabase.MySQLtimeZone.US_EASTERN"></a>

TIME ZONE US/Eastern.

---


##### `ASIA_ASHGABAT` <a name="ASIA_ASHGABAT" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_ASHGABAT"></a>

TIME ZONE Asia/Ashgabat.

---


##### `ATLANTIC_AZORES` <a name="ATLANTIC_AZORES" id="cdk-aurora-globaldatabase.MySQLtimeZone.ATLANTIC_AZORES"></a>

TIME ZONE Atlantic/Azores.

---


##### `US_EAST_INDIANA` <a name="US_EAST_INDIANA" id="cdk-aurora-globaldatabase.MySQLtimeZone.US_EAST_INDIANA"></a>

TIME ZONE US/East-Indiana.

---


##### `ASIA_BAGHDAD` <a name="ASIA_BAGHDAD" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_BAGHDAD"></a>

TIME ZONE Asia/Baghdad.

---


##### `AUSTRALIA_ADELAIDE` <a name="AUSTRALIA_ADELAIDE" id="cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_ADELAIDE"></a>

TIME ZONE Australia/Adelaide.

---


##### `US_PACIFIC` <a name="US_PACIFIC" id="cdk-aurora-globaldatabase.MySQLtimeZone.US_PACIFIC"></a>

TIME ZONE US/Pacific.

---


##### `ASIA_BAKU` <a name="ASIA_BAKU" id="cdk-aurora-globaldatabase.MySQLtimeZone.ASIA_BAKU"></a>

TIME ZONE Asia/Baku.

---


##### `AUSTRALIA_BRISBANE` <a name="AUSTRALIA_BRISBANE" id="cdk-aurora-globaldatabase.MySQLtimeZone.AUSTRALIA_BRISBANE"></a>

TIME ZONE Australia/Brisbane.

---

