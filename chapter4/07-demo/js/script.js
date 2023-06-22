const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup',() => {
  count.textContent = text.value.length;

  //１００文字を超えるなら
  if (text.value.length > 100){
    //alertクラスを加える
    count.classList.add('alert');
    //そうでないなら（１００文字以下なら）
} else {
    //alertクラスを外す
    count.classList.remove('alert');
  }
});