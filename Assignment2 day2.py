from pymongo import MongoClient
client = MongoClient()
db = client.PIK3CA
line_to_write = '{}\t' * 5
count = 0 
cursor = db.vcf.find()
print(line_to_write.format("Chromosome", "Position", "Depth S2", "Depth S3", "Counter"))
for document in cursor:
	if document['rec']['samples'][2] > 7 and document['rec']['samples'][3] > 7 :
		count += 1
		print(line_to_write.format(document['rec']['chr'], document['rec]'['pos'],document['rec]'['samples'][2],document['rec]'['samples'][3],count))
		
print("THE ANSWER IS {}!' .format(count))
			
			


