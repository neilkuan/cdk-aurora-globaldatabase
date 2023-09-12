# API Reference

**Classes**

Name|Description
----|-----------
[GlobalAuroraRDSMaster](#cdk-aurora-globaldatabase-globalaurorardsmaster)|*No description*
[GlobalAuroraRDSSlaveInfra](#cdk-aurora-globaldatabase-globalaurorardsslaveinfra)|*No description*
[StackParams](#cdk-aurora-globaldatabase-stackparams)|*No description*


**Structs**

Name|Description
----|-----------
[GlobalAuroraRDSMasterProps](#cdk-aurora-globaldatabase-globalaurorardsmasterprops)|*No description*
[GlobalAuroraRDSSlaveInfraProps](#cdk-aurora-globaldatabase-globalaurorardsslaveinfraprops)|*No description*
[RegionalOptions](#cdk-aurora-globaldatabase-regionaloptions)|*No description*


**Enums**

Name|Description
----|-----------
[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)|*No description*
[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)|*No description*



## class GlobalAuroraRDSMaster 🔹 <a id="cdk-aurora-globaldatabase-globalaurorardsmaster"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new GlobalAuroraRDSMaster(scope: Construct, id: string, props?: GlobalAuroraRDSMasterProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[GlobalAuroraRDSMasterProps](#cdk-aurora-globaldatabase-globalaurorardsmasterprops)</code>)  *No description*
  * **credentials** (<code>[aws_rds.Credentials](#aws-cdk-lib-aws-rds-credentials)</code>)  Credentials to use for the RDS database. __*Default*__: creates new credentials
  * **dbClusterpPG** (<code>[aws_rds.IParameterGroup](#aws-cdk-lib-aws-rds-iparametergroup)</code>)  RDS ParameterGroup. __*Default*__: Aurora MySQL ParameterGroup
  * **dbUserName** (<code>string</code>)  RDS default Super User Name. __*Default*__: sysadmin
  * **defaultDatabaseName** (<code>string</code>)  RDS default Database Name. __*Default*__: globaldatabase
  * **deletionProtection** (<code>boolean</code>)  Global RDS Database Cluster Engine Deletion Protection Option . __*Default*__: false
  * **engineVersion** (<code>[aws_rds.IClusterEngine](#aws-cdk-lib-aws-rds-iclusterengine)</code>)  RDS Database Cluster Engine . __*Default*__: rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_2_07_1,})
  * **instanceType** (<code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code>)  RDS Instance Type only can use r4 or r5 type see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations. __*Default*__: r5.large
  * **monitoringInterval** (<code>[Duration](#aws-cdk-lib-duration)</code>)  The interval, in seconds, between points when Amazon RDS collects enhanced monitoring metrics for the DB instances. __*Default*__: no enhanced monitoring
  * **monitoringRole** (<code>[aws_iam.IRole](#aws-cdk-lib-aws-iam-irole)</code>)  Role that will be used to manage DB instances monitoring. __*Default*__: A role is automatically created for you
  * **parameters** (<code>Map<string, string></code>)  RDS Parameters. __*Default*__: {time_zone: 'UTC'}
  * **rdsPassword** (<code>string</code>)  return RDS Cluster password. __*Optional*__
  * **securityGroups** (<code>Array<[aws_ec2.ISecurityGroup](#aws-cdk-lib-aws-ec2-isecuritygroup)></code>)  Credentials to use for the RDS database. __*Default*__: []
  * **storageEncrypted** (<code>boolean</code>)  Global RDS Database Cluster Engine Storage Encrypted Option . __*Default*__: true
  * **timeZone** (<code>[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)</code>)  RDS time zone. __*Default*__: MySQLtimeZone.UTC
  * **vpc** (<code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code>)  RDS default VPC. __*Default*__: new VPC



### Properties


Name | Type | Description 
-----|------|-------------
**clusterEngineVersion**🔹 | <code>string</code> | return RDS Cluster DB Engine Version.
**dbClusterpPG**🔹 | <code>[aws_rds.IParameterGroup](#aws-cdk-lib-aws-rds-iparametergroup)</code> | return RDS Cluster ParameterGroup.
**engine**🔹 | <code>string</code> | return RDS Cluster DB Engine .
**engineVersion**🔹 | <code>[aws_rds.IClusterEngine](#aws-cdk-lib-aws-rds-iclusterengine)</code> | return RDS Cluster DB Engine Version.
**globalClusterArn**🔹 | <code>string</code> | return Global RDS Cluster Resource ARN .
**globalClusterIdentifier**🔹 | <code>string</code> | return Global RDS Cluster Identifier .
**rdsCluster**🔹 | <code>[aws_rds.DatabaseCluster](#aws-cdk-lib-aws-rds-databasecluster)</code> | return RDS Cluster.
**rdsClusterarn**🔹 | <code>string</code> | return RDS Cluster Resource ARN .
**rdsInstanceType**🔹 | <code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code> | return Global RDS Cluster instance Type .
**rdsIsPublic**🔹 | <code>[aws_ec2.SubnetType](#aws-cdk-lib-aws-ec2-subnettype)</code> | return RDS Cluster is Public ?
**rdsPassword**?🔹 | <code>string</code> | return RDS Cluster password.<br/>__*Optional*__

### Methods


#### addRegionalCluster(scope, id, options)🔹 <a id="cdk-aurora-globaldatabase-globalaurorardsmaster-addregionalcluster"></a>



```ts
addRegionalCluster(scope: Construct, id: string, options: RegionalOptions): void
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **options** (<code>[RegionalOptions](#cdk-aurora-globaldatabase-regionaloptions)</code>)  *No description*
  * **region** (<code>string</code>)  *No description* 
  * **dbParameterGroup** (<code>string</code>)  *No description* __*Optional*__
  * **dbSubnetGroupName** (<code>string</code>)  *No description* __*Optional*__
  * **securityGroupId** (<code>string</code>)  *No description* __*Optional*__






## class GlobalAuroraRDSSlaveInfra 🔹 <a id="cdk-aurora-globaldatabase-globalaurorardsslaveinfra"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new GlobalAuroraRDSSlaveInfra(scope: Construct, id: string, props?: GlobalAuroraRDSSlaveInfraProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[GlobalAuroraRDSSlaveInfraProps](#cdk-aurora-globaldatabase-globalaurorardsslaveinfraprops)</code>)  *No description*
  * **deletionProtection** (<code>boolean</code>)  Global RDS Database Cluster Engine Deletion Protection Option . __*Default*__: false
  * **stack** (<code>[Stack](#aws-cdk-lib-stack)</code>)  RDS Stack. __*Optional*__
  * **storageEncrypted** (<code>boolean</code>)  Global RDS Database Cluster Engine Storage Encrypted Option . __*Default*__: true
  * **subnetType** (<code>[aws_ec2.SubnetType](#aws-cdk-lib-aws-ec2-subnettype)</code>)  Slave region. __*Optional*__
  * **vpc** (<code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code>)  Slave region VPC. __*Default*__: new VPC



### Properties


Name | Type | Description 
-----|------|-------------
**dbSubnetGroup**🔹 | <code>[aws_rds.CfnDBSubnetGroup](#aws-cdk-lib-aws-rds-cfndbsubnetgroup)</code> | GlobalAuroraRDSSlaveInfra subnet group .



## class StackParams 🔹 <a id="cdk-aurora-globaldatabase-stackparams"></a>




### Initializer




```ts
new StackParams(scope: Construct)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**account**🔹 | <code>string</code> | <span></span>
**name**🔹 | <code>string</code> | <span></span>
**region**🔹 | <code>string</code> | <span></span>



## struct GlobalAuroraRDSMasterProps 🔹 <a id="cdk-aurora-globaldatabase-globalaurorardsmasterprops"></a>






Name | Type | Description 
-----|------|-------------
**credentials**?🔹 | <code>[aws_rds.Credentials](#aws-cdk-lib-aws-rds-credentials)</code> | Credentials to use for the RDS database.<br/>__*Default*__: creates new credentials
**dbClusterpPG**?🔹 | <code>[aws_rds.IParameterGroup](#aws-cdk-lib-aws-rds-iparametergroup)</code> | RDS ParameterGroup.<br/>__*Default*__: Aurora MySQL ParameterGroup
**dbUserName**?🔹 | <code>string</code> | RDS default Super User Name.<br/>__*Default*__: sysadmin
**defaultDatabaseName**?🔹 | <code>string</code> | RDS default Database Name.<br/>__*Default*__: globaldatabase
**deletionProtection**?🔹 | <code>boolean</code> | Global RDS Database Cluster Engine Deletion Protection Option .<br/>__*Default*__: false
**engineVersion**?🔹 | <code>[aws_rds.IClusterEngine](#aws-cdk-lib-aws-rds-iclusterengine)</code> | RDS Database Cluster Engine .<br/>__*Default*__: rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_2_07_1,})
**instanceType**?🔹 | <code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code> | RDS Instance Type only can use r4 or r5 type see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations.<br/>__*Default*__: r5.large
**monitoringInterval**?🔹 | <code>[Duration](#aws-cdk-lib-duration)</code> | The interval, in seconds, between points when Amazon RDS collects enhanced monitoring metrics for the DB instances.<br/>__*Default*__: no enhanced monitoring
**monitoringRole**?🔹 | <code>[aws_iam.IRole](#aws-cdk-lib-aws-iam-irole)</code> | Role that will be used to manage DB instances monitoring.<br/>__*Default*__: A role is automatically created for you
**parameters**?🔹 | <code>Map<string, string></code> | RDS Parameters.<br/>__*Default*__: {time_zone: 'UTC'}
**rdsPassword**?🔹 | <code>string</code> | return RDS Cluster password.<br/>__*Optional*__
**securityGroups**?🔹 | <code>Array<[aws_ec2.ISecurityGroup](#aws-cdk-lib-aws-ec2-isecuritygroup)></code> | Credentials to use for the RDS database.<br/>__*Default*__: []
**storageEncrypted**?🔹 | <code>boolean</code> | Global RDS Database Cluster Engine Storage Encrypted Option .<br/>__*Default*__: true
**timeZone**?🔹 | <code>[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)</code> | RDS time zone.<br/>__*Default*__: MySQLtimeZone.UTC
**vpc**?🔹 | <code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code> | RDS default VPC.<br/>__*Default*__: new VPC



## struct GlobalAuroraRDSSlaveInfraProps 🔹 <a id="cdk-aurora-globaldatabase-globalaurorardsslaveinfraprops"></a>






Name | Type | Description 
-----|------|-------------
**deletionProtection**?🔹 | <code>boolean</code> | Global RDS Database Cluster Engine Deletion Protection Option .<br/>__*Default*__: false
**stack**?🔹 | <code>[Stack](#aws-cdk-lib-stack)</code> | RDS Stack.<br/>__*Optional*__
**storageEncrypted**?🔹 | <code>boolean</code> | Global RDS Database Cluster Engine Storage Encrypted Option .<br/>__*Default*__: true
**subnetType**?🔹 | <code>[aws_ec2.SubnetType](#aws-cdk-lib-aws-ec2-subnettype)</code> | Slave region.<br/>__*Optional*__
**vpc**?🔹 | <code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code> | Slave region VPC.<br/>__*Default*__: new VPC



## struct RegionalOptions 🔹 <a id="cdk-aurora-globaldatabase-regionaloptions"></a>






Name | Type | Description 
-----|------|-------------
**region**🔹 | <code>string</code> | <span></span>
**dbParameterGroup**?🔹 | <code>string</code> | __*Optional*__
**dbSubnetGroupName**?🔹 | <code>string</code> | __*Optional*__
**securityGroupId**?🔹 | <code>string</code> | __*Optional*__



## enum InstanceTypeEnum 🔹 <a id="cdk-aurora-globaldatabase-instancetypeenum"></a>



Name | Description
-----|-----
**R4_LARGE** 🔹|db Instance Type r4.large.
**R4_XLARGE** 🔹|db Instance Type r4.xlarge.
**R4_2XLARGE** 🔹|db Instance Type r4.2xlarge.
**R4_4XLARGE** 🔹|db Instance Type r4.4xlarge.
**R4_8XLARGE** 🔹|db Instance Type r4.8xlarge.
**R4_16XLARGE** 🔹|db Instance Type r4.16xlarge.
**R5_LARGE** 🔹|db Instance Type r5.large.
**R5_XLARGE** 🔹|db Instance Type r5.xlarge.
**R5_2XLARGE** 🔹|db Instance Type r5.2xlarge.
**R5_4XLARGE** 🔹|db Instance Type r5.4xlarge.
**R5_8XLARGE** 🔹|db Instance Type r5.8xlarge.
**R5_12XLARGE** 🔹|db Instance Type r5.12xlarge.
**R5_16XLARGE** 🔹|db Instance Type r5.16xlarge.
**R5_24XLARGE** 🔹|db Instance Type r5.24xlarge.
**R6G_LARGE** 🔹|db Instance Type r6g.large.
**R6G_XLARGE** 🔹|db Instance Type r6g.xlarge.
**R6G_2XLARGE** 🔹|db Instance Type r6g.2xlarge.
**R6G_4XLARGE** 🔹|db Instance Type r6g.4xlarge.
**R6G_8XLARGE** 🔹|db Instance Type r6g.8xlarge.
**R6G_12XLARGE** 🔹|db Instance Type r6g.12xlarge.
**R6G_16XLARGE** 🔹|db Instance Type r6g.16xlarge.


## enum MySQLtimeZone 🔹 <a id="cdk-aurora-globaldatabase-mysqltimezone"></a>



Name | Description
-----|-----
**UTC** 🔹|TIME ZONE UTC.
**ASIA_TAIPEI** 🔹|TIME ZONE Asia/Taipei.
**AFRICA_CAIRO** 🔹|TIME ZONE Africa/Cairo.
**ASIA_BANGKOK** 🔹|TIME ZONE Asia/Bangkok.
**AUSTRALIA_DARWIN** 🔹|TIME ZONE Australia/Darwin.
**AFRICA_CASABLANCA** 🔹|TIME ZONE Africa/Casablanca.
**ASIA_BEIRUT** 🔹|TIME ZONE Asia/Beirut.
**AUSTRALIA_HOBART** 🔹|TIME ZONE Australia/Hobart.
**AFRICA_HARARE** 🔹|TIME ZONE Africa/Harare.
**ASIA_CALCUTTA** 🔹|TIME ZONE Asia/Calcutta.
**AUSTRALIA_PERTH** 🔹|TIME ZONE Australia/Perth.
**AFRICA_MONROVIA** 🔹|TIME ZONE Africa/Monrovia.
**ASIA_DAMASCUS** 🔹|TIME ZONE Asia/Damascus.
**AUSTRALIA_SYDNEY** 🔹|TIME ZONE Australia/Sydney.
**AFRICA_NAIROBI** 🔹|TIME ZONE Africa/Nairobi.
**ASIA_DHAKA** 🔹|TIME ZONE Asia/Dhaka.
**BRAZIL_EAST** 🔹|TIME ZONE Brazil/East.
**AFRICA_TRIPOLI** 🔹|TIME ZONE Africa/Tripoli.
**ASIA_IRKUTSK** 🔹|TIME ZONE Asia/Irkutsk.
**CANADA_NEWFOUNDLAND** 🔹|TIME ZONE Canada/Newfoundland.
**AFRICA_WINDHOEK** 🔹|TIME ZONE Africa/Windhoek.
**ASIA_JERUSALEM** 🔹|TIME ZONE Asia/Jerusalem.
**CANADA_SASKATCHEWAN** 🔹|TIME ZONE Canada/Saskatchewan.
**AMERICA_ARAGUAINA** 🔹|TIME ZONE America/Araguaina.
**ASIA_KABUL** 🔹|TIME ZONE Asia/Kabul.
**EUROPE_AMSTERDAM** 🔹|TIME ZONE Europe/Amsterdam.
**AMERICA_ASUNCION** 🔹|TIME ZONE America/Asuncion.
**ASIA_KARACHI** 🔹|TIME ZONE Asia/Karachi.
**EUROPE_ATHENS** 🔹|TIME ZONE Europe/Athens.
**AMERICA_BOGOTA** 🔹|TIME ZONE America/Bogota.
**ASIA_KATHMANDU** 🔹|TIME ZONE Asia/Kathmandu.
**EUROPE_DUBLIN** 🔹|TIME ZONE Europe/Dublin.
**AMERICA_CARACAS** 🔹|TIME ZONE America/Caracas.
**ASIA_KRASNOYARSK** 🔹|TIME ZONE Asia/Krasnoyarsk.
**EUROPE_HELSINKI** 🔹|TIME ZONE Europe/Helsinki.
**AMERICA_CHIHUAHUA** 🔹|TIME ZONE America/Chihuahua.
**ASIA_MAGADAN** 🔹|TIME ZONE Asia/Magadan.
**EUROPE_ISTANBUL** 🔹|TIME ZONE Europe/Istanbul.
**AMERICA_CUIABA** 🔹|TIME ZONE America/Cuiaba.
**ASIA_MUSCAT** 🔹|TIME ZONE Asia/Muscat.
**EUROPE_KALININGRAD** 🔹|TIME ZONE Europe/Kaliningrad.
**AMERICA_DENVER** 🔹|TIME ZONE America/Denver.
**ASIA_NOVOSIBIRSK** 🔹|TIME ZONE Asia/Novosibirsk.
**EUROPE_MOSCOW** 🔹|TIME ZONE Europe/Moscow'.
**AMERICA_FORTALEZA** 🔹|TIME ZONE America/Fortaleza.
**ASIA_RIYADH** 🔹|TIME ZONE Asia/Riyadh.
**EUROPE_PARIS** 🔹|TIME ZONE Europe/Paris.
**AMERICA_GUATEMALA** 🔹|TIME ZONE America/Guatemala.
**ASIA_SEOUL** 🔹|TIME ZONE Asia/Seoul.
**EUROPE_PRAGUE** 🔹|TIME ZONE Europe/Prague.
**AMERICA_HALIFAX** 🔹|TIME ZONE America/Halifax.
**ASIA_SHANGHAI** 🔹|TIME ZONE Asia/Shanghai.
**EUROPE_SARAJEVO** 🔹|TIME ZONE Europe/Sarajevo.
**AMERICA_MANAUS** 🔹|TIME ZONE America/Manaus.
**ASIA_SINGAPORE** 🔹|TIME ZONE Asia/Singapore.
**PACIFIC_AUCKLAND** 🔹|TIME ZONE Pacific/Auckland.
**AMERICA_MATAMOROS** 🔹|TIME ZONE America/Matamoros.
**PACIFIC_FIJI** 🔹|TIME ZONE Pacific/Fiji.
**AMERICA_MONTERREY** 🔹|TIME ZONE America/Monterrey.
**ASIA_TEHRAN** 🔹|TIME ZONE Asia/Tehran.
**PACIFIC_GUAM** 🔹|TIME ZONE Pacific/Guam.
**AMERICA_MONTEVIDEO** 🔹|TIME ZONE America/Montevideo.
**ASIA_TOKYO** 🔹|TIME ZONE Asia/Tokyo.
**PACIFIC_HONOLULU** 🔹|TIME ZONE Pacific/Honolulu.
**AMERICA_PHOENIX** 🔹|TIME ZONE America/Phoenix.
**ASIA_ULAANBAATAR** 🔹|TIME ZONE Asia/Ulaanbaatar.
**PACIFIC_SAMOA** 🔹|TIME ZONE Pacific/Samoa.
**AMERICA_SANTIAGO** 🔹|TIME ZONE America/Santiago.
**ASIA_VLADIVOSTOK** 🔹|TIME ZONE Asia/Vladivostok.
**US_ALASKA** 🔹|TIME ZONE US/Alaska.
**AMERICA_TIJUANA** 🔹|TIME ZONE America/Tijuana.
**ASIA_YAKUTSK** 🔹|TIME ZONE Asia/Yakutsk.
**US_CENTRAL** 🔹|TIME ZONE US/Central.
**ASIA_AMMAN** 🔹|TIME ZONE Asia/Amman.
**ASIA_YEREVAN** 🔹|TIME ZONE Asia/Yerevan.
**US_EASTERN** 🔹|TIME ZONE US/Eastern.
**ASIA_ASHGABAT** 🔹|TIME ZONE Asia/Ashgabat.
**ATLANTIC_AZORES** 🔹|TIME ZONE Atlantic/Azores.
**US_EAST_INDIANA** 🔹|TIME ZONE US/East-Indiana.
**ASIA_BAGHDAD** 🔹|TIME ZONE Asia/Baghdad.
**AUSTRALIA_ADELAIDE** 🔹|TIME ZONE Australia/Adelaide.
**US_PACIFIC** 🔹|TIME ZONE US/Pacific.
**ASIA_BAKU** 🔹|TIME ZONE Asia/Baku.
**AUSTRALIA_BRISBANE** 🔹|TIME ZONE Australia/Brisbane.


