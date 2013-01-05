// javascript Ajax Request
var request = getHTTPObject();

request.onreadystatechange = function () {
	
	// check if the request is ready and that it was successful
	if( request.redystate === 4 && request.status === 200 ) {
		
		// do something
	}
}

/* Get all the information ready to go */
request.open("GET", "data/contacts.json", true);

/* initiate actual call */
request.send(null);
