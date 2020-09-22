# Dependencies
import boto3
import time

ec2 = boto3.client('rds')
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
    GlobalClusterIdentifier = props['GlobalClusterIdentifier']
    SourceDBClusterIdentifier = props['SourceDBClusterIdentifier']
    DeletionProtection = props['DeletionProtection']
    StorageEncrypted = props['StorageEncrypted']
    data ={
      'GlobalClusterIdentifier': GlobalClusterIdentifier,
      'SourceDBClusterIdentifier': SourceDBClusterIdentifier,
      'DeletionProtection': DeletionProtection,
      'StorageEncrypted': StorageEncrypted
    }
    # rds.create_global_cluster(
    # )
    if (data):
      output = {'Status': data}
    else:
      output = {'Status': 'Created'}
    return {'Data': output}


def on_update(event):
    output = {'Status': 'Updated'}
    return {'Data': output}



def on_delete(event):
    output = {'Status': 'Updated'}
    return {"Data": output}
