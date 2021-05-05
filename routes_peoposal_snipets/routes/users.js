const express = require('express');
const router = express.Router();
const {
  usersController,
  userControllerPOST,
} = require('../controllers/users.js');

const middlewareError = require('../middlewares/middlewareError.js');

router
  .route('/')
  
  .get(middlewareError(usersController))
  .post(middlewareError(userControllerPOST));

module.exports = router;
