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
      }
    },
    //10-1.データから動的にプロパティを
    //計算しくれる、算出プロパティ
    //[残タスク数を算出]
    //todoのisDoneがfalse、つまり残っている
    //タスクをreturn。それをフィルターして
    //itemsにまだ終わっていないタスクだけを入れる
    //まだ終わっていないタスクの件数を知りたいので
    //lengthを返してあげればＯＫ
    computed: {
      remaining: function() {
        var items = this.todos.filter(function(todo) {
          return !todo.isDone;
        });
        return items.length;
      }
    }
  });
})();
