const express = require('express');
const cors = require('cors');
const controllerResume = require('./controller/resume.js')

const path = require("path");
const app = express();


//middleware
app.use(express.json());
app.use(express.static('client/dist'));
app.use(cors());

app.post('/jurnl', controllerResume.save)

app.get('/previousBullets', controllerResume.get)

app.delete('/deleteBullet', controllerResume.delete)

app.listen(3000,()=>{
  console.log('listening on port 3000');
})

