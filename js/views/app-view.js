// Our overall **AppView** is the top-level piece of UI.
var AppView = Backbone.View.extend({

  // Instead of generating a new element, bind to the existing skeleton of
  // the App already present in the HTML.
  el: '.todoapp',

  events: {
    'keypress .new-todo': 'createOnEnter',
    'click .mark-all-complete': 'handleMarkAllComplete'
  },

  // At initialization we bind to the relevant events on the `Todos`
  // collection, when items are added.
  initialize: function () {
    this.$input = this.$('.new-todo');
    this.$list = this.$('.todo-list');

    this.listenTo(todosCollection, 'add', this.addOne);
  },

  handleMarkAllComplete: function () {
    todosCollection.markAllComplete();
  },

  // Add a single todo item to the list by creating a view for it, and
  // appending its element to the `<ul>`.
  addOne: function (todoModel) {
    var view = new TodoView({ model: todoModel });
    this.$list.append(view.render().el);
  },

  createOnEnter: function (e) {
    if (e.which === 13 && this.$input.val()) {
      todosCollection.add({
        title: this.$input.val(),
        completed: false
      });
  
      this.$input.val('');
    }
  }
});