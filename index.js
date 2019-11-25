var express = require('express');
//var favicon = require('serve-favicon');
var path = require('path');

var app = express();
//var helmet = require('helmet')
//app.use(helmet())

/*app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "image-src self");
    //console.log(res.getHeader("Content-Security-Policy"));
    console.log(res.getHeader());
    return next();
    });*/
/*app.use((req, res) {
    res.set("Content-Security-Policy", "img-src": "self")
});*/

/*app.use("/", (req, res) => {
    //console.log(JSON.stringify(req.headers));
    res.setHeader("Content-Security-Policy", "img-src 'self'");
    console.log(res.getHeader("Content-Security-Policy"));
    res.json(req.headers);
    //return next();
});*/

app.set("Content-Security-Policy", "img-src 'self'");

//app.use(favicon(path.join(__dirname, 'favicon.ico')));

app.use("/admin", (req, res) => {
    res.setHeader("Content-Security-Policy", "img-src 'self'");
   
    res.redirect("/admin.html");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
