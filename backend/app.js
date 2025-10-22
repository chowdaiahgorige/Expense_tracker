const express=require('express');
const cors=require('cors')
const app=express();
const Db=require('./db/db')
const {readdirSync}=require('fs');
const { route } = require('./routes/transcations');


require('dotenv').config()
const port=process.env.PORT;
//middlewares
app.use(express.json())
app.use(cors())
//routers
readdirSync("./routes").map((router) => {
  app.use("/api/v1", require("./routes/" + router));
}); 

const Server=()=>{
    Db()
    app.listen(port,()=>{
        console.log(`server is listening on port`,port)
    })

}
 Server()
