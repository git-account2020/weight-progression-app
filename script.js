
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
Ver.1.6
Object Oriented
	Use objects and methods
	Using a contructor function
	
What I did 
	Turned the methods back into regular functions
	Created a constructer function called workout
	Create an instance(example) of the workout called user
	Passed the return value of each function
	
	Removed the steps where I previously assigned a method to a property name
*/





	// functions for getting workout values from users
	
		
		 function getSets (){ //added function as method 
			var sets;
			
			sets = parseInt(prompt("How many sets did you do or are you doing?"));
			return sets;
			}
		 
		 function getReps (){ //added function as method 
			var reps;
			
			reps = parseInt(prompt("How many reps did you do or are you doing?"));
			return reps;
			}
		 
		 function getPlatesSide (){
			platesSide = parseInt(prompt("What is the weight of the plates on one side?"));
			return platesSide;
			}
		 
		 function getBarWeight () {
			var barWeight;	
			barWeight = parseInt(prompt("What is the bar weight?"));
			return barWeight;
			}
		
	
	
	// contructor function for workout
	// input how many sets, reps, plates on one side, and the bar weight
	// create attributes
	function workout (getSets, getReps, getPlatesSide, getBarWeight){
		this.Sets = getSets;
		this.Reps = getReps;
		this.PlatesSide = getPlatesSide;
		this.BarWeight = getBarWeight;
	}
	
	
	var user = new workout(getSets(), getReps(), getPlatesSide(), getBarWeight());
	

// Input take in plates, the weight of the bar, how many sets, reps
// output the total volume or work created
function calculateVolume (platesSide, barWeight,sets, reps){
	var totalPlatesWeight;
	var totalWeight;
	var totalVolume;
	
	totalPlatesWeight = platesSide * 2;
	totalWeight = totalPlatesWeight + barWeight;
	totalVolume = sets * reps * platesSide;
	return totalVolume;
}

/*
user.Sets = user.getSets();
user.Reps = user.getReps();
user.PlatesSide = user.getPlatesSide();
user.BarWeight = user.getBarWeight();

*/

	document.write("Your total volume is " + calculateVolume(user.PlatesSide, user.BarWeight,user.Sets, user.Reps) + " pounds.");
	