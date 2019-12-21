module.exports = function(req , res , next) {
  
  
    console.log(this._socket);
    
    return res.send('Connected')
}