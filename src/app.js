import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname,'/public')));
app.get('/example',(req,res)=> {
  res.json({
    msg:"hi"
  })
})

export default app;

