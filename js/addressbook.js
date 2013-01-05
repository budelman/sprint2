/* wrap everything in an anonymous function to contain the variables */
(function(){
    
    /* create address book data */
    var contacts = {
        "addressBook" : [
	    {
		"name": "michael perrone",
        "email": "michael.perrone@freshtilledsoil.com",
            },
            {
		"name": "richard",
        "email": "richard@freshtilledsoil.com",
            },
            {
		"name": "alex fedorov",
        "email": "alex@freshtilledsoil.com",
            },
            {
		"name": "dan",
        "email": "dan@freshtilledsoil.com",
            },
            {
		"name": "kelly",
        "email": "kelly@freshtilledsoil.com",
            },
	    {
		"name": "mike",
        "email": "mike@freshtilledsoil.com",
            },
            {
		"name": "kristy",
        "email": "kristy@freshtilledsoil.com",
            },
            {
		"name": "alex sylvia",
        "email": "alex.sylvia@freshtilledsoil.com",
            },
            {
		"name": "alec",
        "email": "alec.harrison@freshtilledsoil.com",
            },
            {
		"name": "steve h",
        "email": "steve.hickey@freshtilledsoil.com",
            },
            {
		"name": "mark",
        "email": "mark.grambau@freshtilledsoil.com",
            },
            {
		"name": "neal",
        "email": "neal.corbett@freshtilledsoil.com",
            },
            {
		"name": "tim",
        "email": "tim.wright@freshtilledsoil.com",
            },
            {
		"name": "steve",
        "email": "steve@freshtilledsoil.com",
            },
            {
		"name": "michael connors",
        "email": "michael.connors@freshtilledsoil.com",
            },
            {
		"name": "jonathan",
        "email": "jonathan.barker@freshtilledsoil.com",
            },
            {
		"name": "geordie",
        "email": "geordie.kaytes@freshtilledsoil.com",
            },
            {
		"name": "dave",
        "email": "david@freshtilledsoil.com",
            },
            {
		"name": "tim",
        "email": "tim@freshtilledsoil.com",
            },
            {
		"name": "michelle",
        "email": "michelle.hartog@freshtilledsoil.com",
            },
            {
		"name": "sarah",
        "email": "sarah@freshtilledsoil.com",
            },
            {
		"name": "jinyoung",
        "email": "jinyoung@freshtilledsoil.com",
            },
            {
		"name": "paul",
        "email": "paul.greenlea@freshtilledsoil.com",
            },
            {
		"name": "alex stetson",
        "email": "alexs@freshtilledsoil.com",
            },
        ]
    };
    
    /* define the DOM elements and common variables you'll need */
    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("q"),
        getAllButton = document.getElementById("get-all"),
        count = contacts.addressBook.length,
        target = document.getElementById("output");
    
    /* define address book methods */
    var addr = {
        
        search : function(event){
            
            // save the input value, contacts length and i to variables
            var searchValue = searchField.value,
                i;
            
            // stop the default behavior
            event.preventDefault();
            
            // clear the target area just incase there's something in it.
            target.innerHTML = "";
            
            // check the count, of course
            if(count > 0 && searchValue !== ""){
            
                // loop through the contacts
                for(i = 0; i < count; i = i + 1) {

                    // look through the name value to see if it contains the searchterm string
                    var obj = contacts.addressBook[i],
                        isItFound = obj.name.indexOf(searchValue);

                    // anything other than -1 means we found a match
                    if(isItFound !== -1) {
                        target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                    } // end if

                } // end for loop

            } // end count check

        },
        getAllContacts : function (){
            
            var i;
            
            // clear the target area just incase there's something in it.
            target.innerHTML = "";
            
            // check the count, of course
            if(count > 0){
            
                // loop through the contacts
                for(i = 0; i < count; i = i + 1) {
                
                    // look through the name value to see if it contains the searchterm string
                    var obj = contacts.addressBook[i];
                    
                    target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                    
                } // end for loop
            } // end count check
        },
        setActiveSection : function(){
        
            // add a class of "active" the wrapping div
            this.parentNode.setAttribute("class", "active");
        
        },
        removeActiveSection : function(){
        
            // remove the class from the wrapping div
            this.parentNode.removeAttribute("class");
        
        },
        addHoverClass : function(){
        
            // remove the class from the wrapping div
            searchForm.setAttribute("class", "hovering");
        
        },
        removeHoverClass : function(){
        
            // remove the class from the wrapping div
            searchForm.removeAttribute("class");
        
        }
    
    } // end addr object
    
    // activate auto complete on keyUp
    searchField.addEventListener("keyup", addr.search, false);
    
    // set active section on focus of the form field
    searchField.addEventListener("focus", addr.setActiveSection, false);
    
    // remove active section on blur of the form field
    searchField.addEventListener("blur", addr.removeActiveSection, false);
    
    // get all contacts when you click the button
    getAllButton.addEventListener("click", addr.getAllContacts, false);
    
    // add hover class on mouse over of the form field
    searchForm.addEventListener("mouseover", addr.addHoverClass, false);
    
     // remove hover class on mouse out of the form field
    searchForm.addEventListener("mouseout", addr.removeHoverClass, false);
    
    // activate search on form submit
    searchForm.addEventListener("submit", addr.search, false);
    
})(); // end anonymous function