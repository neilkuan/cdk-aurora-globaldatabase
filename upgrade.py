from os import environ
import boto3
import json
import datetime

rds = boto3.resource('rds')
response = rds.create_global_cluster(
    SourceDBClusterIdentifier='database-1',
    DeletionProtection=False,
    StorageEncrypted=True
)

print (response)