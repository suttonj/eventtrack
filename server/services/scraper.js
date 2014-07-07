
'use strict';

var request = require('request');
var Event = require('../api/event/event.model');

request('https://www.kimonolabs.com/api/c296alqo?apikey=338ddacf423cc90ab1c02b71f38c02da', function(error, response, body) {
	if (!error) {
		var json = JSON.parse(body);
		console.log('events: ' + json.results);
		for (var i = 0; i < json.results.collection1.length; i++) {
			var e = json.results.collection1[i];
			if (e.Act.length > 0) {
				Event.create({
					name: e.Act,
					//date: new Date(e.property2[1] + " " + e.property2[2]),
					info: "middle east zuzu",
					genre: "tbd"
				}, function(err, event) {
					if(err) { return console.log('err: ' + err ) }
					return console.log('event: ' + event);
				});
			}
		}
	}
	else {
		console.log("error getting api call: " + error);
	}
})