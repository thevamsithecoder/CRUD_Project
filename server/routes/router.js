const express = require('express');
const router = express.Router();
const users  = require('../models/userSchema');


//regiter user
router.post('/register', async (req,res)=>{
    // console.log(req.body);
    const {Name,  Email, Age, Mobile, Work, Address, Description} = req.body;  
    if(!Name || !Email || !Age || !Mobile || !Work || !Address || !Description) {//if the user hasn't enter anything
        res.status(422).json("Please fill the data"); 
    }
    try {
        const preuser = await users.findOne({Email : Email})  //database email : user entered email
        console.log(preuser); //null showing because email is not presend in the database
        if(preuser){
            res.status(422).json("User is already present");
        }else {
            const adduser = new users({
                Name,  Email, Age, Mobile, Work, Address, Description
            })
            await adduser.save();
            res.status(201).json(adduser)
            console.log(adduser)
        }
    } catch(error) {
        res.status(422).json(error)
    }
})

//get userdata
router.get('/getdata', async(req, res)=>{
    try {
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);
  } catch(error){
    res.status(422).json(error);
  }
})

//show the individual user details
router.get("/getuser/:id", async(req,res)=>{
    try {
        console.log(req.params)
        const {id} = req.params;

        const userIndividual = await users.findById({_id : id});
        console.log(userIndividual);
        res.status(201).json(userIndividual);
    }catch(error) {
        res.status(422).json(error);
    }
})

//update user details


router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true //whatever we update we will get it by writing this
        }); 

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

//delete user
router.delete("/deleteuser/:id", async(req,res)=>{  
    try {
    const {id} = req.params;

    const deleteuser = await users.findByIdAndDelete({_id:id});
    console.log(deleteuser);
    res.status(201).json(deleteuser);

} catch (error) {
    res.status(422).json(error);
}
})

module.exports = router;












