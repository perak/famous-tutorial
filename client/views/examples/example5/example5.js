Template.ExamplesExample5.rendered = function() {
	require("famous-polyfills"); // Add polyfills

	var Engine     = require("famous/core/Engine");
	var Surface    = require("famous/core/Surface");
	var Scrollview = require("famous/views/Scrollview");

	var destNode = document.getElementById("example-container") || undefined;
	var context = Engine.createContext(destNode);

	var scrollview = new Scrollview();

	var surfaces = [];

	scrollview.sequenceFrom(surfaces);

	for (var i = 0; i < 100; i++) {
		var temp = new Surface({
			content: "Surface: " + (i + 1),
			size: [undefined, 100],
			properties: {
				backgroundColor: "hsl(" + (i * 360 / 40) + ", 100%, 50%)",
				lineHeight: "100px",
				textAlign: "center"
			}
		});

		temp.pipe(scrollview);
		surfaces.push(temp);
	}

	context.add(scrollview);
}

Template.ExamplesExample5.events({

});

Template.ExamplesExample5.helpers({

});
