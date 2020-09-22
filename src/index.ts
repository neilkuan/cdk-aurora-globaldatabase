import * as cdk from '@aws-cdk/core';
import * as rds from '@aws-cdk/aws-rds';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as lambda from '@aws-cdk/aws-lambda';
import * as logs from '@aws-cdk/aws-logs';
import * as cr from '@aws-cdk/custom-resources';
import * as iam from '@aws-cdk/aws-iam';
import * as path from 'path';

export enum MySQLtimeZone {
  UTC = 'UTC',
  SIA_TAIPEI = 'Asia/Taipei',
  AFRICA_CAIRO = 'Africa/Cairo',
  ASIA_BANGKOK = 'Asia/Bangkok',
  AUSTRALIA_DARWIN = 'Australia/Darwin',
  AFRICA_CASABLANCA = 'Africa/Casablanca',
  ASIA_BEIRUT = 'Asia/Beirut',
  AUSTRALIA_HOBART = 'Australia/Hobart',
  AFRICA_HARARE = 'Africa/Harare',
  ASIA_CALCUTTA = 'Asia/Calcutta',
  AUSTRALIA_PERTH = 'Australia/Perth',
  AFRICA_MONROVIA = 'Africa/Monrovia',
  ASIA_DAMASCUS = 'Asia/Damascus',
  AUSTRALIA_SYDNEY = 'Australia/Sydney',
  AFRICA_NAIROBI = 'Africa/Nairobi',
  ASIA_DHAKA = 'Asia/Dhaka',
  BRAZIL_EAST = 'Brazil/East',
  AFRICA_TRIPOLI = 'Africa/Tripoli',
  ASIA_IRKUTSK = 'Asia/Irkutsk',
  CANADA_NEWFOUNDLAND = 'Canada/Newfoundland',
  AFRICA_WINDHOEK = 'Africa/Windhoek',
  ASIA_JERUSALEM = 'Asia/Jerusalem',
  CANADA_SASKATCHEWAN = 'Canada/Saskatchewan',
  AMERICA_ARAGUAINA = 'America/Araguaina',
  ASIA_KABUL = 'Asia/Kabul',
  EUROPE_AMSTERDAM = 'Europe/Amsterdam',
  AMERICA_ASUNCION = 'America/Asuncion',
  ASIA_KARACHI = 'Asia/Karachi',
  EUROPE_ATHENS = 'Europe/Athens',
  AMERICA_BOGOTA = 'America/Bogota',
  ASIA_KATHMANDU = 'Asia/Kathmandu',
  EUROPE_DUBLIN = 'Europe/Dublin',
  AMERICA_CARACAS = 'America/Caracas',
  ASIA_KRASNOYARSK = 'Asia/Krasnoyarsk',
  EUROPE_HELSINKI = 'Europe/Helsinki',
  AMERICA_CHIHUAHUA = 'America/Chihuahua',
  ASIA_MAGADAN = 'Asia/Magadan',
  EUROPE_ISTANBUL = 'Europe/Istanbul',
  AMERICA_CUIABA = 'America/Cuiaba',
  ASIA_MUSCAT = 'Asia/Muscat',
  EUROPE_KALININGRAD = 'Europe/Kaliningrad',
  AMERICA_DENVER = 'America/Denver',
  ASIA_NOVOSIBIRSK = 'Asia/Novosibirsk',
  EUROPE_MOSCOW = 'Europe/Moscow',
  AMERICA_FORTALEZA = 'America/Fortaleza',
  ASIA_RIYADH = 'Asia/Riyadh',
  EUROPE_PARIS = 'Europe/Paris',
  AMERICA_GUATEMALA = 'America/Guatemala',
  ASIA_SEOUL = 'Asia/Seoul',
  EUROPE_PRAGUE = 'Europe/Prague',
  AMERICA_HALIFAX = 'America/Halifax',
  ASIA_SHANGHAI = 'Asia/Shanghai',
  EUROPE_SARAJEVO = 'Europe/Sarajevo',
  AMERICA_MANAUS = 'America/Manaus',
  ASIA_SINGAPORE = 'Asia/Singapore',
  PACIFIC_AUCKLAND = 'Pacific/Auckland',
  AMERICA_MATAMOROS = 'America/Matamoros',
  PACIFIC_FIJI = 'Pacific/Fiji',
  AMERICA_MONTERREY = 'America/Monterrey',
  ASIA_TEHRAN = 'Asia/Tehran',
  PACIFIC_GUAM = 'Pacific/Guam',
  AMERICA_MONTEVIDEO = 'America/Montevideo',
  ASIA_TOKYO = 'Asia/Tokyo',
  PACIFIC_HONOLULU = 'Pacific/Honolulu',
  AMERICA_PHOENIX = 'America/Phoenix',
  ASIA_ULAANBAATAR = 'Asia/Ulaanbaatar',
  PACIFIC_SAMOA = 'Pacific/Samoa',
  AMERICA_SANTIAGO = 'America/Santiago',
  ASIA_VLADIVOSTOK = 'Asia/Vladivostok',
  US_ALASKA = 'US/Alaska',
  AMERICA_TIJUANA = 'America/Tijuana',
  ASIA_YAKUTSK = 'Asia/Yakutsk',
  US_CENTRAL = 'US/Central',
  ASIA_AMMAN = 'Asia/Amman',
  ASIA_YEREVAN = 'Asia/Yerevan',
  US_EASTERN = 'US/Eastern',
  ASIA_ASHGABAT = 'Asia/Ashgabat',
  ATLANTIC_AZORES = 'Atlantic/Azores',
  US_EAST_INDIANA = 'US/East-Indiana',
  ASIA_BAGHDAD = 'Asia/Baghdad',
  AUSTRALIA_ADELAIDE = 'Australia/Adelaide',
  US_PACIFIC = 'US/Pacific',
  ASIA_BAKU = 'Asia/Baku',
  AUSTRALIA_BRISBANE = 'Australia/Brisbane',
}

