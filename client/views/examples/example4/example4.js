Template.ExamplesExample4.rendered = function() {
	require("famous-polyfills"); // Add polyfills
	require("famous/core/famous"); // Add the default css file
	var Engine = require("famous/core/Engine");
	var Modifier = require("famous/core/Modifier");
	var Surface = require("famous/core/Surface");
	var Transform = require("famous/core/Transform");

	var destNode = document.getElementById("example-container") || undefined;
	var context = Engine.createContext(destNode);

	var modifier = new Modifier({ 
		origin: [0.5, 0.5]
	});

	var surface = new Surface({
		content: "Click Me!", 
		size: [100, 100], 
		properties: { 
			lineHeight: "100px",
			textAlign: "center", 
			backgroundColor: 'orange'
		} 
	});

	context.add(modifier).add(surface);

	surface.on("click", function() {
		surface.setContent("Oh no!");
		modifier.setTransform(Transform.rotate(0, 0, Math.PI), { duration: 500, curve: 'easeOut' }, function() {
			modifier.setTransform(Transform.rotate(0, 0, 0), { duration: 500, curve: 'easeIn' }, function() {
				surface.setContent("Click Me!");
			});
		});
	});
}

Template.ExamplesExample4.events({

});

Template.ExamplesExample4.helpers({

});
