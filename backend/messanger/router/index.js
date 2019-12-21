const getMessages   = require('./getMessages'),
      writeMessages = require('./writeMessages'),
      connection    = require('../connection');


module.exports = {
    getMessages:getMessages.bind(connection),
    writeMessages:writeMessages.bind(connection)
}