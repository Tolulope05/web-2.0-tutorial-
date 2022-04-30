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

> Press db.collectionname.deleteMany({}) // to delete all the collectionname items
> Press db.collectionname.deleteMany({breed:"corgi"}) // to delete the breed corgi

# Fancier Operators in MongoDb
> Press db.collectionname.find({'property.nestedProperty':'value'}) // to find the property.nestedProperty value
> Press db.collectionname.find({age:{$gt:5}}) // to find the age greater than 5
> Press db.collectionname.find({age:{$lt:5}}) // to find the age less than 5
> Press db.collectionname.find({age:{$gte:5}}) // to find the age greater than or equal to 5
> Press db.collectionname.find({age:{$lte:5}}) // to find the age less than or equal to 5
> Press db.collectionname.find({age:{$ne:5}}) // to find the age not equal to 5
> Press db.collectionname.find({age:{$in:[5,6,7]}}) // to find the age in the array 5,6,7
> Press db.collectionname.find({age:{$nin:[5,6,7]}}) // to find the age not in the array 5,6,7
> Press db.collectionname.find({age:{$mod:[5,0]}}) // to find the age mod 5
> Press db.collectionname.find({age:{$exists:true}}) // to find the age exists
> Press db.collectionname.find({age:{$type:"int"}}) // to find the age type int
> Press db.collectionname.find({age:{$size:5}}) // to find the age size 5
> Press db.collectionname.find({age:{$regex:"^[0-9]+$"}}) // to find the age regex ^[0-9]+$
> Press db.collectionname.find({age:{$options:"i"}}) // to find the age options i
> Press db.collectionname.find({age:{$elemMatch:{$gt:5,$lt:10}}}) // to find the age elemMatch $gt:5,$lt:10
> Press db.collectionname.find({age:{$all:[5,6,7]}}) // to find the age all 5,6,7
> Press db.collectionname.find({$or:[{age:5},{age:6}]}) // to find the age or 5 or 6
> Press db.collectionname.find({$and:[{age:5},{age:6}]}) // to find the age and 5 and 6
> Press db.collectionname.find({$nor:[{age:5},{age:6}]}) // to find the age nor 5 nor 6
> Press db.collectionname.find({$xor:[{age:5},{age:6}]}) // to find the age xor 5 xor 6

# To delete a collection in mongo
> Press db.collectionname.drop() //It returns true when it is successful
> To delete a MongoDB Collection, use db.collection.drop() command