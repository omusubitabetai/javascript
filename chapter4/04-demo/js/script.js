const btn = document.querySelector('#btn');

btn.addEventListener('click',() => {
  document.body.classList.toggle('dark-theme');
});

//もし（ボタンのテキスト「ダークモードにする」になっている){
if(btn.textContent == 'ダークモードにする'){
  //ボタンのテキスト = 「ライトモードにする」に変更；
  btn.testContent = 'ライトモードにする';
//}そうでないなら(「ライトモードにする」と変更されているなら){
} else {
  //クリックされた時に「ダークモードにする」に戻す
  btn.textContent = 'ダークモードにする';
}

