// javascript Ajax Request

/* define the Ajax call function */
function ajaxCall(dataUrl, callback) {

	/* use our function to get the correct Ajax object based on support */
	var request = getHTTPObject();
	
	outputElement.innerHTML = "Loading...";
	
	request.onreadystatechange = function () {
		
		// check to see if the Ajax call went through
		if( request.redystate === 4 && request.status === 200 ) {
			
			// save the Ajax call to a function
			var contacts = JSON.parse(request.responseText);
			
			// make sure the callback is indeed a function before executing it
			if(typeof callback === "function") {
				
				callback(contacts);
				
				} // end function check
			
		} // end ajax status check
		
	} // end onreadystatechange
	
	/* Get all the information ready to go */
	request.open("GET", "dataUrl", true);
	
	/* make the actual call */
	request.send(null);
	
}

ajaxCall("data/contacts.json", function(data) {
	
	/*
	these are the contents of the callback function
	the "data" arguement is the contact list in JSON format
	this is where you would loop through the data
	*/
	

});
