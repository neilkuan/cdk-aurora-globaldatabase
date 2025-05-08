import * as path from 'path';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import * as logs from '@aws-cdk/aws-logs';
import * as rds from '@aws-cdk/aws-rds';
import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';


export enum MySQLtimeZone {
  /**
   * TIME ZONE UTC
   */
  UTC = 'UTC',
  /**
   * TIME ZONE Asia/Taipei
   */
  ASIA_TAIPEI = 'Asia/Taipei',
  /**
   * TIME ZONE Africa/Cairo
   */
  AFRICA_CAIRO = 'Africa/Cairo',
  /**
   * TIME ZONE Asia/Bangkok
   */
  ASIA_BANGKOK = 'Asia/Bangkok',
  /**
   * TIME ZONE Australia/Darwin
   */
  AUSTRALIA_DARWIN = 'Australia/Darwin',
  /**
   * TIME ZONE Africa/Casablanca
   */
  AFRICA_CASABLANCA = 'Africa/Casablanca',
  /**
   * TIME ZONE Asia/Beirut
   */
  ASIA_BEIRUT = 'Asia/Beirut',
  /**
   * TIME ZONE Australia/Hobart
   */
  AUSTRALIA_HOBART = 'Australia/Hobart',
  /**
   * TIME ZONE Africa/Harare
   */
  AFRICA_HARARE = 'Africa/Harare',
  /**
   * TIME ZONE Asia/Calcutta
   */
  ASIA_CALCUTTA = 'Asia/Calcutta',
  /**
   * TIME ZONE Australia/Perth
   */
  AUSTRALIA_PERTH = 'Australia/Perth',
  /**
   * TIME ZONE Africa/Monrovia
   */
  AFRICA_MONROVIA = 'Africa/Monrovia',
  /**
   * TIME ZONE Asia/Damascus
   */
  ASIA_DAMASCUS = 'Asia/Damascus',
  /**
   * TIME ZONE Australia/Sydney
   */
  AUSTRALIA_SYDNEY = 'Australia/Sydney',
  /**
   * TIME ZONE Africa/Nairobi
   */
  AFRICA_NAIROBI = 'Africa/Nairobi',
  /**
   * TIME ZONE Asia/Dhaka
   */
  ASIA_DHAKA = 'Asia/Dhaka',
  /**
   * TIME ZONE Brazil/East
   */
  BRAZIL_EAST = 'Brazil/East',
  /**
   * TIME ZONE Africa/Tripoli
   */
  AFRICA_TRIPOLI = 'Africa/Tripoli',
  /**
   * TIME ZONE Asia/Irkutsk
   */
  ASIA_IRKUTSK = 'Asia/Irkutsk',
  /**
   * TIME ZONE Canada/Newfoundland
   */
  CANADA_NEWFOUNDLAND = 'Canada/Newfoundland',
  /**
   * TIME ZONE Africa/Windhoek
   */
  AFRICA_WINDHOEK = 'Africa/Windhoek',
  /**
   * TIME ZONE Asia/Jerusalem
   */
  ASIA_JERUSALEM = 'Asia/Jerusalem',
  /**
   * TIME ZONE Canada/Saskatchewan
   */
  CANADA_SASKATCHEWAN = 'Canada/Saskatchewan',
  /**
   * TIME ZONE America/Araguaina
   */
  AMERICA_ARAGUAINA = 'America/Araguaina',
  /**
   * TIME ZONE Asia/Kabul
   */
  ASIA_KABUL = 'Asia/Kabul',
  /**
   * TIME ZONE Europe/Amsterdam
   */
  EUROPE_AMSTERDAM = 'Europe/Amsterdam',
  /**
   * TIME ZONE America/Asuncion
   */
  AMERICA_ASUNCION = 'America/Asuncion',
  /**
   * TIME ZONE Asia/Karachi
   */
  ASIA_KARACHI = 'Asia/Karachi',
  /**
   * TIME ZONE Europe/Athens
   */
  EUROPE_ATHENS = 'Europe/Athens',
  /**
   * TIME ZONE America/Bogota
   */
  AMERICA_BOGOTA = 'America/Bogota',
  /**
   * TIME ZONE Asia/Kathmandu
   */
  ASIA_KATHMANDU = 'Asia/Kathmandu',
  /**
   * TIME ZONE Europe/Dublin
   */
  EUROPE_DUBLIN = 'Europe/Dublin',
  /**
   * TIME ZONE America/Caracas
   */
  AMERICA_CARACAS = 'America/Caracas',
  /**
  * TIME ZONE Asia/Krasnoyarsk
  */
  ASIA_KRASNOYARSK = 'Asia/Krasnoyarsk',
  /**
   * TIME ZONE Europe/Helsinki
   */
  EUROPE_HELSINKI = 'Europe/Helsinki',
  /**
   * TIME ZONE America/Chihuahua
   */
  AMERICA_CHIHUAHUA = 'America/Chihuahua',
  /**
   * TIME ZONE Asia/Magadan
   */
  ASIA_MAGADAN = 'Asia/Magadan',
  /**
   * TIME ZONE Europe/Istanbul
   */
  EUROPE_ISTANBUL = 'Europe/Istanbul',
  /**
   * TIME ZONE America/Cuiaba
   */
  AMERICA_CUIABA = 'America/Cuiaba',
  /**
   * TIME ZONE Asia/Muscat
   */
  ASIA_MUSCAT = 'Asia/Muscat',
  /**
   * TIME ZONE Europe/Kaliningrad
   */
  EUROPE_KALININGRAD = 'Europe/Kaliningrad',
  /**
   * TIME ZONE America/Denver
   */
  AMERICA_DENVER = 'America/Denver',
  /**
   * TIME ZONE Asia/Novosibirsk
   */
  ASIA_NOVOSIBIRSK = 'Asia/Novosibirsk',
  /**
   * TIME ZONE Europe/Moscow'
   */
  EUROPE_MOSCOW = 'Europe/Moscow',
  /**
   * TIME ZONE America/Fortaleza
   */
  AMERICA_FORTALEZA = 'America/Fortaleza',
  /**
   * TIME ZONE Asia/Riyadh
   */
  ASIA_RIYADH = 'Asia/Riyadh',
  /**
   * TIME ZONE Europe/Paris
   */
  EUROPE_PARIS = 'Europe/Paris',
  /**
   * TIME ZONE America/Guatemala
   */
  AMERICA_GUATEMALA = 'America/Guatemala',
  /**
   * TIME ZONE Asia/Seoul
   */
  ASIA_SEOUL = 'Asia/Seoul',
  /**
   * TIME ZONE Europe/Prague
   */
  EUROPE_PRAGUE = 'Europe/Prague',
  /**
   * TIME ZONE America/Halifax
   */
  AMERICA_HALIFAX = 'America/Halifax',
  /**
   * TIME ZONE Asia/Shanghai
   */
  ASIA_SHANGHAI = 'Asia/Shanghai',
  /**
   * TIME ZONE Europe/Sarajevo
   */
  EUROPE_SARAJEVO = 'Europe/Sarajevo',
  /**
   * TIME ZONE America/Manaus
   */
  AMERICA_MANAUS = 'America/Manaus',
  /**
   * TIME ZONE Asia/Singapore
   */
  ASIA_SINGAPORE = 'Asia/Singapore',
  /**
   * TIME ZONE Pacific/Auckland
   */
  PACIFIC_AUCKLAND = 'Pacific/Auckland',
  /**
   * TIME ZONE America/Matamoros
   */
  AMERICA_MATAMOROS = 'America/Matamoros',
  /**
   * TIME ZONE Pacific/Fiji
   */
  PACIFIC_FIJI = 'Pacific/Fiji',
  /**
   * TIME ZONE America/Monterrey
   */
  AMERICA_MONTERREY = 'America/Monterrey',
  /**
   * TIME ZONE Asia/Tehran
   */
  ASIA_TEHRAN = 'Asia/Tehran',
  /**
   * TIME ZONE Pacific/Guam
   */
  PACIFIC_GUAM = 'Pacific/Guam',
  /**
   * TIME ZONE America/Montevideo
   */
  AMERICA_MONTEVIDEO = 'America/Montevideo',
  /**
   * TIME ZONE Asia/Tokyo
   */
  ASIA_TOKYO = 'Asia/Tokyo',
  /**
   * TIME ZONE Pacific/Honolulu
   */
  PACIFIC_HONOLULU = 'Pacific/Honolulu',
  /**
   * TIME ZONE America/Phoenix
   */
  AMERICA_PHOENIX = 'America/Phoenix',
  /**
   * TIME ZONE Asia/Ulaanbaatar
   */
  ASIA_ULAANBAATAR = 'Asia/Ulaanbaatar',
  /**
   * TIME ZONE Pacific/Samoa
   */
  PACIFIC_SAMOA = 'Pacific/Samoa',
  /**
   * TIME ZONE America/Santiago
   */
  AMERICA_SANTIAGO = 'America/Santiago',
  /**
   * TIME ZONE Asia/Vladivostok
   */
  ASIA_VLADIVOSTOK = 'Asia/Vladivostok',
  /**
   * TIME ZONE US/Alaska
   */
  US_ALASKA = 'US/Alaska',
  /**
   * TIME ZONE America/Tijuana
   */
  AMERICA_TIJUANA = 'America/Tijuana',
  /**
   * TIME ZONE Asia/Yakutsk
   */
  ASIA_YAKUTSK = 'Asia/Yakutsk',
  /**
   * TIME ZONE US/Central
   */
  US_CENTRAL = 'US/Central',
  /**
   * TIME ZONE Asia/Amman
   */
  ASIA_AMMAN = 'Asia/Amman',
  /**
   * TIME ZONE Asia/Yerevan
   */
  ASIA_YEREVAN = 'Asia/Yerevan',
  /**
  * TIME ZONE US/Eastern
  */
  US_EASTERN = 'US/Eastern',
  /**
   * TIME ZONE Asia/Ashgabat
   */
  ASIA_ASHGABAT = 'Asia/Ashgabat',
  /**
   * TIME ZONE Atlantic/Azores
   */
  ATLANTIC_AZORES = 'Atlantic/Azores',
  /**
   * TIME ZONE US/East-Indiana
   */
  US_EAST_INDIANA = 'US/East-Indiana',
  /**
   * TIME ZONE Asia/Baghdad
   */
  ASIA_BAGHDAD = 'Asia/Baghdad',
  /**
   * TIME ZONE Australia/Adelaide
   */
  AUSTRALIA_ADELAIDE = 'Australia/Adelaide',
  /**
   * TIME ZONE US/Pacific
   */
  US_PACIFIC = 'US/Pacific',
  /**
   * TIME ZONE Asia/Baku
   */
  ASIA_BAKU = 'Asia/Baku',
  /**
   * TIME ZONE Australia/Brisbane
   */
  AUSTRALIA_BRISBANE = 'Australia/Brisbane',
}

