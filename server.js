const express = require('express');
//move to Mongoose at a later time
// const mongoose = require('mongoose');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = process.env.port || 3000;

const uri =
  'mongodb://another:1234art@videodata-shard-00-00-emsnc.mongodb.net:27017,videodata-shard-00-01-emsnc.mongodb.net:27017,videodata-shard-00-02-emsnc.mongodb.net:27017/test?ssl=true&replicaSet=VideoData-shard-0&authSource=admin&retryWrites=true';
const dbName = 'videoData';

let database, collection;

app.use(express.static(__dirname + '/public/client'));
app.use(BodyParser.json());

app.get('/videos', function(req, response) {
  let chosenVideo = Number(req.query.vid);
  collection.find({ day: chosenVideo }).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.listen(port, () => {
  MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      throw error;
    }
    database = client.db(dbName);
    collection = database.collection('videoDeets');
  });
});
