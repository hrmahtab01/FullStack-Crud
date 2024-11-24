const express = require("express");
const dbconnet = require("./dbconfig/dbconnect");
const todoSchema = require("./model/modeschema");
const app = express();
const cors = require("cors");

dbconnet()

app.use(express.json());
app.use(cors())

app.post("/", async (req, res) => {
  const tododata = await todoSchema.create(req.body);
  res.status(200).send(tododata);
});
app.get("/getdata", async (req, res) => {
  const tododata = await todoSchema.find({});
  res.status(200).send(tododata);
});
app.get("/api/data/:id" ,  async (req ,res )=>{
  const id = req.params.id
  const tododata = await todoSchema.findById(id)
  res.status(200).send(tododata)
})
app.put("/api/data/:id" , async ( req , res)=>{
  const {id}= req.params
  const tododata = await todoSchema.findByIdAndUpdate(id , req.body)
  res.status(200).send(tododata)
})
app.delete("/api/data/:id", async (req ,res)=>{
  const {id}= req.params
  const tododata = await todoSchema.findByIdAndDelete(id , req.body)
 res.status(200).send("product delete successfully")
})

app.listen(3030, () => {
  console.log("server is running port number 3030");
});
