ExamplesExample7Controller = RouteController.extend({
	template: "Examples",
	yieldTemplates: {
		'ExamplesExample7': {to: 'ExamplesSubcontent'}
	},
	action: function() {
		this.render();
	}
});