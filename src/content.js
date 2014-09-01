var fs = require('fs');
var handlebars = require('handlebars');
var database = require('./database');

handlebars.registerHelper('url_encode', function (text) {
	return encodeURI(text).replace(/%5B/g, '[').replace(/%5D/g, ']');
});

var mainSource = fs.readFileSync('./views/main_template.html', 'utf8');
var mainTemplate = handlebars.compile(mainSource);

function return404(res) {
	res.writeHead(404, {"Content-Type": "text/plain"});
	res.write("404 Not Found\n");
	res.end();
}

function returnArticles(res, articles) {
	templateData = {
		  'page_title': 'My blog'
		, 'articles': articles
	}
	mainRendered = mainTemplate(templateData);

	res.writeHeader(200, {"Content-Type": "text/html"});
	res.write(mainRendered);
	res.end();
}

module.exports.frontPage = function (res) {
	articles = database.getAll();
	returnArticles(res, articles);
};

module.exports.about = function (res) {
	return404(res);
};

module.exports.tag = function (res, tag) {
//	articles = database.getTag(tag);
//	returnArticles(res, articles);
	return404(res);
};

module.exports.helpTag = function(res) {
	return404(res);
};

module.exports.title = function (res, title) {
	return404(res);
};

module.exports.helpTitle = function(res) {
	return404(res);
};

module.exports.author = function (res, author) {
	return404(res);
};

module.exports.helpAuthor = function(res) {
	return404(res);
};
