module.exports = function(options) {
  var options = options || {};

  if(!options.password){
    throw new Error("A password must be provided in options for ezcrypt.");
  }

  var algorithm, crypto, env;

  crypto = require('crypto');

  algorithm = options.algorithm || 'aes-256-ctr';

  env = options.env || 'development';

  var API = {
    hashFromString: function(string, algo) {
      var hash;
      if (!algo) {
        algo = 'sha1';
      }
      hash = crypto.createHash(algo);
      hash.update(new Buffer(string + '-' + env));
      return hash.digest('hex');
    },
    encrypt: function(text) {
      var cipher, crypted;
      cipher = crypto.createCipher(algorithm, options.password);
      crypted = cipher.update(text, 'utf8', 'hex');
      crypted += cipher.final('hex');
      return crypted;
    },
    decrypt: function(text) {
      var dec, decipher;
      decipher = crypto.createDecipher(algorithm, options.password);
      dec = decipher.update(text, 'hex', 'utf8');
      dec += decipher.final('utf8');
      return dec;
    }
  };

  return API;

}
