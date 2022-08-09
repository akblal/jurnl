const model = require ('../db.js')

module.exports = {
  save (req, res) {
    //console.log (req.body.bulletPoint, 'in post request SERVER')
    const bulletPoint = req.body.bulletPoint;
    model.save(bulletPoint)
      .then((results) => console.log(results, 'results back in the controller'))
      .catch((err) => console.log(err))
  },

  // delete (req,res) {

  // }
}