export enum InstanceTypeEnum{
  R4_LARGE = 'r4.large',
  R4_XLARGE = 'r4.xlarge',
  R4_2XLARGE = 'r4.2xlarge',
  R4_4XLARGE = 'r4.4xlarge',
  R4_8XLARGE = 'r4.8xlarge',
  R4_16XLARGE = 'r4.16xlarge',
  R5_LARGE = 'r5.large',
  R5_XLARGE = 'r5.xlarge',
  R5_2XLARGE = 'r5.2xlarge',
  R5_4XLARGE = 'r5.4xlarge',
  R5_8XLARGE = 'r5.8xlarge',
  R5_12XLARGE = 'r5.12xlarge',
  R5_16XLARGE = 'r5.16xlarge',
  R5_24XLARGE = 'r5.24xlarge',
}

const GlobalAuroraRDSSupportRegion = ['us-east-1', 'us-east-2', 'us-west-1', 'us-west-2', 'eu-west-1', 'eu-west-2', 'eu-west-3', 'eu-central-1',
  'ap-south-1', 'ap-southeast-1', 'ap-southeast-2' , 'ap-northeast-1' , 'ap-northeast-2' , 'ca-central-1',
];

export interface GolbalAuroraRDSMasterProps {
  /**
   * RDS default VPC
   *
   * @default - new VPC
   */
  readonly vpc?: ec2.IVpc;

  /**
   * RDS default Super User Name
   *
   * @default - < Mysql: admin >, < Postgres: postgres >
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
  readonly parameters?: {[key: string]: string;} | undefined;

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

}

export class GolbalAuroraRDSMaster extends cdk.Construct {
  /**
   * reture RDS Cluster
   */
  readonly rdsCluster: rds.IDatabaseCluster;
  /**
   * reture RDS Cluster password
   */
  readonly rdsPassword: string;
  /**
   * reture RDS Cluster ParameterGroup
   */
  readonly dbClusterpPG: rds.IParameterGroup;

