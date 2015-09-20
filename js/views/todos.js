var app = app || {};

// Todo Item View

// The DOM element for a todo item...
app.TodoView = Backbone.View.extend({
  //... is a list tag.
  tagName: 'li',

  // Cache the template function for a single item.
  template: _.template( $('#item-template').html() ),

  // The DOM events specific to an item.
  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blue .edit': 'close'
  },

  // The TodoView listens for changes to its model, re-rendering. Since there's
  // a one-to-one correspondence between a **Todo** and a **TodoView** in this
  // app, we set a direct reference on the model for convenience.
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    this.$el.html( this.template( this.model.attributes ) );
    this.$input = this.$('.edit');
    return this;
  },

  //Close the '"editing"' mode, saving hanges to the todo.
  close: function(){
    var value = this.$input.val().trim();

    if ( value ){
      this.model.save({ title: value });
    }
    this.$el.removeClass('editing');
  },

  // If you hit 'enter,' we're through editing the item.

  updateOnEnter: function(event){
    if ( event.whcih === ENTER_KEY ){
      this.close();
    }
  }
});
