# Dependencies
import boto3
import time

rds = boto3.client('rds')
data={}
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
    props = event["ResourceProperties"]
    GlobalClusterIdentifier_value = props['GlobalClusterIdentifier']
    SourceDBClusterIdentifier_value = props['SourceDBClusterIdentifier']
    #DeletionProtection_value = props['DeletionProtection']
    #StorageEncrypted_value = props['StorageEncrypted']
    response = rds.create_global_cluster(
    GlobalClusterIdentifier=GlobalClusterIdentifier_value,
    SourceDBClusterIdentifier=SourceDBClusterIdentifier_value)
    data ={
      'GlobalClusterIdentifier': GlobalClusterIdentifier_value,
      'SourceDBClusterIdentifier': SourceDBClusterIdentifier_value,
      'Engine': response['GlobalCluster']['Engine'],
      'EngineVersion': response['GlobalCluster']['EngineVersion'],
      'GlobalClusterArn': response['GlobalCluster']['GlobalClusterArn']
    }
    if (data):
      output = {'Status': data}
    else:
      output = {'Status': 'Created'}
    return {'Data': output}


def on_update(event):
    output = {'Status': 'Updated'}
    return {'Data': output}



def on_delete(event):
    props = event["ResourceProperties"]
    GlobalClusterIdentifier_value = props['GlobalClusterIdentifier']
    SourceDBClusterIdentifier_value = props['SourceDBClusterIdentifier']
    response = rds.remove_from_global_cluster(
    GlobalClusterIdentifier=GlobalClusterIdentifier_value,
    DbClusterIdentifier=SourceDBClusterIdentifier_value)
    
    time.sleep(5)
    if not response['GlobalCluster']['GlobalClusterMembers']:
       rds.delete_global_cluster(
       GlobalClusterIdentifier=GlobalClusterIdentifier_value)
       removeCluster=True
       time.sleep(5)

    data ={
      'GlobalClusterIdentifier': GlobalClusterIdentifier_value,
      'SourceDBClusterIdentifier': SourceDBClusterIdentifier_value,
      'Status': removeCluster
    }
    if (data):
      output = {'Status': data}
    else:
      output = {'Status': 'deleted'}
    return {'Data': output}
