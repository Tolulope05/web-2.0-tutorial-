## Mongo DB
> MongoDB is a document-oriented database.
> It accepts JSON documents as input and returns JSON documents as output.
> MongoDB is a NoSQL database.
> It accepts BSON documents as input and returns BSON documents as output.
> Bson is binary JSON.
> Bson is a binary format for JSON.
>   summary: Bson also allows for binary data to be stored in JSON documents.
> Bson vs Json
> Mongo uses Bson for all data.


> press db to open the MongoDB console
> press show databases to see the databases
> press show dbs to show db names

## To make Database
> Press use databsename to create database


## To know whuch database is used
> Press db
> Press show databases

## To create collection
> Press use databsename
> Press create collection

## to know which collection is used
> Press show collections

# Inserting Data in MongoDB
> Press db.collectionname.insertOne({"name":"John","age":30})
> Press db.collectionname.insert({"name":"John","age":30})
> Press db.collectionname.insertMany([{"name":"John","age":30},{"name":"John","age":30}])

# To see all colection items
> Press db.collectionname.find() //It returns a cursor
> Press db.collectionname.find({breed:"corgi"}) // to find the breed corgi in the collection name 

# To find one item in the collection
> Press db.collectionname.findOne() // to find one item in the collection, it returns the query result
> Press db.collectionname.findOne({breed:"corgi"}) // to find one breed corgi in the collection name 
> We can also pass different method in the query search to nget the result we want.

# Updating items in th collections
>Press db.collectionname.updateOne({breed:"corgi"},{$set:{"breed":"pug"}}) // to update the breed corgi to pug
>Press db.collectionname.updateMany({breed:"corgi"},{$set:{"breed":"pug"}}) // to update the breed corgi to pug

# Last change Modification in the collection
> Press  db.collectionname.updateOne({age: 6}, {$set: {age:7}, $currentDate: {lastChanged: true}} ) // to update the age to 7 and add the last change date

# Replacing items in the collection
> Press db.collectionname.replaceOne({breed:"corgi"},{$set:{"breed":"pug"}}) // to replace the breed corgi to pug


# Delete items in the collection
> Press db.collectionname.deleteOne({breed:"corgi"}) // to delete the breed corgi
> Press db.collectionname.deleteMany({breed:"corgi"}) // to delete the breed corgi
