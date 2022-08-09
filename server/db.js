const mongoose = require ('mongoose');

//1. use mongoose to establish connection to the database
mongoose.connect ('mongodb://localhost/jurnl');

const db = mongoose.connection;

db.on('error', () => {
  console.log('err connecting to MongoDB');
});

db.once('open', () => {
  console.log('connected to MongoDB');
});

//2. set up schemas and models

const resumeBulletSchema = new mongoose.Schema ({
  entry: {
    type: String,
  }
})

const ResumeBullet = mongoose.model ('ResumeBullet', resumeBulletSchema);

//3. export model functions
module.exports = {
  save(bulletPoint) {
    console.log(bulletPoint, 'in models BULLETPOINT')
    let addEntry = new ResumeBullet({
      entry: bulletPoint,
    });
    console.log (addEntry)
    return ResumeBullet.create(addEntry);
  },

  //add a delete function
}