const server = require('./server'),
      app     = server();
      
/// Run server 
app.listen(3100 , () => {
    console.log(`Server running !!!`);
});



