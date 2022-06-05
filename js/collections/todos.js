var TodosCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: TodoModel,

  markAllComplete: function () {
    this.each(function (m) {
      m.set('completed', true)
    })
  }
});