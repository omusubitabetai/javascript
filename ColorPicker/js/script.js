//console.log(document.querySelector('#colorPicker').value);
//document.querySelector('#colorText').textContent = `カラーコード:${document.querySelector('#colorPicker').value}`;
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');
text.textContent = `カラーコード:${color.value}`;
color.addEventListener('input', colorBg);
