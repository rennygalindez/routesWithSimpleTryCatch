const express = require('express');
const router = express.Router();
const {exampleController, exampleControllerPOST} = require('../controllers/example.js');
const middlewareError = require('../middlewares/middlewareError.js');

router
  .route('/')
  .get(middlewareError(exampleController))
 

router
  .route('/2')
  .get(middlewareError(exampleControllerPOST))
//   .post(middlewareError(example2));
module.exports = router;
