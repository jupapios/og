var og = require('og');

var OpenGraph = og.OpenGraph;

var test = new OpenGraph('http://www.rottentomatoes.com/m/10011268-oceans/');
test.get('', function(response) {
	console.log(response);
});
/*test.get('title', function(response) {
	console.log(response);
});*/
