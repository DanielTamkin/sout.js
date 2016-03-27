# sout.js

A simple Chalk container package.

Example useage:
```javascript
const sout   = require('sout-js');
const msgApp = new sout('AppName');


msgApp.log('Hey This is a cool message!');
msgApp.log('This messages title will be in green','green');
msgApp.log('This messages title will be in red','red');
msgApp.bracket('This message is bracketed');
msgApp.bracket('This bracketed message is green','green');
msgApp.bracket('This bracketed message is red','red');
msgApp.bracket('You can change the tab ammount of brackets','',1);
msgApp.bracket('Allowing you to have indenting','',1);
```
Output:

![Screenshot of sout.js example output](screenshot/output.jpg)

### Requires:
| Module  | Version |
| ------------- | ------------- |
| [Chalk](https://www.npmjs.com/package/chalk)  | ^1.1.1  |

---

*Pro tip:* You can indent a whole object of messages,
 do this when your creating creating a `new sout()`
```javascript
const msgApp = new sout('AppName', 1);
```
---

#### To do:
| Task  | Progress |
| ------------- | ------------- |
| Remove Giant objects </br> of possible colors.  | on the table  |
| Integrate A simple timer  | possibility  |
