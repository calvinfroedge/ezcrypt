#Installation

`npm install --save ezcrypt`

#Run tests

`npm test`

#Usage

```
var c = require('ezcrypt')({
  password: 'USE_A_SECURE_ONE'
});

var encrypted = c.encrypt('test');
var decrypted = c.decrypt(encrypted);
```
