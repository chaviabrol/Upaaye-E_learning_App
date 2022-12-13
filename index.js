const express = require("express");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));




app.get('/', function(req,res){
  res.render("home");
});

app.get('/cse',function(req,res){
  res.render("yearcse")
});
app.get('/civil',function(req,res){
  res.render("yearcivil")
});
app.get('/electronics',function(req,res){
  res.render("yearelectronics")
});
app.get('/electrical',function(req,res){
  res.render("yearelectrical")
});
app.get('/mechanical',function(req,res){
  res.render("yearmech")
});



app.get('/cse/firstyear',function(req,res){
  res.render("subject1cse")
});
app.get('/civil/firstyear',function(req,res){
  res.render("subject1civil")
});
app.get('/electronics/firstyear',function(req,res){
  res.render("subject1electronics")
});
app.get('/electrical/firstyear',function(req,res){
  res.render("subject1electrical")
});
app.get('/mechanical/firstyear',function(req,res){
  res.render("subject1mech")
});


app.get('/cse/secondyear',function(req,res){
  res.render("subject2cse")
});
app.get('/cse/secondyear/CNC',function(req,res){
  res.render("csedata2CNC")
});
app.get('/cse/secondyear/COA',function(req,res){
  res.render("csedata2COA")
});
app.get('/cse/secondyear/Dbms',function(req,res){
  res.render("csedata2dbms")
});
app.get('/cse/secondyear/ES',function(req,res){
  res.render("csedata2ES")
});
app.get('/cse/secondyear/ITL',function(req,res){
  res.render("csedata2ITL")
});
app.get('/cse/secondyear/MI',function(req,res){
  res.render("csedata2MI")
});
app.get('/cse/secondyear/OOPS',function(req,res){
  res.render("csedata2oops")
});
app.get('/cse/secondyear/OS',function(req,res){
  res.render("csedata2os")
});
app.get('/cse/secondyear/OOPS',function(req,res){
  res.render("csedata2oops")
});
app.get('/cse/secondyear/TOC',function(req,res){
  res.render("csedata2toc")
});



app.get('/civil/secondyear',function(req,res){
  res.render("subject2civil")
});
app.get('/electronics/secondyear',function(req,res){
  res.render("subject2electronics")
});
app.get('/electrical/secondyear',function(req,res){
  res.render("subject2electrical")
});
app.get('/mechanical/secondyear',function(req,res){
  res.render("subject2mech")
});


app.get('/cse/thirdyear',function(req,res){
  res.render("subject3cse")
});
app.get('/cse/thirdyear/CNS',function(req,res){
  res.render("csedata3cns")
});
app.get('/cse/thirdyear/AI',function(req,res){
  res.render("csedata3AI")
});
app.get('/cse/thirdyear/CD',function(req,res){
  res.render("csedata3CD")
});
app.get('/cse/thirdyear/COI',function(req,res){
  res.render("csedata3COI")
});
app.get('/cse/thirdyear/DM',function(req,res){
  res.render("csedata3DM")
});
app.get('/cse/thirdyear/JAVA',function(req,res){
  res.render("csedata3java")
});
app.get('/cse/thirdyear/NNFS',function(req,res){
  res.render("csedata3nnfs")
});

app.get('/civil/thirdyear',function(req,res){
  res.render("subject3civil")
});
app.get('/electronics/thirdyear',function(req,res){
  res.render("subject3electronics")
});
app.get('/electrical/thirdyear',function(req,res){
  res.render("subject3electrical")
});
app.get('/mechanical/thirdyear',function(req,res){
  res.render("subject3mech")
});



app.get('/cse/fourthyear',function(req,res){
  res.render("subject4cse")
});
app.get('/civil/fourthyear',function(req,res){
  res.render("subject4civil")
});
app.get('/electronics/fourthyear',function(req,res){
  res.render("subject4electronics")
});
app.get('/electrical/fourthyear',function(req,res){
  res.render("subject4electrical")
});
app.get('/mechanical/fourthyear',function(req,res){
  res.render("subject4mech")
});










app.listen(process.env.PORT || 3000, function(){
  console.log("Server started successfully!!");
})