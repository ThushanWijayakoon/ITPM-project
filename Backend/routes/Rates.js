const router = require("express").Router();
let Rate = require("../models/Rate");

router.route("/add").post((req,res) => {
    const Rateid = req.body.Rateid;
    const Userid = req.body.Userid;
    const Username = req.body.Username;
    const Ratedate = req.body.Ratedate;
    const Rating = req.body.Rating;

    const newRate = new Rate({
        Rateid,
        Userid,
        Username,
        Ratedate,
        Rating
    })

    newRate.save().then(() => {
        res.json("Rate added")
    }).catch((err) => {
        console.log(err);
    })

router.route("/display").get((req,res) => {

    Rate.find().then((Rates) => {
        res.json(Rates)
    }).catch((err) => {
        console.log(err)
    })

})
router.route("/update/:id").put(async(req,res) => {
    let userid = req.params.id;
    const {Rateid,Userid,Username,Ratedate} = req.body;

    const UpdateRate = {
        Rateid,
        Userid,
        Username,
        Ratedate
    }
    const update = await Rate.findByIdAndUpdate(userid,UpdateRate)
    .then(() => {
        res.status(200).send({status: "Rate updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message})
    })
})

router.route("/delete/:id").delete(async(req,res) => {
    let userid = req.params.id;
    await Rate.findByIdAndDelete(userid)
    .then(() => {
        res.status(200).send({status: "Rate deleted"});

    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete rate", err: err.message});
    })
})


})

module.exports = router;