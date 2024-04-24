const express = require("express");
const router = express.Router();
const path = require("path");
const LogInCollection=require('./mongo')
var bodyParser=require("body-parser");
 router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname,'Home.html'));
})
router.get("/Projects.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'Projects.html'));
});
router.get("/Plans.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'Plans.html'));
});
router.get("/Signin.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'Signin.html'));
});
router.get("/Home.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'Home.html'));
});
router.get("/Signup.html",(req,res)=>{
    res.sendFile(path.join(__dirname,'Signup.html'));
});

router.post("/Signup",async (req,res)=>{
    const { uname, email, pass, passconfirm } = req.body;

    const data = {
      uname,
      email,
      pass,
      passconfirm,
    };
  
    try {
      const checking = await LogInCollection.findOne({ email });
      if (checking) {
        res.status(400).send("User details already exist");
        return;
      }
      const newUser = new LogInCollection(data);
      await newUser.save();
      res.redirect("/");

    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred");
    }
})


router.post('/Signin', async (req, res) => {
    try {
      const check = await LogInCollection.findOne({ email: req.body.email });
      if (!check || check.pass !== req.body.pass) {
        res.status(401).send("Invalid email or password");
        return;
      }
      res.redirect("/");
      // res.sendFile(path.join(__dirname,'Home.html'));
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred");
    }
  });
module.exports = router;
