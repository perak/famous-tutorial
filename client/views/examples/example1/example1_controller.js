ExamplesExample1Controller = RouteController.extend({
	template: "Examples",
	yieldTemplates: {
		'ExamplesExample1': {to: 'ExamplesSubcontent'}
	},
	action: function() {
		this.render();
	}
});