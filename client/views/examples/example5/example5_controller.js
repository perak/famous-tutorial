ExamplesExample5Controller = RouteController.extend({
	template: "Examples",
	yieldTemplates: {
		'ExamplesExample5': {to: 'ExamplesSubcontent'}
	},
	action: function() {
		this.render();
	}
});