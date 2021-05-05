const exampleController = (req, res, )=>{
    throw new Error('ocurrio un error')
    // res.send('esto es un ejemplo')
}
const exampleControllerPOST = (req, res, )=>{
    // throw new Error('ocurrio un error')
    res.send('esto es un ejemplo POST')
}


// const exampleControllerPOST = (req, res, )=>{
//     try {
//         res.send('esto es un ejemplo POST')
        
//     } catch (error) {
//         res.status(500).send('algo paso')
//     }
// }


module.exports = {exampleController, exampleControllerPOST}