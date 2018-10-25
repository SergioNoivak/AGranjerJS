
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('tela_inicial',{});
});

module.exports = router;