export enum InstanceTypeEnum {
  /**
   * db Instance Type r4.large
   */
  R4_LARGE = 'r4.large',
  /**
   * db Instance Type r4.xlarge
   */
  R4_XLARGE = 'r4.xlarge',
  /**
   * db Instance Type r4.2xlarge
   */
  R4_2XLARGE = 'r4.2xlarge',
  /**
   * db Instance Type r4.4xlarge
   */
  R4_4XLARGE = 'r4.4xlarge',
  /**
   * db Instance Type r4.8xlarge
   */
  R4_8XLARGE = 'r4.8xlarge',
  /**
   * db Instance Type r4.16xlarge
   */
  R4_16XLARGE = 'r4.16xlarge',
  /**
   * db Instance Type r5.large
   */
  R5_LARGE = 'r5.large',
  /**
   * db Instance Type r5.xlarge
   */
  R5_XLARGE = 'r5.xlarge',
  /**
   * db Instance Type r5.2xlarge
   */
  R5_2XLARGE = 'r5.2xlarge',
  /**
   * db Instance Type r5.4xlarge
   */
  R5_4XLARGE = 'r5.4xlarge',
  /**
   * db Instance Type r5.8xlarge
   */
  R5_8XLARGE = 'r5.8xlarge',
  /**
   * db Instance Type r5.12xlarge
   */
  R5_12XLARGE = 'r5.12xlarge',
  /**
   * db Instance Type r5.16xlarge
   */
  R5_16XLARGE = 'r5.16xlarge',
  /**
   * db Instance Type r5.24xlarge
   */
  R5_24XLARGE = 'r5.24xlarge',
  /**
   * db Instance Type r6g.large
   */
  R6G_LARGE = 'r6g.large',
  /**
   * db Instance Type r6g.xlarge
   */
  R6G_XLARGE = 'r6g.xlarge',
  /**
   * db Instance Type r6g.2xlarge
   */
  R6G_2XLARGE = 'r6g.2xlarge',
  /**
   * db Instance Type r6g.4xlarge
   */
  R6G_4XLARGE = 'r6g.4xlarge',
  /**
   * db Instance Type r6g.8xlarge
   */
  R6G_8XLARGE = 'r6g.8xlarge',
  /**
   * db Instance Type r6g.12xlarge
   */
  R6G_12XLARGE = 'r6g.12xlarge',
  /**
   * db Instance Type r6g.16xlarge
   */
  R6G_16XLARGE = 'r6g.16xlarge',
}

