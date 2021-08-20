const Details = require("../Models/details");

async function details(req,res){
    const { dob,place } = req.body;
    const result = await Details.create({
       dob,
       place
       });
}
module.exports = {
    details: details,
  };