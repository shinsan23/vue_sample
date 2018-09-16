(function() {
  "use strict";
  //2-0.
  //vue基本：双方向データバインディング //データを更新すればUIが更新されて
  //UIが更新されればデータが更新される
  //two way data binding(to UI)

  //2-2. UIに結び付くモデルをview modelと呼ぶ
  //どの領域のvueと
  var vm = new Vue({
    el: "#app",
    data: {
      name: "shin"
    }
  });
})();
