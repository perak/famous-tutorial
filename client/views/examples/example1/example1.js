Template.ExamplesExample1.rendered = function() {
	require("famous-polyfills"); // Add polyfills
	require("famous/core/famous"); // Add the default css file

	var Engine = require("famous/core/Engine");
	var Modifier = require("famous/core/Modifier");
	var Surface = require("famous/core/Surface");
	var Transform = require("famous/core/Transform");

	var destNode = document.getElementById("example-container") || undefined;
	var context = Engine.createContext(destNode);

	var modifier1 = new Modifier({ 
		origin: [0.5, 0.5] 
	});

	var modifier2 = new Modifier({ 
		transform : Transform.translate(-50, -50)
	});

	var modifier3 = new Modifier({ 
		transform : Transform.translate(50, 50)
	});

	var surface1 = new Surface({
		content: "Surface 1",
		size: [100, 100], 
		properties: { 
			lineHeight: "100px",
			textAlign: "center", 
			backgroundColor: 'orange'
		} 
	});

	var surface2 = new Surface({ 
		content: "Surface 2",
		size: [100, 100], 
		properties: { 
			lineHeight: "100px",
			textAlign: "center", 
			backgroundColor: 'red'
		} 
	});

	var level1 = context.add(modifier1);

	var level2_branch1 = level1.add(modifier2);
	var level3_branch1 = level2_branch1.add(surface1);

	var level2_branch2 = level1.add(modifier3);
	var level3_branch2 = level2_branch2.add(surface2);

	modifier1.setTransform(Transform.rotateZ(1));
};


Template.ExamplesExample1.events({

});

Template.ExamplesExample1.helpers({

});
