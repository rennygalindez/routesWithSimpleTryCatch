const errorHandler = function (err,  req, res, next)  {
  console.log('ffff');
    res.status(500).send('algo salio mal en el server..');

};

module.exports = errorHandler