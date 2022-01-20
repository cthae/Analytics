//First, we can use ES6 here. Or some important parts of it. Note that at this time, it only applies to the template code. We're still forced to use ES5 in custom JS vars.
//We wanna require GTM libs we'll need.
const copyFromDL = require('copyFromDataLayer');
const log = require('logToConsole');
//Then we wanna make sure we're using the UI vars we've declared in the Fields tab. They all live in the data obj
const whateverUIVariable = data.whateverUIVariable;
//Now we wanna copy stuff from DL to make it available here.
const ecom = copyFromDataLayer('ecommerce');

//Finally, we can start our code:

return whateverUIVariable + ecom.checkout.actionField.step;

//now this is just an example. It does nothing meaningful and definitely misses many validations, but this will do.
