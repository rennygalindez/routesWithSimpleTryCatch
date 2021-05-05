const exampleController = (req, res) => {
  throw new Error('ocurrio un error');
  // res.send('esto es un ejemplo')
};
const exampleControllerPOST = (req, res) => {
  // throw new Error('ocurrio un error')
  res.send('esto es un ejemplo POST');
};

// const exampleControllerPOST = (req, res, )=>{
//     try {
//         res.send('esto es un ejemplo POST')
// asyn call

//     } catch (error) {
// next(error)
//     }
// }

module.exports = { exampleController, exampleControllerPOST };