const GlobalAuroraRDSSupportRegion = ['us-east-1', 'us-east-2', 'us-west-1', 'us-west-2', 'eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-central-1',
  'ap-south-1', 'ap-southeast-1', 'ap-southeast-2', 'ap-northeast-1', 'ap-northeast-2', 'ca-central-1'];

export interface GlobalAuroraRDSMasterProps {
  /**
   * RDS default VPC
   *
   * @default - new VPC
   */
  readonly vpc?: ec2.IVpc;

  /**
   * RDS default Super User Name
   *
   * @default - sysadmin
   */
  readonly dbUserName?: string;

  /**
   * RDS default Database Name
   *
   * @default - globaldatabase
   */
  readonly defaultDatabaseName?: string;

  /**
   * RDS ParameterGroup
   *
   * @default - Aurora MySQL ParameterGroup
   */
  readonly dbClusterpPG?: rds.IParameterGroup;

  /**
   * RDS Instance Type only can use r4 or r5 type
   * see more https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations
   *
   * @default - r5.large
   */
  readonly instanceType?: InstanceTypeEnum;

  /**
   * RDS time zone
   *
   * @default - MySQLtimeZone.UTC
   */
  readonly timeZone?: MySQLtimeZone;

  /**
   * RDS Parameters
   *
   * @default - {time_zone: 'UTC'}
   */
  readonly parameters?: { [key: string]: string } | undefined;

