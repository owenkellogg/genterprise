function IncomingPaymentsController() {}

IncomingPaymentsController.prototype. get = function(req, res) {
  server.models.ripple_address.create({
    account: 'r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk',
    type: 'independent'
  }, function(error, address) {
    if (error) {
      res.status(500).send({ error: error });
    } else {
      server.models.ripple_address.find(function(error, addresses) {
        res.status(200).send({
          addresses: addresses
        })
      });
    }
  })
}

module.exports = function mountRestApi(server) {
  var controller = new IncomingPaymentsController();
  server.get('/payments/incoming', controller.get);
};
