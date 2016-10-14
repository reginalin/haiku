var quotes = [
	'An old silent pond',
	'splash! Silence again',
	'Autumn moonlight',
	'into the chestnut',
	'Lightning flash-',
	'O snail',
	'I bid farewell',
	'forest, winds howl in rage',
	'a leafless tree',
	'in the April wind',
	'As the wind does blow',
	'I walk across sand',
	'A cricket disturbed',
	'I turned over',
	'look out and give me room there',
	'I watched a leaf settle down',
	'It flows straight',
	'you, cricket, you',
	'The color and scent of wisteria',
	'Seems far away',
	'epiphanies',
	'To the departing year',
	'Out of itself',
	'balancing its tomato'
]

function makeHaiku() {
	var firstLine = randomLine();
	var secondLine = randomLine();
	while (firstLine === secondLine) {
		secondLine = randomLine();
	}
	var thirdLine = randomLine(); 

	document.getElementById('quoteDisplay').innerHTML = 
			quotes[firstLine] + '<br>' + quotes[secondLine] + '<br>' + quotes[thirdLine]; 
}

function randomLine() {
	return Math.floor(Math.random() * quotes.length);
}

$('.btn').mouseup(function() { this.blur() })