# API Reference

**Classes**

Name|Description
----|-----------
[GolbalAuroraRDSMaster](#cdk-aurora-globaldatabase-golbalaurorardsmaster)|*No description*
[GolbalAuroraRDSSlaveInfra](#cdk-aurora-globaldatabase-golbalaurorardsslaveinfra)|*No description*
[PasswordProvider](#cdk-aurora-globaldatabase-passwordprovider)|Random Password Provider.


**Structs**

Name|Description
----|-----------
[GolbalAuroraRDSMasterProps](#cdk-aurora-globaldatabase-golbalaurorardsmasterprops)|*No description*
[GolbalAuroraRDSSlaveInfraProps](#cdk-aurora-globaldatabase-golbalaurorardsslaveinfraprops)|*No description*
[RegionalOptions](#cdk-aurora-globaldatabase-regionaloptions)|*No description*


**Enums**

Name|Description
----|-----------
[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)|*No description*
[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)|*No description*



## class GolbalAuroraRDSMaster  <a id="cdk-aurora-globaldatabase-golbalaurorardsmaster"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new GolbalAuroraRDSMaster(scope: Construct, id: string, props?: GolbalAuroraRDSMasterProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[GolbalAuroraRDSMasterProps](#cdk-aurora-globaldatabase-golbalaurorardsmasterprops)</code>)  *No description*
  * **dbClusterpPG** (<code>[IParameterGroup](#aws-cdk-aws-rds-iparametergroup)</code>)  RDS ParameterGroup. __*Default*__: Aurora MySQL ParameterGroup
  * **dbUserName** (<code>string</code>)  RDS default Super User Name. __*Default*__: sysadmin
  * **defaultDatabaseName** (<code>string</code>)  RDS default Database Name. __*Default*__: globaldatabase
  * **deletionProtection** (<code>boolean</code>)  Global RDS Database Cluster Engine Deletion Protection Option . __*Default*__: false
  * **engineVersion** (<code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code>)  RDS Database Cluster Engine . __*Default*__: rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_2_07_1,})
  * **instanceType** (<code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code>)  RDS Instance Type only can use r4 or r5 type  see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations. __*Default*__: r5.large
  * **parameters** (<code>Map<string, string></code>)  RDS Parameters. __*Default*__: {time_zone: 'UTC'}
  * **rdsPassword** (<code>string</code>)  return RDS Cluster password. __*Optional*__
  * **storageEncrypted** (<code>boolean</code>)  Global RDS Database Cluster Engine Storage Encrypted Option . __*Default*__: true
  * **timeZone** (<code>[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)</code>)  RDS time zone. __*Default*__: MySQLtimeZone.UTC
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  RDS default VPC. __*Default*__: new VPC



### Properties


Name | Type | Description 
-----|------|-------------
**clusterEngineVersion** | <code>string</code> | return RDS Cluster DB Engine Version.
**dbClusterpPG** | <code>[IParameterGroup](#aws-cdk-aws-rds-iparametergroup)</code> | return RDS Cluster ParameterGroup.
**engine** | <code>string</code> | return RDS Cluster DB Engine .
**engineVersion** | <code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code> | return RDS Cluster DB Engine Version.
**globalClusterArn** | <code>string</code> | return Global RDS Cluster Resource ARN .
**globalClusterIdentifier** | <code>string</code> | return Global RDS Cluster Identifier .
**rdsCluster** | <code>[IDatabaseCluster](#aws-cdk-aws-rds-idatabasecluster)</code> | return RDS Cluster.
**rdsClusterarn** | <code>string</code> | return RDS Cluster Resource ARN .
**rdsInstanceType** | <code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code> | return Global RDS Cluster instance Type .
**rdsIsPublic** | <code>[SubnetType](#aws-cdk-aws-ec2-subnettype)</code> | return RDS Cluster is Public ?
**rdsPassword** | <code>string</code> | return RDS Cluster password.

### Methods


#### addRegionalCluster(scope, id, options) <a id="cdk-aurora-globaldatabase-golbalaurorardsmaster-addregionalcluster"></a>



```ts
addRegionalCluster(scope: Construct, id: string, options: RegionalOptions): void
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **options** (<code>[RegionalOptions](#cdk-aurora-globaldatabase-regionaloptions)</code>)  *No description*
  * **region** (<code>string</code>)  *No description* 
  * **dbSubnetGroupName** (<code>string</code>)  *No description* __*Optional*__






## class GolbalAuroraRDSSlaveInfra  <a id="cdk-aurora-globaldatabase-golbalaurorardsslaveinfra"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new GolbalAuroraRDSSlaveInfra(scope: Construct, id: string, props?: GolbalAuroraRDSSlaveInfraProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[GolbalAuroraRDSSlaveInfraProps](#cdk-aurora-globaldatabase-golbalaurorardsslaveinfraprops)</code>)  *No description*
  * **deletionProtection** (<code>boolean</code>)  Global RDS Database Cluster Engine Deletion Protection Option . __*Default*__: false
  * **stack** (<code>[Stack](#aws-cdk-core-stack)</code>)  RDS Stack. __*Optional*__
  * **storageEncrypted** (<code>boolean</code>)  Global RDS Database Cluster Engine Storage Encrypted Option . __*Default*__: true
  * **subnetType** (<code>[SubnetType](#aws-cdk-aws-ec2-subnettype)</code>)  Slave region. __*Optional*__
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  Slave region VPC. __*Default*__: new VPC



### Properties


Name | Type | Description 
-----|------|-------------
**dbSubnetGroup** | <code>[CfnDBSubnetGroup](#aws-cdk-aws-rds-cfndbsubnetgroup)</code> | GolbalAuroraRDSSlaveInfra subnet group .



## class PasswordProvider  <a id="cdk-aurora-globaldatabase-passwordprovider"></a>

Random Password Provider.


### Initializer




```ts
new PasswordProvider()
```



### Methods


#### *static* genRdsPassword() <a id="cdk-aurora-globaldatabase-passwordprovider-genrdspassword"></a>



```ts
static genRdsPassword(): string
```


__Returns__:
* <code>string</code>



## struct GolbalAuroraRDSMasterProps  <a id="cdk-aurora-globaldatabase-golbalaurorardsmasterprops"></a>






Name | Type | Description 
-----|------|-------------
**dbClusterpPG**? | <code>[IParameterGroup](#aws-cdk-aws-rds-iparametergroup)</code> | RDS ParameterGroup.<br/>__*Default*__: Aurora MySQL ParameterGroup
**dbUserName**? | <code>string</code> | RDS default Super User Name.<br/>__*Default*__: sysadmin
**defaultDatabaseName**? | <code>string</code> | RDS default Database Name.<br/>__*Default*__: globaldatabase
**deletionProtection**? | <code>boolean</code> | Global RDS Database Cluster Engine Deletion Protection Option .<br/>__*Default*__: false
**engineVersion**? | <code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code> | RDS Database Cluster Engine .<br/>__*Default*__: rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_2_07_1,})
**instanceType**? | <code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code> | RDS Instance Type only can use r4 or r5 type  see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations.<br/>__*Default*__: r5.large
**parameters**? | <code>Map<string, string></code> | RDS Parameters.<br/>__*Default*__: {time_zone: 'UTC'}
**rdsPassword**? | <code>string</code> | return RDS Cluster password.<br/>__*Optional*__
**storageEncrypted**? | <code>boolean</code> | Global RDS Database Cluster Engine Storage Encrypted Option .<br/>__*Default*__: true
**timeZone**? | <code>[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)</code> | RDS time zone.<br/>__*Default*__: MySQLtimeZone.UTC
**vpc**? | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | RDS default VPC.<br/>__*Default*__: new VPC



## struct GolbalAuroraRDSSlaveInfraProps  <a id="cdk-aurora-globaldatabase-golbalaurorardsslaveinfraprops"></a>






Name | Type | Description 
-----|------|-------------
**deletionProtection**? | <code>boolean</code> | Global RDS Database Cluster Engine Deletion Protection Option .<br/>__*Default*__: false
**stack**? | <code>[Stack](#aws-cdk-core-stack)</code> | RDS Stack.<br/>__*Optional*__
**storageEncrypted**? | <code>boolean</code> | Global RDS Database Cluster Engine Storage Encrypted Option .<br/>__*Default*__: true
**subnetType**? | <code>[SubnetType](#aws-cdk-aws-ec2-subnettype)</code> | Slave region.<br/>__*Optional*__
**vpc**? | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | Slave region VPC.<br/>__*Default*__: new VPC



## struct RegionalOptions  <a id="cdk-aurora-globaldatabase-regionaloptions"></a>






Name | Type | Description 
-----|------|-------------
**region** | <code>string</code> | <span></span>
**dbSubnetGroupName**? | <code>string</code> | __*Optional*__



## enum InstanceTypeEnum  <a id="cdk-aurora-globaldatabase-instancetypeenum"></a>



Name | Description
-----|-----
**R4_LARGE** |
**R4_XLARGE** |
**R4_2XLARGE** |
**R4_4XLARGE** |
**R4_8XLARGE** |
**R4_16XLARGE** |
**R5_LARGE** |
**R5_XLARGE** |
**R5_2XLARGE** |
**R5_4XLARGE** |
**R5_8XLARGE** |
**R5_12XLARGE** |
**R5_16XLARGE** |
**R5_24XLARGE** |


## enum MySQLtimeZone  <a id="cdk-aurora-globaldatabase-mysqltimezone"></a>



Name | Description
-----|-----
**UTC** |
**ASIA_TAIPEI** |
**AFRICA_CAIRO** |
**ASIA_BANGKOK** |
**AUSTRALIA_DARWIN** |
**AFRICA_CASABLANCA** |
**ASIA_BEIRUT** |
**AUSTRALIA_HOBART** |
**AFRICA_HARARE** |
**ASIA_CALCUTTA** |
**AUSTRALIA_PERTH** |
**AFRICA_MONROVIA** |
**ASIA_DAMASCUS** |
**AUSTRALIA_SYDNEY** |
**AFRICA_NAIROBI** |
**ASIA_DHAKA** |
**BRAZIL_EAST** |
**AFRICA_TRIPOLI** |
**ASIA_IRKUTSK** |
**CANADA_NEWFOUNDLAND** |
**AFRICA_WINDHOEK** |
**ASIA_JERUSALEM** |
**CANADA_SASKATCHEWAN** |
**AMERICA_ARAGUAINA** |
**ASIA_KABUL** |
**EUROPE_AMSTERDAM** |
**AMERICA_ASUNCION** |
**ASIA_KARACHI** |
**EUROPE_ATHENS** |
**AMERICA_BOGOTA** |
**ASIA_KATHMANDU** |
**EUROPE_DUBLIN** |
**AMERICA_CARACAS** |
**ASIA_KRASNOYARSK** |
**EUROPE_HELSINKI** |
**AMERICA_CHIHUAHUA** |
**ASIA_MAGADAN** |
**EUROPE_ISTANBUL** |
**AMERICA_CUIABA** |
**ASIA_MUSCAT** |
**EUROPE_KALININGRAD** |
**AMERICA_DENVER** |
**ASIA_NOVOSIBIRSK** |
**EUROPE_MOSCOW** |
**AMERICA_FORTALEZA** |
**ASIA_RIYADH** |
**EUROPE_PARIS** |
**AMERICA_GUATEMALA** |
**ASIA_SEOUL** |
**EUROPE_PRAGUE** |
**AMERICA_HALIFAX** |
**ASIA_SHANGHAI** |
**EUROPE_SARAJEVO** |
**AMERICA_MANAUS** |
**ASIA_SINGAPORE** |
**PACIFIC_AUCKLAND** |
**AMERICA_MATAMOROS** |
**PACIFIC_FIJI** |
**AMERICA_MONTERREY** |
**ASIA_TEHRAN** |
**PACIFIC_GUAM** |
**AMERICA_MONTEVIDEO** |
**ASIA_TOKYO** |
**PACIFIC_HONOLULU** |
**AMERICA_PHOENIX** |
**ASIA_ULAANBAATAR** |
**PACIFIC_SAMOA** |
**AMERICA_SANTIAGO** |
**ASIA_VLADIVOSTOK** |
**US_ALASKA** |
**AMERICA_TIJUANA** |
**ASIA_YAKUTSK** |
**US_CENTRAL** |
**ASIA_AMMAN** |
**ASIA_YEREVAN** |
**US_EASTERN** |
**ASIA_ASHGABAT** |
**ATLANTIC_AZORES** |
**US_EAST_INDIANA** |
**ASIA_BAGHDAD** |
**AUSTRALIA_ADELAIDE** |
**US_PACIFIC** |
**ASIA_BAKU** |
**AUSTRALIA_BRISBANE** |


