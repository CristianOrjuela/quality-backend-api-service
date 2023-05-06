// Imports
const { User } = require('./models/user');

// Services
const getListUsersService = async () => {

  try {
    // Calling the service
    const serviceData = await User.findAll(); 
    return serviceData;
  } catch (error) {
    throw error;
  }

};

const createUserService = async (body) => {

  try {
    // Calling the service
    const serviceData = await User.create(body);
    return serviceData;
  } catch (error) {
    throw error;
  }

};

module.exports = {
  getListUsersService, createUserService
};