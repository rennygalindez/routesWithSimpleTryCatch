const express = require('express');
const router = express.Router();
const {exampleController, exampleControllerPOST} = require('./conttroller.js');
const middlewareError = require('./middlewareError.js');

router
  .route('/')
  .get(middlewareError(exampleController))
 

router
  .route('/2')
  .get(middlewareError(exampleControllerPOST))
//   .post(middlewareError(example2));
module.exports = router;
