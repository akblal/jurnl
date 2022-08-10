const model = require ('../db.js')

module.exports = {
  saveBullet(req, res) {
    const bulletPoint = req.body.bulletPoint;
    model.saveBullet(bulletPoint)
      .then((results) => res.sendStatus(201))
      .catch((err) => res.sendStatus(500))
  },

  getBullet(req, res) {
    model.getBullet()
      .then (results => {
        let entries = []
        results.forEach (item => {
          entries.push(item.entry)
        })
        res.send(entries);
      })
      .catch (err => res.sendStatus(500))
  },

  deleteBullet(req,res) {
    model.deleteBullet(req.body.entry)
      .then(results => res.sendStatus(201))
      .catch (err => res.sendStatus(500))
  }
}