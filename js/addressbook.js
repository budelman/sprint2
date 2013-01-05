// javascript Ajax Request
var request = getHTTPObject();

request.onreadystatechange = function () {
	
	// check if the request is ready and that it was successful
	if( request.redystate === 4 && request.status === 200 ) {
		
		// spit out the data that comes back
		console.log(request.responseText);
		
	}
}

/* Get all the information ready to go */
request.open("GET", "data/contacts.json", true);

/* make the actual call */
request.send(null);
