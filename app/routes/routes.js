var path = require('path');

module.exports = function(app){
  var photoController = app.controllers.photo;

  app.route('api/v1/photos')
    .post(photoController.add)
    .get(photoController.list);

  app.route('api/v1/:photoId')
    .get(photoController.search)
    .put(photoController.update);

  app.get('api/v1/groups', photoController.listGroups);
  app.get('api/v1/group/:groupId', photoController.listForGroup);

  app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
  });
};
