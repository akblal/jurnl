const model = require('../db.js');

module.exports = {
  addProject(req, res) {
    const allTickets = req.body
    model.addProject(allTickets)
      .then((results) => res.sendStatus(201))
      .catch((err) => res.sendStatus(500))
  },

  deleteAllTickets(req, res) {
    console.log ('in controller to delete all tix')
    model.deleteAllTickets()
    .then((results) => res.sendStatus(201))
    .catch((err) => res.sendStatus(500))
  }
}