  /**
   * RDS Database Cluster Engine .
   *
   * @default - rds.DatabaseClusterEngine.auroraMysql({version: rds.AuroraMysqlEngineVersion.VER_2_07_1,})
  */
  readonly engineVersion?: rds.IClusterEngine;

  /**
   * Global RDS Database Cluster Engine Deletion Protection Option .
   *
   * @default - false
  */
  readonly deletionProtection?: boolean;

  /**
   * Global RDS Database Cluster Engine Storage Encrypted Option .
   *
  * @default - true
  */
  readonly storageEncrypted?: boolean;

  /**
   * return RDS Cluster password
   */
  readonly rdsPassword?: string;
}

export interface RegionalOptions {
  readonly region: string;
  readonly dbSubnetGroupName?: string;
  readonly dbParameterGroup?: string;
  readonly securityGroupId?: string;
}

export class GlobalAuroraRDSMaster extends cdk.Construct {
  /**
   * return RDS Cluster
   */
  readonly rdsCluster: rds.DatabaseCluster;

  /**
   * return RDS Cluster password
   *
   * if not define props.rdsPassword , password will stored in Secret Manager
   * Please use this command get password back , "aws secretsmanager get-secret-value --secret-id secret name"
   */
  readonly rdsPassword: string | undefined;

  /**
   * return RDS Cluster ParameterGroup
   */
  readonly dbClusterpPG: rds.IParameterGroup;

  /**
   * return RDS Cluster is Public ?
   */
  readonly rdsIsPublic: ec2.SubnetType;

  /**
   * return RDS Cluster Resource ARN .
   */
  readonly rdsClusterarn: string;

  /**
   * return Global RDS Cluster Identifier .
   */
  readonly globalClusterIdentifier: string;

  /**
   * return RDS Cluster DB Engine .
   */
  readonly engine: string;

  /**
   * return RDS Cluster DB Engine Version.
   */
  readonly engineVersion: rds.IClusterEngine;

  /**
   * return Global RDS Cluster Resource ARN .
   */
  readonly globalClusterArn: string;

  /**
   * return Global RDS Cluster instance Type .
   */
  readonly rdsInstanceType: InstanceTypeEnum;

  /**
   * CustomResource for Second Regional .
   */
  private crGlobalRDSProvider: cdk.CustomResource;

