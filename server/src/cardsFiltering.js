var exports = module.exports = {};

// Native libraries below.
var fs   = require('fs');
// 3rd-party libraries below.
var _    = require('underscore');

// Default cards categories.
exports.categories = {
	rarity      : ['FREE', 'COMMON', 'RARE', 'EPIC', 'LEGENDARY'],
	playerClass : ['DRUID', 'HUNTER', 'MAGE', 'PALADIN', 'PRIEST', 'ROGUE', 'SHAMAN', 'WARLOCK', 'WARRIOR'],
	type        : ['ENCHANTMENT', 'MINION', 'HERO', 'HERO_POWER', 'SPELL', 'WEAPON'],
	race        : ['BEAST', 'DRAGON', 'MECHANICAL', 'PIRATE', 'TOTEM', 'MURLOC', 'DEMON'],
	set         : ['EXPERT1', 'GVG', 'TGT', 'NAXX', 'BRM', 'LOE', 'CORE', 'REWARD', 'PROMO'],
};

var allCards = JSON.parse(fs.readFileSync('./data/cards.json', 'utf8'));

exports.all = function all() {
	return allCards;
};

exports.collectible = function collectible() {
	var cards = _.filter(allCards, function (card) {
		return card.collectible;
	});
	return cards;
}