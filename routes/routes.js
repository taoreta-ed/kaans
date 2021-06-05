const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index.ejs');
    
});

/* -- Sesion module -- */
router.get('/login', (req, res)=>{
    res.render('sesion-module/login');
});

router.get('/account', (req, res)=>{
    res.render('sesion-module/account');
});
/* --- */

/* -- Clases module -- */
router.get('/clase', (req, res)=>{
    res.render('clases-module/clase');
});

router.get('/create-clase', (req, res)=>{
    res.render('clases-module/create-clase');
});
/* --- */

/* -- Chat module -- */
router.get('/chat', (req, res)=>{
    res.render('clases-module/chat-module/chat');
});
/* --- */

/* -- Temario module -- */
router.get('/temario', (req, res)=>{
    res.render('clases-module/temario-module/temario');
});

router.get('/tema', (req, res)=>{
    res.render('clases-module/temario-module/tema');
});

router.get('/create-tema', (req, res)=>{
    res.render('clases-module/temario-module/create-tema');
});
/* --- */

/* -- Trivia module -- */
router.get('/trivia', (req, res)=>{
    res.render('clases-module/trivia-module/trivia');
});

router.get('/create-trivia', (req, res)=>{
    res.render('clases-module/trivia-module/create-trivia');
});

router.get('/results-trivia', (req, res)=>{
    res.render('clases-module/trivia-module/results-trivia');
});
/* --- */


//exportar el modulo para usarlo
module.exports = router;