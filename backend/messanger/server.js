const   express    = require('express'),
        router     = express.Router(),
        bodyParser = require('body-parser'),
        app        = express(),
        http       = require('http').Server(app),
        io         = require('socket.io')(http),
        routes     = require('./router/index');


/// Middlename /// 
app.use(bodyParser.json())


io.on('connection' , () => {
    console.log('Websocket connection open !');
    
})

console.log(io.nsps);




module.exports = function() {
    
    "use strict";
    
    router.get('/' , routes.getMessages);
    router.post('/:id' , function(req , res) {
        io.emit('message')
        res.send('Connected')
    });

    app.use('/api/v1/messanger', router);


    return app;
    
};