  /**
   * return RDS Cluster DB Engine Version.
   */
  readonly clusterEngineVersion: string;
  constructor(scope: cdk.Construct, id: string, props?: GlobalAuroraRDSMasterProps ) {
    super(scope, id);
    const stack = cdk.Stack.of(this);

    if (GlobalAuroraRDSSupportRegion.indexOf(stack.region) == -1 ) {
      throw new Error(`This region ${stack.region} not Support Global RDS !!!`);
    }
    let rdsCredentials: rds.Credentials;
    if (props?.rdsPassword) {
      rdsCredentials = {
        username: props?.dbUserName ?? 'sysadmin',
        password: cdk.SecretValue.plainText(props?.rdsPassword),
      };
    } else {
      rdsCredentials = {
        username: props?.dbUserName ?? 'sysadmin',
      };
    };

    // Mysql need (MySQL 5.6 / version > 5.6.10a) , Postgres need (version 10.11 , 10.12 , 11.7 or later)
    this.engineVersion = props?.engineVersion ?? rds.DatabaseClusterEngine.auroraMysql({
      version: rds.AuroraMysqlEngineVersion.VER_2_07_1,
    });

    this.rdsInstanceType = props?.instanceType ?? InstanceTypeEnum.R5_LARGE;
    // Master region Vpc
    const rdsVpc = props?.vpc ?? new ec2.Vpc(this, 'RDSVpcRegionMaster', {
      cidr: '10.108.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      natGateways: 1,
    });

    this.dbClusterpPG = props?.dbClusterpPG ?? new rds.ParameterGroup(this, 'dbClusterparametergroup', {
      engine: this.engineVersion,
      parameters: props?.parameters ?? {
        time_zone: props?.timeZone ?? MySQLtimeZone.UTC,
      },
    });

    let rdsVpcSubnetSelect = ec2.SubnetType.PRIVATE;
    if (this.azOfSubnets(rdsVpc.privateSubnets) === 0) {
      rdsVpcSubnetSelect = ec2.SubnetType.PUBLIC;
    }
    this.rdsCluster = new rds.DatabaseCluster(this, 'RDSCluster', {
      engine: this.engineVersion,
      parameterGroup: this.dbClusterpPG,
      clusterIdentifier: `${stack.stackName.toLowerCase()}-primary`,
      credentials: rdsCredentials!,
      instances: 1,
      instanceProps: {
        // if want publicAccess , need to define vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC } ,
        vpc: rdsVpc,
        vpcSubnets: { subnetType: rdsVpcSubnetSelect },
        instanceType: new ec2.InstanceType(this.rdsInstanceType),
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      defaultDatabaseName: props?.defaultDatabaseName ?? 'globaldatabase',
    });

    this.rdsPassword = this.rdsCluster.secret?.secretName
      ? `Please use this command get password back , aws secretsmanager get-secret-value --secret-id ${this.rdsCluster.secret.secretName}`
      : props?.rdsPassword;

    this.rdsCluster.node.addDependency(rdsVpc);
    this.rdsCluster.connections.allowDefaultPortFrom(ec2.Peer.ipv4(rdsVpc.vpcCidrBlock));

    // custom resource policy
    const CustomResourcePolicy = new iam.PolicyStatement({
      resources: ['*'],
      actions: ['rds:CreateGlobalCluster', 'rds:DeleteGlobalCluster', 'rds:RemoveFromGlobalCluster', 'rds:ModifyGlobalCluster'],
    });
    // Upgrade database to Global.
    const onEvent = new lambda.Function(this, 'onEventHandler', {
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset(path.join(__dirname, '../custom-resource-handler')),
      handler: 'global_index.on_event',
      timeout: cdk.Duration.minutes(5),
    });

    const UpgradeglobaldbProvider = new cr.Provider(this, 'UpgradeglobaldbProvider', {
      onEventHandler: onEvent,
      logRetention: logs.RetentionDays.ONE_DAY,
    });

    this.crGlobalRDSProvider = new cdk.CustomResource(this, 'CRUpgradeglobaldbProvider', {
      resourceType: 'Custom::UpgradeGlobalClusterProvider',
      serviceToken: UpgradeglobaldbProvider.serviceToken,
      properties: {
        SourceDBClusterIdentifier: `arn:aws:rds:${stack.region}:${stack.account}:cluster:${this.rdsCluster.clusterIdentifier}`,
        GlobalClusterIdentifier: `global-${stack.stackName.toLowerCase()}`,
      },
    });

    this.crGlobalRDSProvider.node.addDependency(this.rdsCluster);
    onEvent.role?.addToPrincipalPolicy(CustomResourcePolicy);
    this.rdsIsPublic = rdsVpcSubnetSelect;
    new cdk.CfnOutput(this, 'RDSisPublic', {
      value: this.rdsIsPublic,
    });

    this.rdsClusterarn = `arn:aws:rds:${stack.region}:${stack.account}:cluster:${this.rdsCluster.clusterIdentifier}`;
    new cdk.CfnOutput(this, 'RDSClusterarn', {
      value: this.rdsClusterarn,
    });

    this.globalClusterIdentifier = `global-${stack.stackName.toLowerCase()}`;
    new cdk.CfnOutput(this, 'GlobalClusterIdentifier', {
      value: this.globalClusterIdentifier,
    });

    this.engine = cdk.Token.asString(this.crGlobalRDSProvider.getAtt('Engine'));
    new cdk.CfnOutput(this, 'Engine', {
      value: this.engine,
    });

    this.clusterEngineVersion = cdk.Token.asString(this.crGlobalRDSProvider.getAtt('EngineVersion'));
    new cdk.CfnOutput(this, 'clusterEngineVersion', {
      value: this.clusterEngineVersion,
    });

    this.globalClusterArn = cdk.Token.asString(this.crGlobalRDSProvider.getAtt('GlobalClusterArn'));
    new cdk.CfnOutput(this, 'GlobalClusterArn', {
      value: this.globalClusterArn,
    });

    new cdk.CfnOutput(this, 'GlobalClusterPrimaryEndpoint', {
      value: this.rdsCluster.clusterEndpoint.hostname,
    });
  }
  private azOfSubnets(subnets: ec2.ISubnet[]): number {
    return new Set(subnets.map(subnet => subnet.availabilityZone)).size;
  }

  public addRegionalCluster(scope: cdk.Construct, id: string, options: RegionalOptions) {
    const stack = cdk.Stack.of(scope);
    // custom resource policy
    const CustomResourcePolicy = new iam.PolicyStatement({
      resources: ['*'],
      actions: [
        'rds:CreateGlobalCluster', 'rds:DeleteGlobalCluster', 'rds:RemoveFromGlobalCluster', 'rds:ModifyGlobalCluster',
        'rds:CreateDBCluster', 'rds:CreateDBInstance', 'rds:DeleteDBCluster', 'rds:DeleteDBInstance', 'rds:DescribeDBInstances',
        'rds:DescribeGlobalClusters',
      ],
    });
    // Upgrade database to Global.
    const onEvent = new lambda.Function(scope, `${id}-addRegionalonEvent`, {
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset(path.join(__dirname, '../custom-resource-handler')),
      handler: 'add_region_index.on_event',
      timeout: cdk.Duration.minutes(10),
    });

    const isComplete = new lambda.Function(scope, `${id}-IsComplete`, {
      code: lambda.Code.fromAsset(path.join(__dirname, '../custom-resource-handler')),
      handler: 'add_region_index.is_complete',
      runtime: lambda.Runtime.PYTHON_3_8,
      timeout: cdk.Duration.minutes(10),
      role: onEvent.role,
    });

    const addRegionalProvider = new cr.Provider(scope, `${id}-addRegionalProvider`, {
      onEventHandler: onEvent,
      isCompleteHandler: isComplete,
      logRetention: logs.RetentionDays.ONE_DAY,
    });

    const secondRDSClusterArn = `arn:aws:rds:${options.region}:${stack.account}:cluster:${stack.stackName.toLowerCase()}-${options.region}`;
    const seconddbInstanceIdentifier = `${stack.stackName.toLowerCase()}-${options.region}-1`;

    const CRSecondRDSProvider = new cdk.CustomResource(scope, `${id}-addRegionalCustomResource`, {
      resourceType: 'Custom::addRegionalClusterProvider',
      serviceToken: addRegionalProvider.serviceToken,
      properties: {
        SourceDBClusterIdentifier: this.rdsClusterarn,
        GlobalClusterIdentifier: this.globalClusterIdentifier,
        REGION: options.region,
        DBSubnetGroupName: options.dbSubnetGroupName,
        Engine: this.engine,
        EngineVersion: this.clusterEngineVersion,
        ClusterIdentifier: `${stack.stackName.toLowerCase()}-${options.region}`,
        InstanceType: this.rdsInstanceType,
        rdsIsPublic: this.rdsIsPublic,
        secondRDSClusterArn,
        seconddbInstanceIdentifier,
        securityGroup: options.securityGroupId,
        dbParameterGroup: options.dbParameterGroup,
      },
    });
    CRSecondRDSProvider.node.addDependency(this.crGlobalRDSProvider);
    onEvent.role?.addToPrincipalPolicy(CustomResourcePolicy);

    new cdk.CfnOutput(scope, 'secondRDSClusterArn', {
      value: secondRDSClusterArn,
    });

    new cdk.CfnOutput(scope, 'seconddbInstanceIdentifier', {
      value: seconddbInstanceIdentifier,
    });
  }
}

export interface GlobalAuroraRDSSlaveInfraProps {
  /**
   *  Slave region VPC
   *
   *  @default - new VPC
   */
  readonly vpc?: ec2.IVpc;

