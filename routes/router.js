const express = require('express');
const { route } = require('express/lib/application');
const router =  express.Router();
const authController = require('../controllers/authController');
const listController = require('../controllers/listController');

//Rutas para las vistas
router.get('/',(req,res)=>{
   res.render('login',{alert:false})
});
router.get('/login',(req,res)=>{
    res.render('login',{alert:false})
 });
 router.get('/register',(req,res)=>{
    res.render('register',{alert:false})
 });
router.get('/clima',(req,res)=>{
    res.render('clima',{alert:false})
});

router.get('/table',(req,res)=>{
  res.render('table',{alert:false})
});
router.get('/user',listController.getUsers);
router.get('/tareasComplet',listController.getComplet);
router.get('/tareasFaltantes',listController.getFaltantes);


//Rutas para los metodos del controlador 
router.post('/register', authController.register)
router.post('/login', authController.login)
//router.post('/table', listController.table)


module.exports = router;