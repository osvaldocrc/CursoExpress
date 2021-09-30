const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.json({
        miPrimerApi : 'Works!'
    });
});

//Se obtienen los datos del request
router.post('/', (req, res) => {
    console.log('Got body:', req.body);
    res.status(200);
    res.json({
        Saludo: req.body.dato + ' ' + req.body.Nombre,
        ReqPost : req.body
    });
});

module.exports = router;