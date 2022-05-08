
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
const router = require("express").Router();

let User = require("../models/user");

router.route("/add").post((req,res)=>{
   
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

   
     const newUser = new User({
        
        
        email,
        password,
        role,

    })

    newUser.save().then(()=>{
        res.json("user added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    User.find().then((users)=>{
       res.json(users)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {fristname,phone,role,birthday,address, image} = req.body;

    const updateUser = {
        fristname,
        phone,
        role,
        birthday,
        address,
        image,
    }

    const update = await User.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error:err.message});
    })

    
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await User.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "user deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with deleting data", error:err.message});
    })
})

router.route("/getOne/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await User.findById(userId).then((user)=>{
        res.status(200).send({status: "user fetched",user})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message});
    })
})

router.route("/get").get(async(req,res)=>{

    try {
      const users = await User.find({})
        .select("-password")
      return res.status(200).send(users);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }

})


router.post('/refresh_token', userCtrl.getAccessToken)

router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/infor', auth, userCtrl.getUserInfor)

router.patch('/update', auth, userCtrl.updateUser)

router.delete('/delete/:id', auth,  userCtrl.deleteUser)






module.exports = router;