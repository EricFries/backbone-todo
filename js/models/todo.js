// js/models/todo.js
var app = app || {};

// Todo model
// Basic Todo model has 'title' and 'completed' attributes

app.Todo = Backbone.Model.extend({
  // Default attributes make sure each todo item has 'title' and 'completed' keys

  defaults: {
    title: '',
    completed: false
  },

  // Toggle the 'completed' state of the todo item.
  toggle: function(){
    this.save({
      completed: !this.get('completed')
    });
  }

});
