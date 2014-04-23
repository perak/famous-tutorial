Router.configure({
/*
	notFoundTemplate: 'NotFound'
	, loadingTemplate: 'Loading'
	, templateNameConverter: 'upperCamelCase'
	, routeControllerNameConverter: 'upperCamelCase'
*/
});

RouteController.prototype.layoutTemplate = 'layout';

Router.map(function () {
	this.route('home', {path: '/', controller: 'HomeController'});
	this.route('meteor', {path: '/meteor', controller: 'MeteorController'});
	this.route('examples', {path: '/examples', controller: 'ExamplesController'});
	this.route('examples.example1', {path: '/examples/example1', controller: 'ExamplesExample1Controller'});
	this.route('examples.example2', {path: '/examples/example2', controller: 'ExamplesExample2Controller'});
	this.route('examples.example3', {path: '/examples/example3', controller: 'ExamplesExample3Controller'});
	this.route('examples.example4', {path: '/examples/example4', controller: 'ExamplesExample4Controller'});
	this.route('examples.example5', {path: '/examples/example5', controller: 'ExamplesExample5Controller'});
	this.route('examples.example6', {path: '/examples/example6', controller: 'ExamplesExample6Controller'});
	this.route('examples.example7', {path: '/examples/example7', controller: 'ExamplesExample7Controller'});
	this.route('examples.example8', {path: '/examples/example8', controller: 'ExamplesExample8Controller'});

});
