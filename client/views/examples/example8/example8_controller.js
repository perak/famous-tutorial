ExamplesExample8Controller = RouteController.extend({
	template: "Examples",
	yieldTemplates: {
		'ExamplesExample8': {to: 'ExamplesSubcontent'}
	},
	action: function() {
		this.render();
	}
});