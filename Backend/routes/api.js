const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const Insta = require('../models/instadb');
const Post = require('../models/post');
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'nbjhggc';
const requireLogin = require("../middleware/loginProtect")
router.get('/pro', requireLogin,(req, res) => {
    res.send("hello")
})

router.post('/post', (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.json({ err: "erroe" });

    }

    Insta.findOne({ email: email }).then((already) => {
        if (already) {
           return res.status(422).json({ err: "user already exists" });

        }
        bcrypt.hash(password, 12).then((hashedpass) => {
            const insta = new Insta({
                name, email, password: hashedpass

            })
            insta.save().then((insta) => {
                res.status(201).json({
                    message: "Inserted Successfully"
                });
            }).catch(err => {
                console.log("data", data);

                res.status(422).json({err:"error"});
            });
        })

    }).catch(err => {
        console.log("data", data);

        res.json(err);
    });

})

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ err: "erroe" });
    }

    Insta.findOne({ email: email }).then((already) => {
        if (!already) {
            res.status(422).json({ err: "user already exists" });

        }
        bcrypt.compare(password, already.password).then((match) => {
            if (match) {
                res.status(201).json({
                    message: "login Successfully"
                });
                const token = jwt.sign({ _id: already._id }, JWT_SECRET)
                const {_id,name,email} = already
                res.status(201).json({ token ,user:{_id,name,email}})

            }
            else {
                res.status(422).json({ err: "invalid email or pass" });

            }
        }).catch(err => {
            console.log("data", data);

            res.json(err);
        });
    })

})

//Post db
router.post("/upload", (req, res) => {
    // console.log(req.body)
    const { body, title,img } = req.body;
    console.log(body,title,img,"nhjj");
    if (!body || !title || !img) {
        return res.status(422).json({ err: "please fill all flds" });

    }
    // console.log(req.user)
    // res.send("ok") 
    // req.user.password=undefined
    const post = new Post({
        title,
        body,
        img,
        // postedBy: req.user

    })
    post.save().then((result) => {
        res.status(201).json({
            post: result
        });
    }).catch(err => {
        
        res.status(422).json(err);
    });
})

router.get("/getPost",(req,res)=>{
    Post.find()
    .then(posts =>{
        res.json({posts})
    }).catch(err =>{
        console.log(err)
    })
})

router.get("/profilePost",(req,res)=>{
    Post.find({})
    .then(galleryposts =>{
        res.json({galleryposts})
    }).catch(err =>{
        console.log(err)
    })
})
module.exports = router;
