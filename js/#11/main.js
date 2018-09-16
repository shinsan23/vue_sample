(function() {
  "use strict";
  var vm = new Vue({
    el: "#app",
    data: {
      newItem: "",
      todos: [
        {
          title: "task 1",
          isDone: false
        },
        {
          title: "task 2",
          isDone: false
        },
        {
          title: "task 3",
          isDone: true
        }
      ]
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = "";
      },
      deleteItem: function(index) {
        if (confirm("アイテムを削除しますが、よろしいですか?")) {
          this.todos.splice(index, 1);
        }
      },
      // 11-2.一括削除関数追加
      purge: function() {
        if (!confirm("一括削除?")) {
          return;
        }
        // 11-3.filter処理重複削除
        //  this.todos = this.todos.filter(function(todo) {
        //    return !todo.isDone;
        //  });
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        // 11-3.filter処理重複削除
        //var items = this.todos.filter(function(todo) {
        //  return !todo.isDone;
        //});
        //return items.length;
        return this.todos.filter(function(todo) {
          return !todo.isDone;
        });
      }
    }
  });
})();
