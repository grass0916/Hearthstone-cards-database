var exports = module.exports = {};

// 3rd-party libraries below.
var jade = require('jade');

// Import the cards information.
var cards = require('./cardsFiltering.js');

exports.core = {
	index: function * () {
		var options = {
			categories: cards.categories,
			cards: cards.collectible()
		};
		var html  = jade.renderFile('./server/views/index.jade', options);
		// Write the HTML.
		this.body = html;
	}
};