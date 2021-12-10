# API Reference

**Classes**

Name|Description
----|-----------
[GolbalAuroraRDSMaster](#cdk-aurora-globaldatabase-golbalaurorardsmaster)|*No description*
[GolbalAuroraRDSSlaveInfra](#cdk-aurora-globaldatabase-golbalaurorardsslaveinfra)|*No description*


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



## class GolbalAuroraRDSMaster 🔹 <a id="cdk-aurora-globaldatabase-golbalaurorardsmaster"></a>



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
  * **instanceType** (<code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code>)  RDS Instance Type only can use r4 or r5 type see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations. __*Default*__: r5.large
  * **parameters** (<code>Map<string, string></code>)  RDS Parameters. __*Default*__: {time_zone: 'UTC'}
  * **rdsPassword** (<code>string</code>)  return RDS Cluster password. __*Optional*__
  * **storageEncrypted** (<code>boolean</code>)  Global RDS Database Cluster Engine Storage Encrypted Option . __*Default*__: true
  * **timeZone** (<code>[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)</code>)  RDS time zone. __*Default*__: MySQLtimeZone.UTC
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  RDS default VPC. __*Default*__: new VPC



### Properties


Name | Type | Description 
-----|------|-------------
**clusterEngineVersion**🔹 | <code>string</code> | return RDS Cluster DB Engine Version.
**dbClusterpPG**🔹 | <code>[IParameterGroup](#aws-cdk-aws-rds-iparametergroup)</code> | return RDS Cluster ParameterGroup.
**engine**🔹 | <code>string</code> | return RDS Cluster DB Engine .
**engineVersion**🔹 | <code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code> | return RDS Cluster DB Engine Version.
**globalClusterArn**🔹 | <code>string</code> | return Global RDS Cluster Resource ARN .
**globalClusterIdentifier**🔹 | <code>string</code> | return Global RDS Cluster Identifier .
**rdsCluster**🔹 | <code>[DatabaseCluster](#aws-cdk-aws-rds-databasecluster)</code> | return RDS Cluster.
**rdsClusterarn**🔹 | <code>string</code> | return RDS Cluster Resource ARN .
**rdsInstanceType**🔹 | <code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code> | return Global RDS Cluster instance Type .
**rdsIsPublic**🔹 | <code>[SubnetType](#aws-cdk-aws-ec2-subnettype)</code> | return RDS Cluster is Public ?
**rdsPassword**?🔹 | <code>string</code> | return RDS Cluster password.<br/>__*Optional*__

### Methods


#### addRegionalCluster(scope, id, options)🔹 <a id="cdk-aurora-globaldatabase-golbalaurorardsmaster-addregionalcluster"></a>



```ts
addRegionalCluster(scope: Construct, id: string, options: RegionalOptions): void
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **options** (<code>[RegionalOptions](#cdk-aurora-globaldatabase-regionaloptions)</code>)  *No description*
  * **region** (<code>string</code>)  *No description* 
  * **dbSubnetGroupName** (<code>string</code>)  *No description* __*Optional*__






## class GolbalAuroraRDSSlaveInfra 🔹 <a id="cdk-aurora-globaldatabase-golbalaurorardsslaveinfra"></a>



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
**dbSubnetGroup**🔹 | <code>[CfnDBSubnetGroup](#aws-cdk-aws-rds-cfndbsubnetgroup)</code> | GolbalAuroraRDSSlaveInfra subnet group .



## struct GolbalAuroraRDSMasterProps 🔹 <a id="cdk-aurora-globaldatabase-golbalaurorardsmasterprops"></a>






Name | Type | Description 
-----|------|-------------
**dbClusterpPG**?🔹 | <code>[IParameterGroup](#aws-cdk-aws-rds-iparametergroup)</code> | RDS ParameterGroup.<br/>__*Default*__: Aurora MySQL ParameterGroup
**dbUserName**?🔹 | <code>string</code> | RDS default Super User Name.<br/>__*Default*__: sysadmin
**defaultDatabaseName**?🔹 | <code>string</code> | RDS default Database Name.<br/>__*Default*__: globaldatabase
**deletionProtection**?🔹 | <code>boolean</code> | Global RDS Database Cluster Engine Deletion Protection Option .<br/>__*Default*__: false
**engineVersion**?🔹 | <code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code> | RDS Database Cluster Engine .<br/>__*Default*__: rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_2_07_1,})
**instanceType**?🔹 | <code>[InstanceTypeEnum](#cdk-aurora-globaldatabase-instancetypeenum)</code> | RDS Instance Type only can use r4 or r5 type see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations.<br/>__*Default*__: r5.large
**parameters**?🔹 | <code>Map<string, string></code> | RDS Parameters.<br/>__*Default*__: {time_zone: 'UTC'}
**rdsPassword**?🔹 | <code>string</code> | return RDS Cluster password.<br/>__*Optional*__
**storageEncrypted**?🔹 | <code>boolean</code> | Global RDS Database Cluster Engine Storage Encrypted Option .<br/>__*Default*__: true
**timeZone**?🔹 | <code>[MySQLtimeZone](#cdk-aurora-globaldatabase-mysqltimezone)</code> | RDS time zone.<br/>__*Default*__: MySQLtimeZone.UTC
**vpc**?🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | RDS default VPC.<br/>__*Default*__: new VPC



## struct GolbalAuroraRDSSlaveInfraProps 🔹 <a id="cdk-aurora-globaldatabase-golbalaurorardsslaveinfraprops"></a>






Name | Type | Description 
-----|------|-------------
**deletionProtection**?🔹 | <code>boolean</code> | Global RDS Database Cluster Engine Deletion Protection Option .<br/>__*Default*__: false
**stack**?🔹 | <code>[Stack](#aws-cdk-core-stack)</code> | RDS Stack.<br/>__*Optional*__
**storageEncrypted**?🔹 | <code>boolean</code> | Global RDS Database Cluster Engine Storage Encrypted Option .<br/>__*Default*__: true
**subnetType**?🔹 | <code>[SubnetType](#aws-cdk-aws-ec2-subnettype)</code> | Slave region.<br/>__*Optional*__
**vpc**?🔹 | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | Slave region VPC.<br/>__*Default*__: new VPC



## struct RegionalOptions 🔹 <a id="cdk-aurora-globaldatabase-regionaloptions"></a>






Name | Type | Description 
-----|------|-------------
**region**🔹 | <code>string</code> | <span></span>
**dbSubnetGroupName**?🔹 | <code>string</code> | __*Optional*__



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


