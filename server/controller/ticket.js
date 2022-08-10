const model = require('../db.js');

module.exports = {
  saveTicket(req, res) {
    ticket = req.body;
    model.saveTicket(ticket)
      .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500));
  },

  getTicket(req, res) {
    model.getTickets()
    .then(result => res.status(200).send(result))
    .catch(err => {res.sendStatus(500)});
  },

  deleteActiveTicket(req, res) {
    const ticketID = req.body._id;
    model.deleteActiveTicket(ticketID)
      .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500));
  },

  addCompletedTask(req, res) {
    const ticket = req.body;
    model.addCompletedTask(ticket)
      .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500));
  },

  getCompletedTicket(req, res) {
    model.getCompletedTicket()
      .then(result => res.status(200).send(result))
      .catch(err => res.sendStatus(500));
  }
}