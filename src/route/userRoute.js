

  const express = require('express');
  const router = express.Router();
  const userController = require('../controller/userController');

  router.get('/users', userController.getAllUsers);
  router.post('/user', userController.addUsers);
  router.get('/user/:id', userController.getUser);
  router.put('/user/:id', userController.updateUser);
  router.delete('/user/:id', userController.deleteUser);

  module.exports = router;
  