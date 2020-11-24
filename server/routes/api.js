const express = require('express')
const router = express.Router()
const urllib = require('urllib');


router.get('/sanity', (req, res) => console.log('OK'))



router.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (error, data, response) {
        res.send(JSON.parse(data).results)
    });
})

module.exports = router
