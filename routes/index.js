var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: '(づ｡◕‿‿◕｡)づ',
    fname: 'Nombre',
    lname: 'Apellido',
    email: 'Correo',
    pass: 'Contraseña'
   });
});

module.exports = router;
