const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://isha:isha123@cluster0.aryzw6n.mongodb.net/",{
    dbName: "Arch",
})
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(`No connection ${err}`);
})

const logInSchema = new mongoose.Schema({
    uname: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    passconfirm: { type: String, required: true },
  });
const LogInCollection=new mongoose.model('UserData',logInSchema);
module.exports=LogInCollection;