

  // *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/students", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Students.findAll({}).then(function(dbStudents) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbStudents);
    });
  });

  // POST route for saving a new todo
  app.post("/api/students", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Students.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbStudents) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbStudents);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/students/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Students.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/students", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Students.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbStudents) {
      res.json(dbStudents);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
  });
};

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/students", function(req, res) {
    db.kimado.create(req.body).then(function(dbkimado) {
      res.json(dbkimado);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