  constructor(scope: cdk.Construct, id: string, props?: GolbalAuroraRDSMasterProps ) {
    super(scope, id);
    const stack = cdk.Stack.of(this);

    if (GlobalAuroraRDSSupportRegion.indexOf(stack.region) == -1 ){
      throw new Error(`This region ${stack.region} not Support Global RDS !!!`);
    }
    
    // Mysql need (MySQL 5.6 / version > 5.6.10a) , Postgres need (version 10.11 , 10.12 , 11.7 or later)
    const engineVersion = props?.engineVersion ?? rds.DatabaseClusterEngine.auroraMysql({
      version: rds.AuroraMysqlEngineVersion.VER_2_07_1,
    });    
    const rdsInstanceType = props?.instanceType ?? InstanceTypeEnum.R5_LARGE;
    // Master region Vpc 
    const rdsVpc =  props?.vpc ?? new ec2.Vpc(this, 'RDSVpcRegionMaster',{
      cidr: '10.108.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      natGateways: 1,
    });

    this.rdsPassword = PasswordProvider.genRdsPassword();

    this.dbClusterpPG = props?.dbClusterpPG ?? new rds.ParameterGroup(this, 'dbClusterparametergroup', {
      engine: engineVersion,
      parameters: props?.parameters ?? {
        time_zone: props?.timeZone ?? MySQLtimeZone.UTC,
      },
    });

    let rdsVpcSubnetSelect = ec2.SubnetType.PRIVATE;
    if(this.azOfSubnets(rdsVpc.privateSubnets) === 0){
      rdsVpcSubnetSelect = ec2.SubnetType.PUBLIC;
    }

    this.rdsCluster = new rds.DatabaseCluster(this, 'RDSCluster', {
      engine: engineVersion,
      parameterGroup: this.dbClusterpPG,
      masterUser: {
        password:  new cdk.SecretValue(this.rdsPassword),
        username: 'admin',
      },
      instances: 1,
      instanceProps: {
        // if want publicAccess , need to define vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC } ,
        vpc: rdsVpc,
        vpcSubnets: { subnetType: rdsVpcSubnetSelect },
        instanceType: new ec2.InstanceType(rdsInstanceType),
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      defaultDatabaseName:  props?.defaultDatabaseName ?? 'globaldatabase',
    });

    this.rdsCluster.connections.allowDefaultPortFrom(ec2.Peer.ipv4(rdsVpc.vpcCidrBlock))

    // custom resource policy
    const CustomResourcePolicy = new iam.PolicyStatement({
      resources: ['*'],
      actions: ['rds:CreateGlobalCluster','rds:DeleteGlobalCluster','rds:RemoveFromGlobalCluster','rds:ModifyGlobalCluster']});
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
    
    const CRGlobalRDSProvider = new cdk.CustomResource(this, 'CRUpgradeglobaldbProvider', {
      serviceToken: UpgradeglobaldbProvider.serviceToken,
      properties: {
        SourceDBClusterIdentifier: `arn:aws:rds:${stack.region}:${stack.account}:cluster:${this.rdsCluster.clusterIdentifier}` ?? undefined,
        GlobalClusterIdentifier: `global-${stack.stackName}`,
        //DeletionProtection: props?.deletionProtection ?? false,
        //StorageEncrypted: props?.storageEncrypted ?? true,
      },
    });
    CRGlobalRDSProvider.node.addDependency(this.rdsCluster);
    onEvent.role?.addToPrincipalPolicy(CustomResourcePolicy);

    new cdk.CfnOutput(this, 'RDSisPublic',{
      value: rdsVpcSubnetSelect,
    });

    new cdk.CfnOutput(this, 'RDSClusterarn',{
      value: `arn:aws:rds:${stack.region}:${stack.account}:cluster:${this.rdsCluster.clusterIdentifier}` ?? undefined,
    });

    new cdk.CfnOutput(this, 'GlobalClusterIdentifier',{
      value: `global-${stack.stackName}`,
    });

    new cdk.CfnOutput(this, 'Engine',{
      value: cdk.Token.asString(CRGlobalRDSProvider.getAtt('Engine')),
    });

    new cdk.CfnOutput(this, 'EngineVersion',{
      value: cdk.Token.asString(CRGlobalRDSProvider.getAtt('EngineVersion')),
    });

    new cdk.CfnOutput(this, 'GlobalClusterArn',{
      value: cdk.Token.asString(CRGlobalRDSProvider.getAtt('GlobalClusterArn')),
    });
  }
  private azOfSubnets(subnets: ec2.ISubnet[]): number {
    return new Set(subnets.map(subnet => subnet.availabilityZone)).size;
  }
}

export interface  GolbalAuroraRDSSlaveProps {
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
  readonly deletionProtection?: boolean,
   
