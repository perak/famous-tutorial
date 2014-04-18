Template.ExamplesExample2.rendered = function() {
	require("famous-polyfills"); // Add polyfills
	require("famous/core/famous"); // Add the default css file
	var Engine = require("famous/core/Engine");
	var Modifier = require("famous/core/Modifier");
	var Surface = require("famous/core/Surface");
	var Transform = require("famous/core/Transform");

	var destNode = document.getElementById("example-container") || undefined;
	var context = Engine.createContext(destNode);

	var modifier = new Modifier({ 
		origin: [0.5, 0.5],
		transform: Transform.rotateZ(1)
	});

	var surface = new Surface({
		content: "Hello!", 
		size: [100, 100], 
		properties: { 
			lineHeight: "100px",
			textAlign: "center", 
			backgroundColor: 'orange'
		} 
	});

	context.add(modifier).add(surface);

	modifier.setTransform(Transform.rotateZ(0), { duration: 1000, curve: 'spring' }, function() {
		modifier.setTransform(Transform.translate(0, 100), { duration: 500, curve: 'easeIn'}, function() {
			modifier.setTransform(Transform.translate(0, -100), { duration: 500, curve: 'easeOutBounce'});
		});
	});
}

Template.ExamplesExample2.events({

});

Template.ExamplesExample2.helpers({

});
