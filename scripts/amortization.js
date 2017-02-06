function calculate(){
	
	var costs = document.getElementById("costs").value;
	var interest = document.getElementById("interest").value * 0.01;
	var years = document.getElementById("years").value;
	
	var addedInterest = Math.pow((1 + interest), years);
	var annualCosts = costs * ((interest * addedInterest)/(addedInterest - 1));
	document.getElementById("costsDisplay").innerHTML = "$" + costs;
	document.getElementById("interestDisplay").innerHTML = "%" + interest;
	document.getElementById("yearsDisplay").innerHTML = years;
	document.getElementById("annualDisplay").innerHTML = "$" + annualCosts.toFixed(2);
}