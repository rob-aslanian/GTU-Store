module.exports = function(req , res , next) {
    
    this.db.query('SELECT * FROM users' , function(_ , res) {
        console.log(res);
        
        
    })
    

    return res.send("HIIII")
    
}