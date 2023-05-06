// Imports services
const { getListUsersService, createUserService } = require('../services/index');

// Controllers - Get the list of users
const getListUsers = async (request, response) => {

  const resultListUserService = await getListUsersService();

  if (resultListUserService) {
    response.status(200).json({data: resultListUserService});
  } else {
    response.status(500).json({error: 'There is an issue with the server'});
  }

};

// Controllers - Create a new user
const createUsers = async (request, response) => {

  const resultListUserService = await createUserService(request.body);

  if (resultListUserService) {
    response.status(201).json({data: resultListUserService});
  } else {
    response.status(500).json({error: 'There is an issue with the server'});
  }

};

// Controllers -  Get the list of products
const getListProducts = async (request, response) => {

  // Calling the service
  const serviceData = {
    data: [
      {
        idProduct: 1,
        name: 'Producto 1'
      },
      {
        idProduct: 2,
        name: 'Producto 2'
      },
      {
        idProduct: 3,
        name: 'Producto 3'
      },
    ]
  };

  if (serviceData) {
    response.status(200).json({data: serviceData});
  } else {
    response.status(500).json({error: 'There is an issue with the server'});
  }

};

// Exporting the controllers
module.exports = {
  getListUsers, getListProducts, createUsers
};

