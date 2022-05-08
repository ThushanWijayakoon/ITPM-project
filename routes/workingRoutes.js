const express = require("express");
const router = express.Router();
const work = require("../models/workingSchema");



//register1 user
router.post("/register1",async(req,res)=>{
  // console.log(req.body);
  const {name,empID,salary,leaveDays,allowence,epf,specials} = req.body;

    if(!name ||!empID || !salary || !leaveDays || !allowence || !epf || !specials){
        res.status(422).json("Enter Employee Details");
    }

    try {
        
        const preuser = await work.findOne({salary:salary});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new work({
                name,empID,salary,leaveDays,allowence,epf,specials
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
   
})

//get user data
router.get("/getdata1",async(req,res)=>{
    try {
        const userdata = await work.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

//get employee details separately
router.get("/getuser1/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await work.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

//update employee details

router.patch("/updateuser1/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await work.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})
/*delete
router.delete("/deleteuser1/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);

    } catch (error) {
        res.status(422).json(error);
    }
})*/


module.exports = router;