
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

/*
Ver.1.4
Modularization
	Only use functions and local variables
	Passing data arguments to the funciton
	
*/




	
	
	
	
	
	
	var userSets 
	var userReps 
	var userPlatesSide 
	var userBarWeight 
	
	/*
	getSets();
	getReps();
	getPlatesSide();
	getBarWeight();
	*/

	
	userSets = getSets();
	userReps = getReps();
	userPlatesSide = getPlatesSide();
	userBarWeight = getBarWeight();

	
	document.write("Your total volume is " + calculateVolume(userPlatesSide, userBarWeight,userSets, userReps) + " pounds.");
	
	function getSets(){
		var sets;
		
		sets = parseInt(prompt("How many sets did you do or are you doing?"));
		return sets;
	}
	
	function getReps(){
		var reps;
		
		reps = parseInt(prompt("How many reps did you do or are you doing?"));
		return reps;
	}
	
	function getPlatesSide(){
		var platesSide;
		
		platesSide = parseInt(prompt("What is the weight of the plates on one side?"));
		return platesSide;
	}
	
	function getBarWeight(){
		var barWeight;
		
		barWeight = parseInt(prompt("What is the bar weight?"));
		return barWeight;
	}
	
	


function calculateVolume (platesSide, barWeight,sets, reps){
	var totalPlatesWeight;
	var totalWeight;
	var totalVolume;
	
	totalPlatesWeight = platesSide * 2;
	totalWeight = totalPlatesWeight + barWeight;
	totalVolume = sets * reps * platesSide;
	return totalVolume;
}



