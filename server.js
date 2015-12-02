var http = require('http')
, load = require('express-load')
, app = require('./config/express')
,db = require('./config/database');

load('models', {cwd: 'app'})
  .then('controllers')
  .then('routes')
  .into(app);

http.createServer(app).listen(3000, function(){
  console.log('Servidor rodanda na porta:' + this.address().port);
});
