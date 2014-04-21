Template.ExamplesExample3.rendered = function() {
	require("famous-polyfills"); // Add polyfills
	require("famous/core/famous"); // Add the default css file
	var Engine = require("famous/core/Engine");
	var Modifier = require("famous/core/Modifier");
	var Surface = require("famous/core/Surface");
	var Transform = require("famous/core/Transform");
    var SpringTransition = require("famous/transitions/SpringTransition");

	var destNode = document.getElementById("example-container") || undefined;
	var context = Engine.createContext(destNode);

	var surface = new Surface({
		size:[100,100],
		content: 'Hello!',
		size: [100, 100], 
		properties: { 
			lineHeight: "100px",
			textAlign: "center", 
			backgroundColor: 'orange'
		}
	});

	var modifier = new Modifier({
		origin: [.5,.5],
		transform: Transform.rotate(1, 1, 1)
	});

	var transition = {
		method: SpringTransition,
		period: 2000,
		dampingRatio: 0.1,
		velocity: 0
	}

	modifier.setTransform(Transform.rotate(0,0,0), transition);
	context.add(modifier).add(surface);
}

Template.ExamplesExample3.events({

});

Template.ExamplesExample3.helpers({

});
