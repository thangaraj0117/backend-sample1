const express=require("express");
const path=require("path");

const app=express();

app.use("/css",express.static("css"));
app.use("/js",express.static("js"));

app.get("/",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"html","index.html"))
});

app.listen(3000, ()=>{
    console.log("server is running")
})
