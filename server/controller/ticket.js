const model = require('../db.js');

module.exports = {
  saveTicket(req, res) {
    ticket = req.body;
    // console.log(ticket, 'in post ticket conteroller')
    model.saveTicket(ticket)
      .then(result => res.sendStatus(201))
      .catch(err => res.sendStatus(500));
  },

  getTicket(req, res) {
    model.getTickets()
    .then(result => res.status(200).send(result))
    .catch(err => {
      res.sendStatus(500)});
  }
}