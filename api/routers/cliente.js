module.exports = app => {
    const controller = app.controller.cliente;
  
    app.route('/api/v1/cliente')
      .get(controller.listcliente);
  }