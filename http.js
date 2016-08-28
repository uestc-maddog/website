var PORT = 80;

var http = require('http');
var url = require('url');
var fs = require('fs');
var mine = require('./mine').types;
var path = require('path');
var express = require('express');
var http2 = require('spdy');
var compression = require('compression');
var logger = require('morgan');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// app.set('views', path.join(__dirname, 'web/views'));
// app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, 'src')));

app.use('/', function (req, res) {
    res.sendfile('src/html/index.html');
});
/**
 * real server
 */
var server = http2.createServer({
    key: fs.readFileSync('./my.key'),
    cert: fs.readFileSync('./my.crt')
}, app);
server.listen(443, function (err) {
    if (err) {
        console.log(err);
    }
});

/**
 *  only force redirect http to https
 */
var redirectApp = express();
redirectApp.use('*', function (req, res) {
    return res.redirect(['https://', req.hostname, req.originalUrl].join(''));
});
http.createServer(redirectApp).listen(80);
//
//
// var server2 = http.createServer(function (request, response) {
//     var pathname = url.parse(request.url).pathname;
//     if (pathname == "/") {
//         pathname = "/html/index.html";
//     }
//     var realPath = path.join("src", pathname);
//     var ext = path.extname(realPath);
//     ext = ext ? ext.slice(1) : 'unknown';
//     fs.exists(realPath, function (exists) {
//         if (!exists) {
//             response.writeHead(404, {
//                 'Content-Type': 'text/plain'
//             });
//
//             response.write("This request URL " + pathname + " was not found on this server.");
//             response.end();
//         } else {
//             fs.readFile(realPath, "binary", function (err, file) {
//                 if (err) {
//                     response.writeHead(500, {
//                         'Content-Type': 'text/plain'
//                     });
//                     response.end(err);
//                 } else {
//                     var contentType = mine[ext] || "text/plain";
//                     response.writeHead(200, {
//                         'Content-Type': contentType
//                     });
//                     response.write(file, "binary");
//                     response.end();
//                 }
//             });
//         }
//     });
// });
