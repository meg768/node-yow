

var Config = module.exports = function (fileName) {

	var Path = require('path');
	var fileParts = Path.parse(fileName);
	var configFileName = Path.join(fileParts.dir, fileParts.name) + '.json';

	var json = {};

	try {
		console.log('Reading file', configFileName);
		json = JSON.parse(fs.readFileSync(fileName));

	}
	catch(error) {
		json =  {error:error.messageo};
	}

	return json;
}