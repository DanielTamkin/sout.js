'use strict';
const sout      = require('./index.js');
const msgApp = new sout('App');


msgApp.log('Hey This is a cool message!');
msgApp.log('This messages title will be in green','green');
msgApp.log('This messages title will be in red','red');
msgApp.bracket('This message is bracketed');
msgApp.bracket('This bracketed message is green','green');
msgApp.bracket('This bracketed message is red','red');
msgApp.bracket('You can change the tab ammount of brackets','',1);
msgApp.bracket('Allowing you to have indenting','',1);
