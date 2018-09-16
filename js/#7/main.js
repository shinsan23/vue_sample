(function() {
  "use strict";
  var vm = new Vue({
    el: "#app",
    data: {
      newItem: "",
      //7-1.ただのタイトル名だけでなくタスクの状態も管理する
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
        //7-2.pushの引数変更
        //        this.todos.push(this.newItem);
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
      }
    }
  });
})();
