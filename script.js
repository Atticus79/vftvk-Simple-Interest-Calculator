// compute the interest amount
function compute()
{
	// grab inputs from the user
    var principal = document.getElementById("principal").value;
	
	// validate the principal amount
	// stop computing if not valid
	if (!validatePrincipal())
	{
		return;
	}
	
    var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	
	// compute the interest earned
	var amount = principal * years * rate /100;
	
	// convert the 'No of Years' into the actual year in the future
	var year = new Date().getFullYear()+parseInt(years);
	
	// output the result
	document.getElementById("result").innerHTML="If you deposit <mark>" + principal + "</mark>,\<br\>at an interest rate of <mark>" + rate + "%</mark>\<br\>You will receive an amount of <mark>" + amount + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>"	
}

// updates the rate display 
function updateRate() 
{
	// grab the value from the slider control
    var rateval = document.getElementById("rate").value;
	
	// update the rate display and add the % sign
    document.getElementById("rate_val").innerText=rateval + "%";
}

// validate the principal amount entered 
function validatePrincipal()
{				
	// get the input control for the principal
	var principal = document.getElementById("principal");	
	
	// if the amount is less than or equal to 0
	// display an alert
	// on OK, return focus to the control
	if(principal.value <= 0)
	{
		alert("Enter a positive number");
		principal.focus();
		return false;
	}	
	
	return true;
}
        