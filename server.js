const express=require("express");
const path=require("path");

const app=express();

app.use("/xyz",express.static("css"));
app.use("/javascript",express.static("js"));

app.get("/",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"html","index.html"))
});

app.listen(3000, ()=>{
    console.log("server is running")
})
