import { render } from "ejs";
import express from "express";
import bodyParser from "body-parser";
import { console } from "inspector";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    // const rondomtimes = Math.floor(Math.random()*60)+1;
    res.render("index.ejs");
});

app.post("/car",(req,res)=>{
    res.render("add-file/car.ejs");
});

app.post("/Book",(req,res)=>{
    res.render("add-file/book.ejs");
});

app.post("/India",(req,res)=>{
    res.render("add-file/india.ejs");
});

app.post("/Airplane",(req,res)=>{
    res.render("add-file/airplane.ejs");
});

app.post("/Elon_Musk",(req,res)=>{
    res.render("add-file/elon-musk.ejs");
})

app.post("/Apple",(req,res)=>{
    res.render("add-file/apple.ejs");
})


app.listen(port,()=>{
    console.log(`server is runnning ${port}`);
})