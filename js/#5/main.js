(function() {
  "use strict";
  // 5-2.newItemを追加する
  var vm = new Vue({
    el: "#app",
    data: {
      newItem: "",
      todos: ["task 1", "task 1", "task 3"]
    },
    //5-4.メソッドはmethodsというキーで書く
    //data内のデータにはthisでアクセスできる
    methods: {
      //5-6.formがsubmitされて
      //画面が遷移すると上手くいかない。
      //そこで引数eを与え、
      //preventDefaultで規定のページが
      //遷移することを無効化する
      //addItem: function() {
      //5-7.こういった処理はよく行うので
      //preventDefaultを書かずに、
      //htmlのディレクティブの方で
      //@submit.preeventとする
      //addItem: function(e) {
      //  e.preventDefault();
      addItem: function() {
        //5-5.newItemに追加された内容が
        //todosの末尾に追加されて
        //結果としてli要素に反映される
        this.todos.push(this.newItem);
        //5-8.値が残るので消しておく
        this.newItem = "";
      }
    }
  });
})();
