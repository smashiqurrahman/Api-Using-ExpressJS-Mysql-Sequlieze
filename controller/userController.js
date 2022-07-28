const res = require('express/lib/response');
const db = require('../models');

const Users = db.user;

// create
const addUser = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'Name not found',
        })
        return
    }

    const userInfo = {
        name: req.body.name,
        phone: req.body.phone,
    }

    try {
        const user = await Users.create(userInfo);
        res.status(200).send(user);
        console.log(user);
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Error occured'
        })
    }
}

// retrieve
const getAllUsers = async (req, res) => {
    const user = await Users.findAll();
    res.status(200).send(user);
    console.log(user);
}

// get single product
const getSingleUser = async (req, res) => {
    const id = req.params.id;
    const user = await Users.findOne({ where: { id: id } });
    res.status(200).send(user);
}

// update product
const updateUser = async (req, res) => {
    let id = req.params.id;
    const user = await Users.update(req.body, { where: { id: id }});
res.status(200).send(user);
}

// delete product
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await Users.destroy({ where: { id: id } });
    res.status(200).send('User is deleted');
}

const publishedUser = async (req, res) => {
    const users = await Users.findAll({ where: { published: true } });
    res.status(200).send(users);
}

module.exports = {
    addUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser,
    publishedUser
}