exports.test_encryptDecrypt = function(test){
  var c = require('./index.js')({
    password: 'test'
  });

  test.expect(2);
  var value = c.encrypt('test');
  test.notEqual(value, 'test');
  test.equals(c.decrypt(value), 'test');
  test.done();
}
