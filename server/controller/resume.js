const model = require ('../db.js')

module.exports = {
  save(req, res) {
    const bulletPoint = req.body.bulletPoint;
    model.save(bulletPoint)
      .then((results) => res.sendStatus(201))
      .catch((err) => res.sendStatus(500))
  },

  get(req, res) {
    model.get()
      .then (results => {
        let entries = []
        results.forEach (item => {
          entries.push(item.entry)
        })
        res.send(entries);
      })
      .catch (err => res.sendStatus(500))
  },

  delete(req,res) {
    model.delete(req.body.entry)
      .then(results => res.sendStatus(201))
      .catch (err => res.sendStatus(500))
  }
}