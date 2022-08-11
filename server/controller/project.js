const model = require('../db.js');

module.exports = {
  addProject(req, res) {
    const allTickets = req.body
    console.log (req.body, 'in controller before model function invocation')
    model.addProject(allTickets)
      .then((results) => res.sendStatus(201))
      .catch((err) => console.log(err, 'error between model and controller'))
  },

  deleteAllTickets(req, res) {
    console.log ('in controller to delete all tix')
    model.deleteAllTickets()
    .then((results) => res.sendStatus(201))
    .catch((err) => res.sendStatus(500))
  }
}