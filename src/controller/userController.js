
  const apicontroller = {};
  const User = require('../schema/userSchema');
  
  
  apicontroller.index = async (req, res) => {
    try {
    res.render('index');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  apicontroller.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  apicontroller.addUsers = async (req, res) => {
    const user = new User({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
  
    try {
      const newUser = await user.save();
      res.status(201).json({status: true, message: 'User added successfully!'});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  apicontroller.getUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json({status: true, data: user});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  apicontroller.updateUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      user.fullname = req.body.fullname;
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;
      const updatedUser = await user.save();
      res.status(200).json({status: true, message: 'User updated successfully!', data: updatedUser});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  apicontroller.deleteUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const deletedUser = await user.remove();
      res.status(200).json({status: true, message: 'User deleted successfully!'});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  module.exports = apicontroller;
  