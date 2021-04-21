const express = require('express')
const router = express.Router();


//router.get('/home', (req, res) => {
   // res.json("home");
//})

router.post('/home', async (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.json(req.body);
    //console.log(req.query.class)
    //res.json(req.body.name);
})


router.get('/', async function (req, res) {
    await StudentSchema.findOneAndUpdate({ rollNo: 23 }, { $set: { name: "mathiKrishnan" } }, function (error, obj) {
        res.json(obj);
        console.log(error);
    });
    // console.log(roll);
});
router.get('/1', async function (req, res) {
    await StudentSchema.find({ rollNo: 22 }, function (error, obj) { res.json(obj) })
});
router.post('/2', async function (req, res, next) {
    await console.log(req.body)
    res.json("hihi");
});

router.get('/3  4 5 6 ', function (req, res) { res.send('3 pls'); });

module.exports = router;