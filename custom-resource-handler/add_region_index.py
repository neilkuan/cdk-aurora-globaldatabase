# Dependencies
import boto3
import time
import botocore.exceptions
data={}
def str2bool(v):
  return v.lower() in ("public")
print("[INFO]", "Initialize function")
def on_event(event, context):
    print(event)
    request_type = event['RequestType']
    if request_type == 'Create':
        return on_create(event)
    if request_type == 'Update':
        return on_update(event)
    if request_type == 'Delete':
        return on_delete(event)
    raise Exception("Invalid request type: %s" % request_type)


def on_create(event):
    
    print("[INFO]", "Create Event")
    props = event["ResourceProperties"]
    print("create resource with props %s" % (props))
    rds = boto3.client('rds',region_name=props['REGION'])
    GlobalClusterIdentifier_value = props['GlobalClusterIdentifier']
    SourceDBClusterIdentifier_value = props['SourceDBClusterIdentifier']
    DBSubnetGroupName_value = props['DBSubnetGroupName']
    Engine_value = props['Engine']
    EngineVersion_value = props['EngineVersion']
    ClusterIdentifier_value = props['ClusterIdentifier']
    InstanceType_value = props['InstanceType']
    rdsIsPublic_value = props['rdsIsPublic']
    seconddbInstanceIdentifier_value = props['seconddbInstanceIdentifier']
    data ={
      'GlobalClusterIdentifier': GlobalClusterIdentifier_value,
      'SourceDBClusterIdentifier': SourceDBClusterIdentifier_value
    }
    print("[INFO]", "Add second db cluster") 
    create_db_cluster_res = rds.create_db_cluster(
        DBClusterIdentifier=ClusterIdentifier_value,
        Engine=Engine_value,
        EngineVersion=EngineVersion_value,
        GlobalClusterIdentifier=GlobalClusterIdentifier_value,
        DBSubnetGroupName=DBSubnetGroupName_value
    )
    data['secondRDSClusterArn'] = create_db_cluster_res['DBCluster']['DBClusterArn']
    time.sleep(5)
    print("[INFO]", "Add second db instance")
    rds.create_db_instance(
        DBInstanceIdentifier=seconddbInstanceIdentifier_value,
        DBClusterIdentifier=ClusterIdentifier_value,
        DBInstanceClass='db.'+InstanceType_value,
        Engine=Engine_value,
        PubliclyAccessible= str2bool(rdsIsPublic_value) or False
    )
    data['seconddbInstanceIdentifier']=seconddbInstanceIdentifier_value
    if (data):
      output = {'Data': data}
    else:
      output = {'Status': 'Created'}
    return output


def on_update(event):
    print("[INFO]", "Update Event")
    props = event["ResourceProperties"]
    print("update resource with props %s" % (props))
    output = {'Status': 'Updated'}
    return output



def on_delete(event):
    print("[INFO]", "Delete Event")
    props = event["ResourceProperties"]
    rds = boto3.client('rds',region_name=props['REGION'])
    GlobalClusterIdentifier_value = props['GlobalClusterIdentifier']
    seconddbInstanceIdentifier_value = props['seconddbInstanceIdentifier']
    secondRDSClusterArn_value = props['secondRDSClusterArn']
    ClusterIdentifier_value = props['ClusterIdentifier']
    
    print("delete resource with props %s" % (props))

    print ("remove second rds cluster from global cluster")
    remove_from_global_cluster_res = rds.remove_from_global_cluster(
    GlobalClusterIdentifier=GlobalClusterIdentifier_value,
    DbClusterIdentifier=secondRDSClusterArn_value)
    print(remove_from_global_cluster_res)

    while True:
        try:
            print ("check global cluster only have one cluster")
            global_res = rds.describe_global_clusters(GlobalClusterIdentifier=GlobalClusterIdentifier_value)
            print(len(global_res['GlobalClusters'][0]['GlobalClusterMembers']) == 1)
        except:
          pass
        if len(global_res['GlobalClusters'][0]['GlobalClusterMembers']) == 1:
          break
        time.sleep(10)
    
    print ("remove second rds instance")
    delete_db_instance_res = rds.delete_db_instance(
    DBInstanceIdentifier=seconddbInstanceIdentifier_value,
    SkipFinalSnapshot=True,
    DeleteAutomatedBackups=True)
    print(delete_db_instance_res)

    while True:
        try:
            print ("check remove second rds instance")
            describe_db_instances_res = rds.describe_db_instances(DBInstanceIdentifier=seconddbInstanceIdentifier_value)
            print(describe_db_instances_res)
            check_instance_bool = False
        except botocore.exceptions.ClientError:
          print ("instance not found ")
          check_instance_bool = True
          pass
          if check_instance_bool:
              break
        time.sleep(10)
    
    print ("remove second rds cluster")
    delete_db_cluster_res = rds.delete_db_cluster(
    DBClusterIdentifier=ClusterIdentifier_value,
    SkipFinalSnapshot=True)
    print(delete_db_cluster_res)

    while True:
        try:
            print ("check remove second rds cluster")
            describe_db_clusters_res = rds.describe_db_clusters(DBClusterIdentifier=ClusterIdentifier_value)
            print(describe_db_clusters_res)
            check_cluster_bool = False
        except botocore.exceptions.ClientError:
          print ("instance not found ")
          check_cluster_bool = True
          pass
          if check_cluster_bool:
              break
        time.sleep(10)

    if (check_instance_bool and check_cluster_bool):
      output = {'Status': 'deleted'}
      return output

def is_complete(event, context):
  request_type = event["RequestType"]
  props = event["ResourceProperties"]
  seconddbInstanceIdentifier_value = props['seconddbInstanceIdentifier']
  ClusterIdentifier_value = props['ClusterIdentifier']
  rds = boto3.client('rds',region_name=props['REGION'])
  if request_type == 'Delete':
    print ("try get cluster")
    try:
        describe_db_clusters_res = rds.describe_db_clusters(DBClusterIdentifier=ClusterIdentifier_value)
        print(describe_db_clusters_res)
        cluster_bool = False
    except botocore.exceptions.ClientError: 
        print ("cluster not found ")
        cluster_bool = True
        pass

    print ("try get instance")
    try:
        describe_db_instances_res = rds.describe_db_instances(DBInstanceIdentifier=seconddbInstanceIdentifier_value)
        print(describe_db_instances_res)
        instance_bool = False
    except botocore.exceptions.ClientError: 
        print ("cluster not found ")
        instance_bool = True
        pass
    is_ready = cluster_bool and instance_bool
    return { 'IsComplete': is_ready }
  
  if request_type == 'Create':
    return { 'IsComplete': True }
    
  if request_type == 'Update':
    return { 'IsComplete': True }
