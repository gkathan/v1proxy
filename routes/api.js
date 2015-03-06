/**
  /api routes
*/
var express = require('express');
var router = express.Router();
var _ = require('lodash');


var BASE = "";


/* GET api listing. */
var PATH_ROOT ="/";
var PATH = {
						ROOT : PATH_ROOT,
						REST_EPICS : BASE+'/epics',
						
					};

router.get(PATH.ROOT, function(req, res, next) {res.locals.API_LIST=PATH;res.locals.REQ_PATH=req.baseUrl;res.render("api")});

router.get(PATH.REST_EPICS, function(req, res, next) {getBy(req,res,next); });




module.exports = router;




/**
 * generic finder
 */
function getBy(req, res , next){
	var path = req.path.split("/");
	var collection = _.last(path);
    var _filterName = req.query.n;
	var _filterOperator = req.query.o;
	var _filterParams = req.query.p;
	
	
    
}


