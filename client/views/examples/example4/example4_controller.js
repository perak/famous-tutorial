ExamplesExample4Controller = RouteController.extend({
	template: "Examples",
	yieldTemplates: {
		'ExamplesExample4': {to: 'ExamplesSubcontent'}
	},
	action: function() {
		this.render();
	}
});