  /**
   *  Slave region
   *
   */
  readonly subnetType?: ec2.SubnetType;

  /**
   *  RDS Stack
   */
  readonly stack?: cdk.Stack;

  /**
   * Global RDS Database Cluster Engine Deletion Protection Option .
   *
   * @default - false
  */
  readonly deletionProtection?: boolean;

  /**
   * Global RDS Database Cluster Engine Storage Encrypted Option .
   *
  * @default - true
  */
  readonly storageEncrypted?: boolean;
}

export class GlobalAuroraRDSSlaveInfra extends cdk.Construct {
  /**
   * GolbalAuroraRDSSlaveInfra subnet group .
   *
  * @default - true
  */
  readonly dbSubnetGroup: rds.CfnDBSubnetGroup;
  constructor(scope: cdk.Construct, id: string, props?: GlobalAuroraRDSSlaveInfraProps ) {
    super(scope, id);
    const stack = cdk.Stack.of(this);
    if (GlobalAuroraRDSSupportRegion.indexOf(stack.region) == -1 ) {
      throw new Error(`This region ${stack.region} not Support Global RDS !!!`);
    }
    // Slave region Vpc
    const rdsVpcSecond = props?.vpc ?? new ec2.Vpc(this, 'RDSVpcRegionSlave', {
      cidr: '10.109.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      natGateways: 1,
    });

    const DBsubnetType = props?.subnetType ?? ec2.SubnetType.PRIVATE;
    if (DBsubnetType === ec2.SubnetType.PUBLIC) {
      const PublicSubnet = rdsVpcSecond.selectSubnets({ subnetType: ec2.SubnetType.PUBLIC });
      this.dbSubnetGroup = new rds.CfnDBSubnetGroup(this, 'Subnets', {
        dbSubnetGroupName: `${stack.stackName.toLowerCase()}-publicsubnetgroup`,
        dbSubnetGroupDescription: 'Public Subnets for database',
        subnetIds: PublicSubnet.subnetIds,
      });

      cdk.Tags.of(this.dbSubnetGroup).add('Name', 'PublicDBSubnetGroup');
      this.dbSubnetGroup.node.addDependency(rdsVpcSecond);
    } else {
      const PrivateSubnet = rdsVpcSecond.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE });
      this.dbSubnetGroup = new rds.CfnDBSubnetGroup(this, 'Subnets', {
        dbSubnetGroupName: `${stack.stackName.toLowerCase()}-privatesubnetgroup`,
        dbSubnetGroupDescription: 'Private Subnets for database',
        subnetIds: PrivateSubnet.subnetIds,
      });

      cdk.Tags.of(this.dbSubnetGroup).add('Name', 'PrivateDBSubnetGroup');
      this.dbSubnetGroup.node.addDependency(rdsVpcSecond);
    }
    new cdk.CfnOutput(this, 'newDBSubnetGroup', {
      value: `${this.dbSubnetGroup.dbSubnetGroupName}`,
    });

    new cdk.CfnOutput(this, 'stackRegion', {
      value: `${stack.region}`,
    });
  }
}
