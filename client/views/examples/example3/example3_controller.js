ExamplesExample3Controller = RouteController.extend({
	template: "Examples",
	yieldTemplates: {
		'ExamplesExample3': {to: 'ExamplesSubcontent'}
	},
	action: function() {
		this.render();
	}
});