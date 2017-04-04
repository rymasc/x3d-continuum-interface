//include block using requires
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('model');
});

io.on('connection', function(socket){

  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });


  socket.on('message', function(msg){
    console.log("Wrote Data\n");
    io.emit('message', msg);
  });
});

server.listen(3000, function(){
  console.log('listening on port: ', app.get('port'));
});
