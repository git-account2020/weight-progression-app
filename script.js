
/*
Output
	totalVolume
Input
	sets
	reps
	platesSide
	barWeight
	totalPlatesWeight
	totalWeight
	totalVolume
Process
	Read  sets user did
	Read  reps the user did
	Read  weight on one side of bar
	Read weight of the bar
	Get total weight of plates 	
	Get total weight
	Get total volume
	Display total volume
Algorithm
	Read  sets user did
	Read  reps the user did
	Read  weight on one side of bar
	Read weight of the bar
	Get total weight of plates
		platesSide * 2
	Get total weight
		totalPlatesWeight + barWeight
	Get total volume
		sets*reps*totalWeight
	Display total volume

	
*/

var sets;
var reps;
var platesSide;
var barWeight;
var totalPlatesWeight;
var totalWeight;
var totalVolume;

sets = parseInt(prompt("How many sets did you do or are you doing?"));
reps = parseInt(prompt("How many reps did you do or are you doing?"));
platesSide = parseInt(prompt("What is the weight of the plates on one side?"));
barWeight = parseInt(prompt("What is the bar weight?"));

totalPlatesWeight = platesSide * 2;
totalWeight = totalPlatesWeight + barWeight;
totalVolume = sets * reps * platesSide;

document.write("Your total volume is " + totalVolume + " pounds.");
