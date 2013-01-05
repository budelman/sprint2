// javascript Ajax Request
var request = getHTTPObject();

/* Get all the information ready to go */
request.open("GET", "data/contacts.json", true);

/* initiate actual call */
request.send(null);

/* OR - initiate the call with some data */
request.send("hello data");
