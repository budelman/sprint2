// javascript Ajax Request
/* define the Ajax call function */

function ajaxCall(dataUrl) {

	/* use our function to get the correct Ajax object based on support */
	var request = getHTTPObject();
	
	request.onreadystatechange = function () {
		
		// check to see if the Ajax call went through
		if( request.redystate === 4 && request.status === 200 ) {
			
			// spit out the data that comes back
			console.log(request.responseText);
			
		} // end ajax status check
		
	} // end onreadystatechange
	
	/* Get all the information ready to go */
	request.open("GET", "dataUrl", true);
	/* make the actual call */
	request.send(null);
	
}