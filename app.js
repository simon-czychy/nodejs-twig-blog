//base path
global.__base = __dirname + '/';
//Global requires
global.rdb = require('./application/config/globals').RethinkDB();
global.ArticleModel = require('./application/config/globals').ArticleModel();
global.express = require('./application/config/globals').Express();
global.Webuser  = require("./application/config/globals").Webuser();
global.ArticleController  = require('./application/config/globals').Article();
global.Article = new ArticleController();

var router = global.express.Router();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var cons = require('consolidate');

// Default Routes
var IndexRoute = require('./routes/IndexRoute');
var LoginRoute = require('./routes/LoginRoute');
var LogoutRoute = require('./routes/LogoutRoute');
var AdminRoute = require('./routes/AdminRoute');
var ArticleRoute = require('./routes/ArticleRoute');





//create express instance
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
//set port
app.set('port', 80);



// set view engine to swig
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', 'application/views');


//set folder for static files like css, js, etc. to be served
app.use('/static', express.static(__dirname + '/static'));

//Route to Index
app.use('/', IndexRoute);
app.use('/login', LoginRoute);
app.use('/logout', LogoutRoute);
app.use('/admin', AdminRoute);
app.use('/article', ArticleRoute);



// catch 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Display errors from twig etc.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      status: err.status,
      message: err.message,
      error: err.stack
  });
});


//export
module.exports = app;

//listen on given port
app.listen(app.get('port'), function() {
  console.log("Express app listening...");
});
