const usersController = (req, res) => {
//   throw new Error('ocurrio un error');
  res.send('esto es un ejemplo')
};
const userControllerPOST = (req, res) => {
  const { name } = req.body;
  res.send(`Se creo el usario ${name}`);
};

module.exports = { usersController, userControllerPOST };