  /** 
   * Global RDS Database Cluster Engine Storage Encrypted Option .
   * 
  * @default - true
  */
  readonly storageEncrypted?: boolean,
}

export class GolbalAuroraRDSSlave extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props?: GolbalAuroraRDSSlaveProps ) {
    super(scope, id);

    const stack = cdk.Stack.of(this);
    if (GlobalAuroraRDSSupportRegion.indexOf(stack.region) == -1 ){
      throw new Error(`This region ${stack.region} not Support Global RDS !!!`);
    }
    // Slave region Vpc 
    const rdsVpcSecond =  props?.vpc ?? new ec2.Vpc(this, 'RDSVpcRegionSlave',{
      cidr: '10.109.0.0/16',
      enableDnsHostnames: true,
      enableDnsSupport: true,
      natGateways: 1,
    });

    const DBsubnetType = props?.subnetType ?? ec2.SubnetType.PRIVATE;
    if (DBsubnetType === ec2.SubnetType.PRIVATE){
      const PrivateSubnet = rdsVpcSecond.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE });
      const DBPrivateSubnetGroup = new rds.CfnDBSubnetGroup(this, 'Subnets', {
        dbSubnetGroupDescription: 'Private Subnets for database',
        subnetIds: PrivateSubnet.subnetIds,
      });

      cdk.Tags.of(DBPrivateSubnetGroup).add('Name','PrivateDBSubnetGroup')
      DBPrivateSubnetGroup.node.addDependency(rdsVpcSecond)  
    }else {
      const PublicSubnet = rdsVpcSecond.selectSubnets({ subnetType: ec2.SubnetType.PUBLIC });
      const DBPrivateSubnetGroup = new rds.CfnDBSubnetGroup(this, 'Subnets', {
        dbSubnetGroupDescription: 'Public Subnets for database',
        subnetIds: PublicSubnet.subnetIds,
      });

      cdk.Tags.of(DBPrivateSubnetGroup).add('Name','PublicDBSubnetGroup')
      DBPrivateSubnetGroup.node.addDependency(rdsVpcSecond)
    }

    // custom resource policy
    const CustomResourcePolicy = new iam.PolicyStatement({
      resources: ['*'],
      actions: ['rds:CreateGlobalCluster','rds:DeleteGlobalCluster','rds:RemoveFromGlobalCluster','rds:ModifyGlobalCluster']});
    // Upgrade database to Global.
    const onEvent = new lambda.Function(this, 'onEventHandler', {
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset(path.join(__dirname, '../custom-resource-handler')),
      handler: 'add_region_index.on_event',
      timeout: cdk.Duration.minutes(5),
    });
  
    const UpgradeglobaldbProvider = new cr.Provider(this, 'UpgradeglobaldbProvider', {
      onEventHandler: onEvent,
      logRetention: logs.RetentionDays.ONE_DAY,
    });
    
    new cdk.CustomResource(this, 'CRUpgradeglobaldbProvider', {
      serviceToken: UpgradeglobaldbProvider.serviceToken,
      properties: {
        SourceDBClusterIdentifier: props?.stack ?? undefined,
        GlobalClusterIdentifier: this.node.uniqueId,
        //DeletionProtection: props?.deletionProtection ?? false,
        //StorageEncrypted: props?.storageEncrypted ?? true,
      },
    });
  
    onEvent.role?.addToPrincipalPolicy(CustomResourcePolicy);
  }
}

/**
 * Random Password Provider
 */
export class PasswordProvider{
  public static genRdsPassword(){
    // random password gen ~~
    let randomString: string = Math.random().toString(36).slice(-8);
    return randomString
  }
}

/**
 * The VPC provider to create or import the VPC
 */
export class VpcProvider {
  public static getOrCreate(scope: cdk.Construct) {
    const vpc = scope.node.tryGetContext('use_default_vpc') === '1' ?
      ec2.Vpc.fromLookup(scope, 'Vpc', { isDefault: true }) :
      scope.node.tryGetContext('use_vpc_id') ?
        ec2.Vpc.fromLookup(scope, 'Vpc', { vpcId: scope.node.tryGetContext('use_vpc_id') }) :
        new ec2.Vpc(scope, 'Vpc', { maxAzs: 3, natGateways: 1 });
    return vpc    
  }
}