# Dependencies
import boto3
import time
import random
import string


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
    rdsname = ''.join(random.choice(string.ascii_letters + string.digits)
                 for x in range(10))
    dbInstanceIdentifier=props['REGION']+'-'+rdsname
    rds.create_db_instance(
        DBInstanceIdentifier=dbInstanceIdentifier,
        DBClusterIdentifier=ClusterIdentifier_value,
        DBInstanceClass='db.'+InstanceType_value,
        Engine=Engine_value,
        PubliclyAccessible= str2bool(rdsIsPublic_value) or False
    )
    data['seconddbInstanceIdentifier']=dbInstanceIdentifier
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
    time.sleep(10)
    print ("remove second rds instance")
    delete_db_instance_res = rds.delete_db_instance(
    DBInstanceIdentifier=seconddbInstanceIdentifier_value,
    SkipFinalSnapshot=True,
    DeleteAutomatedBackups=True)
    print(delete_db_instance_res)
    time.sleep(10)
    print ("remove second rds cluster")
    delete_db_cluster_res = rds.delete_db_cluster(
    DBClusterIdentifier=ClusterIdentifier_value,
    SkipFinalSnapshot=True)
    print(delete_db_cluster_res)
    if (data):
      output = {'Data': data}
    else:
      output = {'Status': 'deleted'}
    return output
