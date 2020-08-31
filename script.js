
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
Ver.1.5
Object Oriented
	Use objects and methods
	
What I did 
	Removed the variables
	Created an object
	Took the functions and turned them into methods
	Added a return statement at the end of the method
	Made a property and gave it a value by assigning the property to the corresponding method
	Replaced variables with properties in the print document.write statement
*/





	// changed the variable to properties of user object
	var user = {
		
		getSets : function(){ //added function as method 
			var sets;
			
			sets = parseInt(prompt("How many sets did you do or are you doing?"));
			return sets;
		
		},
		getReps: function(){ //added function as method 
			var reps;
			
			reps = parseInt(prompt("How many reps did you do or are you doing?"));
			return reps;
		},
		getPlatesSide: function(){
			platesSide = parseInt(prompt("What is the weight of the plates on one side?"));
			return platesSide;
		},
		getBarWeight: function(){
			var barWeight;	
			barWeight = parseInt(prompt("What is the bar weight?"));
			return barWeight;
		}
		
	};
	
	
		



function calculateVolume (platesSide, barWeight,sets, reps){
	var totalPlatesWeight;
	var totalWeight;
	var totalVolume;
	
	totalPlatesWeight = platesSide * 2;
	totalWeight = totalPlatesWeight + barWeight;
	totalVolume = sets * reps * platesSide;
	return totalVolume;
}


user.Sets = user.getSets();
user.Reps = user.getReps();
user.PlatesSide = user.getPlatesSide();
user.BarWeight = user.getBarWeight();

	document.write("Your total volume is " + calculateVolume(user.PlatesSide, user.BarWeight,user.Sets, user.Reps) + " pounds.");
	