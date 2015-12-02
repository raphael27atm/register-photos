module.exports = function(app){
  var Photo = app.models.photo;

  var PhotoController = {

    add: function(res, req){
      Photo.insert(req.body, function(err, newDoc){
        if(err) return console.log(err);
        console.log("Add with success" + newDoc._id);
        res.json(newDoc._id);
      });
    },

    search: function(res, req){
      Photo.findOne({_id: req.params.photoId}, function(err, doc){
        if(err) return console.log(err);
        res.json(doc);
      });
    },

    update: function(res, req){
      Photo.update({_id: req.params.fotoId}, req.body, function(err, numReplaced){
        if(err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Update success: ' + req.body._id);
        res.status(200).end();
      });
    },

    list: function(res, req){
      Photo.find({}).sort({title: 1}).exec(function(err, doc){
        if(err) return console.log(err);
        res.json(doc);
      });
    },

    listForGroup: function(req, res) {
      var grupoId = parseInt(req.params.grupoId);
      Photo.find({group: groupId}, function(err, doc) {
          if (err) return console.log(err);
          res.json(doc);
      });
    },

    detroy: function(req, res) {
      Photo.remove({ _id: req.params.photoId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
      });
    },

    listGroups: function(req, res) {
      res.json([
        {
          _id: 1,
          nome: 'esporte'
        },
        {
          _id: 2,
          nome: 'lugares',
        },
        {
          _id: 3,
          nome: 'animais'
        }
      ]);
    }

  }

  return PhotoController;
}
