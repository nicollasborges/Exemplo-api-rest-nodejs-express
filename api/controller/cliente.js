module.exports = app => {
    const clienteDB = app.data.cliente;
    const controller = {};
  
    controller.listcliente = (req, res) => res.status(200).json(clienteDB);
  
    return controller;
  }