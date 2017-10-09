var express = require( 'express' );
var app = express();

app.get( '/' , function( req , rest ) {
    rest.send( 'API REST, Welcome!' )
});

app.get( '/html' , function( req , rest ) {
    var html = "";
    html += "<html>"
    html += " <head>"
    html += " <title>HTML Return</title>"
    html += " </head>"
    html += " <body>"
    html += "  <script type='text/javascript'>"
    html += "   function buttonClick() {"
    html += "       alert( 'You can return a html with REST!' )"
    html += "   }"
    html += "  </script>"
    html += "  <p><b>This is a HTML example</b></p>"
    html += "  <button type='button' onClick='buttonClick()'>Click Me!</button>"
    html += " </body>"
    html += "</html>"
    rest.send( html )
});

app.get( '/HelloWorld' , function( req , rest ) {
    var helloWorld;

    helloWorld = { Text : "Hello World! ^_^" };
    rest.send( helloWorld );
});

app.get( '/WithData/:id' , function( req , rest ) {
    rest.send( 'Your ID:' + req.params.id );
});

app.use( function( req , res ) {
    res.status( 404 ).send( { url: req.originalUrl + ' not found' } )
});

app.listen( 9000 );
