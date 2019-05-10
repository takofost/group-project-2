var db = require("../models");

var passport = require("passport");

module.exports = function(app) {
  app.get("/search", function(req, res) {
    if(req.isAuthenticated()){
      db.Items.findAll({}).then(function (dbItems) {
        console.log("dbItems", dbItems);

        var hbsObj = {
          items: [],
          id: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        };;
        dbItems.forEach(function(item){
          hbsObj.items.push(item.dataValues);
        });

        res.render("search", hbsObj);
      });
    }
    else{
      res.redirect("/");
    }
  });
};
;