import express from 'express'; //Tells node to go get express
let server = express(); //express function returns an object with server methods
let PORT = 3000;

server.use(express.static(__dirname + '/public'));
//this tells express that the front end of our website is in the folder 'public'

server.listen(PORT, () => {
  console.log('Server is up an running on port:', PORT);
});
