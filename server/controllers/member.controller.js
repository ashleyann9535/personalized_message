const Member = require('../models/member.models');

module.exports = {
    //Create
    createMember: (req, res) => {
        console.log(req.body);
        Member.create(req.body)
        .then((newMember) => {
            console.log(newMember);
            res.json(newMember)
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with create member', error: err.errors})
        })
    },
    //Read
    getMembers: (req, res) => {
        Member.find()
        .then((members) => {
            console.log(members);
            res.json(members);
        })
        .catch((err) => {
            res.status(400).json({message: 'something is wrong with read all members', errors: err.errors})
        })
    },

    getOneMember: (req, res) => {
        Member.findOne({_id:req.params.id})
        .then((member) =>{
            console.log(member);
            res.json(member);
        })
        .catch((err) => {
            res.status(400).json({message: 'something is wrong with read one members', errors: err.errors})
        })
    },

    //Update
    updateMember: (req, res) => {
        Member.updateOne({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then((member) => {
            console.log(member);
            res.json(member);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with update', errors: err.errors})
        })
    }
}