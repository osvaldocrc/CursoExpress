const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.json({
        miPrimerApi : 'Works!'
    });
});

router.post('/', (req, res) => {
    console.log('Got body:', req.body);
    res.status(200);
    res.json({
        ReqPost : req.body
    });
});

module.exports = router;