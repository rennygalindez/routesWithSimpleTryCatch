const errorHandler = function (err,  req, res, next)  {
  
    res.status(500).send('algo salio mal en el server..');

};

module.exports = errorHandler