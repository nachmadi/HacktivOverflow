const Answer = require('../models/Answer');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  createAnswer: (req,res)=>{
               Answer.create({
                   questionId: req.body.questionId,
                   answer: req.body.answer,
                   vote: req.body.vote
                })
                .then(data=>{
                   res.send(data);
                })
                .catch(err=>{
                  res.send(err);
                })
  },
  getAllAnswer:(req, res)=> {
               Answer.find()
               .then(datas => {
                  //res.send({students:allStudents});
                  res.send(datas);
               })
               .catch(err=>{
                 res.send(err);
               })
  },
  getOneAnswer: (req, res)=>{
              var id = req.params.questionId;
              var o_id = new ObjectId(id);
              Answer.find({questionId:o_id})
              .then(data => {
                  console.log(data);
                  res.send(data)
              })
              .catch(err=>{
                res.send(err);
              })
  },
  delOneAnswer: (req, res)=>{
              var id = req.params._id;
              var o_id = new ObjectId(id);
              var query = {_id:o_id}
              Answer.deleteOne(query)
              .then(result => {
                  res.send(result);
              })
              .catch(err=>{
                res.send(err);
              })
  },
  delbyIdQuestion: (req, res)=>{
              var id = req.params._id;
              var o_id = new ObjectId(id);
              var query = {questionId:o_id}
              Answer.deleteOne(query)
              .then(result => {
                  res.send(result);
              })
              .catch(err=>{
                res.send(err);
              })
  }
}
