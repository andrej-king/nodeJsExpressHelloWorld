const express = require('express');
const { request, response } = require('express');
const app = express();

app.get("/", function(request, response){
	// console.log(request);
	response.send('<h1>Hello world!</h1>');
});

//rout
app.get('/about', function(req, resp){
	resp.setHeader('content-type', 'text/html');
	resp.send('<h1>About page!</h1>');
});

app.get('/contact', function(req, resp){
	resp.setHeader('content-type', 'text/html');
	resp.send("<h1>Contact page</h1>" + "\n" + "<h2>jamex48797@acetesz.com</h2>");
});

// start localhost on port 3000
app.listen(3000, function() { 
    console.log("Server is running on Port 3000");
});

