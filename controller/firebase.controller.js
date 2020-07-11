const Router = require('express').Router;
let router = Router();
const fireBaseModel = require("../models/firebase.db");
const axios = require('axios').default;

var tokenValidation = require('../utilities/tokenValidator')

router.post('/', async (req, res) => {
    let token = new fireBaseModel(req.body);
    await fireBaseModel.find({
        ip: req.body.ip
    })
        .then(d => {
            if (d) {
                d.forEach(async e => {
                    await fireBaseModel.findByIdAndDelete(e._id)
                })

            }
        })
    token.save()
        .then(d => res.json(d))
        .catch(e => res.json(e));
})

router.post('/fire', tokenValidation.checkToken, (req, res) => {
    fireBaseModel.find()
        .then(d => {
            d.forEach(e => {
                getUser(e)

            })
        })
        .catch(e => res.json(e));
})

async function getUser(e) {
    try {
        console.log(e)
        var options = {
            method: 'post',
            url: 'https://fcm.googleapis.com/fcm/send',
            data: {
                to: e.token,
                body:
                {
                    title: "",
                    topic: "",
                    content: "",
                    url: ""
                }
            },

        }
        let response = await axios(options)
        return response;

    } catch (error) {
        console.error(error);
    }
}

module.exports = router;
