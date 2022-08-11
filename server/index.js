const express = require('express');
const cors = require('cors');
const controllerResume = require('./controller/resume.js')
const controllerTicket = require('./controller/ticket.js')
const controllerProject = require('./controller/project.js')

const path = require("path");
const app = express();

//middleware
app.use(express.json());
app.use(express.static('client/dist'));
app.use(cors());

//ROUTES for RESUME BULLETS
app.post('/addBullet', controllerResume.saveBullet);
app.get('/previousBullets', controllerResume.getBullet);
app.delete('/deleteBullet', controllerResume.deleteBullet);

//ROUTES for TICKETS
app.post('/addTicket', controllerTicket.saveTicket)
app.post('/addCompletedTicket', controllerTicket.addCompletedTask)
app.get('/getTickets', controllerTicket.getTicket)
app.get('/getCompletedTicket', controllerTicket.getCompletedTicket)
app.delete('/deleteActiveTicket', controllerTicket.deleteActiveTicket)

//ROUTE for COMPLETED PROJECT
app.post('/completedProject', controllerProject.addProject)

//ROUTE to DELETE ALL TASKS
app.delete('/deleteAllTickets', controllerProject.deleteAllTickets)

app.listen(3000,()=>{
  console.log('listening on port 3000');
})

