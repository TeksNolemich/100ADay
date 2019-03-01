const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//connect to MongoDb (testing)
mongoose
  .connect(
    'mongodb://student:student1@videodata-shard-00-00-emsnc.mongodb.net:27017,videodata-shard-00-01-emsnc.mongodb.net:27017,videodata-shard-00-02-emsnc.mongodb.net:27017/test?ssl=true&replicaSet=VideoData-shard-0&authSource=admin&retryWrites=true',
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.static(__dirname + '/public/client'));

//this will be the video get request
//only logging for testing purposes
app.get('/videos', function(req, res) {
  res.send(' hello world son');
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!, `, __dirname),
);
