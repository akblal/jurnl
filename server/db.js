const mongoose = require ('mongoose');

mongoose.connect ('mongodb://localhost:27017/jurnl');

const db = mongoose.connection;

db.on('error', () => {
  console.log('err connecting to MongoDB');
});

db.once('open', () => {
  console.log('connected to MongoDB');
});

const resumeBulletSchema = new mongoose.Schema ({
  entry: {
    type: String,
  }
})

const ResumeBullet = mongoose.model('ResumeBullet', resumeBulletSchema);

module.exports = {
  save(bulletPoint) {
    let addEntry = {
      entry: bulletPoint,
    };
    return ResumeBullet.create(addEntry);
  },

  get() {
    return ResumeBullet.find({});
  },

  delete(bulletPoint) {
    return ResumeBullet.deleteOne ({entry: bulletPoint})
  }
}