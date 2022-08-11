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

const ticketSchema = new mongoose.Schema({
  taskName: String,
  timeNumber: String,
  timePeriod: String,
  stage: String,
})

const Ticket = mongoose.model('Ticket', ticketSchema);

const completedTicketSchema = new mongoose.Schema({
  taskName: String,
  timeNumber: String,
  timePeriod: String,
  stage: String,
})

const CompletedTicket = mongoose.model('CompletedTicket', completedTicketSchema);

const projectSchema = new mongoose.Schema({
  projectName: String,
  activeTickets: [{
    taskName: String,
    timeNumber: String,
    timePeriod: String,
    stage: String,
  }],
  completedTickets: [{
    taskName: String,
    timeNumber: String,
    timePeriod: String,
    stage: String,
  }],
})

const Project = mongoose.model('Project', projectSchema);

module.exports = {
  saveBullet(bulletPoint) {
    let addEntry = {
      entry: bulletPoint,
    };
    return ResumeBullet.create(addEntry);
  },

  getBullet() {
    return ResumeBullet.find({});
  },

  deleteBullet(bulletPoint) {
    return ResumeBullet.deleteOne ({entry: bulletPoint});
  },

  saveTicket(ticket) {
    let addTicket = {
      taskName: ticket.taskName,
      timeNumber: ticket.timeNumber,
      timePeriod: ticket.timePeriod,
      stage: ticket.stage,
    }
    return Ticket.create(addTicket);
  },

  getTickets() {
    return Ticket.find({});
  },

  deleteActiveTicket(ticketID) {
    return Ticket.deleteOne ({_id: ticketID});
  },

  addCompletedTask(ticket) {
    let addTicket = {
      taskName: ticket.taskName,
      timeNumber: ticket.timeNumber,
      timePeriod: ticket.timePeriod,
      stage: ticket.stage,
    }
    return CompletedTicket.create(addTicket)
  },

  getCompletedTicket() {
    return CompletedTicket.find({});
  },

  addProject(allTickets) {
    let addEntry = {
      projectName: allTickets.projectName,
      activeTickets: allTickets.activeTickets,
      completedTickets: allTickets.completedTickets,
    };
    console.log (addEntry)
    return Project.create(addEntry);
  },

  deleteAllTickets() {
    return Ticket.deleteMany({})
      .then (() => {
        return CompletedTicket.deleteMany({})
      })
  }
}