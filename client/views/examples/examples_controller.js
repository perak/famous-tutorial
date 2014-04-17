ExamplesController = RouteController.extend({
	template: "Examples",
	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},
	action: function() {
		this.redirect('examples.example1');
	}
});