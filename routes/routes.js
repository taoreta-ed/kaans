const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.ejs');
    
});



//exportar el modulo para usarlo
module.exports = router;