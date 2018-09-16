(function() {
  "use strict";
  var vm = new Vue({
    el: "#app",
    data: {
      newItem: "",
      todos: ["task 1", "task 1", "task 3"]
    },
    methods: {
      addItem: function() {
        this.todos.push(this.newItem);
        this.newItem = "";
      },
      deleteItem: function(index) {
        if (confirm("アイテムを削除しますが、よろしいですか?")) {
          //indexから1要素分削除する
          this.todos.splice(index, 1);
        }
      }
    }
  });
})();
