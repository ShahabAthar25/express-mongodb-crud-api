const express = require('express')
const Member = require('../models/members')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const members = await Member.find()
        res.json(members)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/:id', getMember, (req, res) => {
    res.json(res.member)
})

router.post('/', async (req, res) => {
    const member = new Member({
        name: req.body.name,
        email: req.body.email
    })
    try {
        const newMember = await member.save()
        res.status(201).json(newMember)
    } catch (err) {
        return res.status(400).json({ message: "Not" })
    }
})

router.patch('/:id', (req, res) => {
    res.send("Hello World")
})

router.delete('/:id', (req, res) => {
    res.send("Hello World")
})

async function getMember(req, res, next) {
    let member
    try {
        member = await Member.findById(req.params.id)
        if (member === null) {
            return res.status(404).json({ error: "Member Not Found" })
        }
    } catch (err) {
        return res.status(500)
    }

    res.member = member
    next()
}

module.exports = router