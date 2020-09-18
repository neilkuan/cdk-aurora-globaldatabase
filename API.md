# API Reference

**Classes**

Name|Description
----|-----------
[GolbalAuroraRDS](#cdk-aurora-globaldatabase-golbalaurorards)|*No description*
[PasswordProvider](#cdk-aurora-globaldatabase-passwordprovider)|Random Password Provider.
[VpcProvider](#cdk-aurora-globaldatabase-vpcprovider)|The VPC provider to create or import the VPC.


**Structs**

Name|Description
----|-----------
[GolbalAuroraRDSProps](#cdk-aurora-globaldatabase-golbalaurorardsprops)|*No description*


**Enums**

Name|Description
----|-----------
[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)|*No description*
[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)|*No description*



## class GolbalAuroraRDS  <a id="cdk-aurora-globaldatabase-golbalaurorards"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new GolbalAuroraRDS(scope: Construct, id: string, props?: GolbalAuroraRDSProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[GolbalAuroraRDSProps](#cdk-aurora-globaldatabase-golbalaurorardsprops)</code>)  *No description*
  * **dbClusterpPG** (<code>[IParameterGroup](#aws-cdk-aws-rds-iparametergroup)</code>)  RDS ParameterGroup. __*Default*__: Aurora MySQL ParameterGroup
  * **dbUserName** (<code>string</code>)  RDS default Super User Name. __*Default*__: < Mysql: admin >, < Postgres: postgres >
  * **defaultDatabaseName** (<code>string</code>)  RDS default Database Name. __*Default*__: globaldatabase
  * **deletionProtection** (<code>boolean</code>)  Global RDS Database Cluster Engine Deletion Protection Option . __*Default*__: false
  * **engineVersion** (<code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code>)  RDS Database Cluster Engine . __*Default*__: rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_2_07_1,})
  * **instanceType** (<code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code>)  RDS Instance Type only can use r4 or r5 type  see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations. __*Default*__: r5.large
  * **parameters** (<code>Map<string, string></code>)  RDS Parameters. __*Default*__: {time_zone: 'UTC'}
  * **storageEncrypted** (<code>boolean</code>)  Global RDS Database Cluster Engine Storage Encrypted Option . __*Default*__: true
  * **timeZone** (<code>[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)</code>)  RDS time zone. __*Default*__: MySQLtimeZone.UTC
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  RDS default VPC. __*Default*__: new VPC



### Properties


Name | Type | Description 
-----|------|-------------
**dbClusterpPG** | <code>[IParameterGroup](#aws-cdk-aws-rds-iparametergroup)</code> | reture RDS Cluster ParameterGroup.
**rdsCluster** | <code>[IDatabaseCluster](#aws-cdk-aws-rds-idatabasecluster)</code> | reture RDS Cluster.
**rdsPassword** | <code>string</code> | reture RDS Cluster password.



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



## class VpcProvider  <a id="cdk-aurora-globaldatabase-vpcprovider"></a>

The VPC provider to create or import the VPC.


### Initializer




```ts
new VpcProvider()
```



### Methods


#### *static* getOrCreate(scope) <a id="cdk-aurora-globaldatabase-vpcprovider-getorcreate"></a>



```ts
static getOrCreate(scope: Construct): IVpc
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*

__Returns__:
* <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>



## struct GolbalAuroraRDSProps  <a id="cdk-aurora-globaldatabase-golbalaurorardsprops"></a>






Name | Type | Description 
-----|------|-------------
**dbClusterpPG**? | <code>[IParameterGroup](#aws-cdk-aws-rds-iparametergroup)</code> | RDS ParameterGroup.<br/>__*Default*__: Aurora MySQL ParameterGroup
**dbUserName**? | <code>string</code> | RDS default Super User Name.<br/>__*Default*__: < Mysql: admin >, < Postgres: postgres >
**defaultDatabaseName**? | <code>string</code> | RDS default Database Name.<br/>__*Default*__: globaldatabase
**deletionProtection**? | <code>boolean</code> | Global RDS Database Cluster Engine Deletion Protection Option .<br/>__*Default*__: false
**engineVersion**? | <code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code> | RDS Database Cluster Engine .<br/>__*Default*__: rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_2_07_1,})
**instanceType**? | <code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code> | RDS Instance Type only can use r4 or r5 type  see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations.<br/>__*Default*__: r5.large
**parameters**? | <code>Map<string, string></code> | RDS Parameters.<br/>__*Default*__: {time_zone: 'UTC'}
**storageEncrypted**? | <code>boolean</code> | Global RDS Database Cluster Engine Storage Encrypted Option .<br/>__*Default*__: true
**timeZone**? | <code>[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)</code> | RDS time zone.<br/>__*Default*__: MySQLtimeZone.UTC
**vpc**? | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | RDS default VPC.<br/>__*Default*__: new VPC



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
**SIA_TAIPEI** |
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


