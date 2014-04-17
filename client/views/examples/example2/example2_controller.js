ExamplesExample2Controller = RouteController.extend({
	template: "Examples",
	yieldTemplates: {
		'ExamplesExample2': {to: 'ExamplesSubcontent'}
	},
	action: function() {
		this.render();
	}
});