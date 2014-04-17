ExamplesExample6Controller = RouteController.extend({
	template: "Examples",
	yieldTemplates: {
		'ExamplesExample6': {to: 'ExamplesSubcontent'}
	},
	action: function() {
		this.render();
	}
});