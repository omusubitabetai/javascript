const items = document.querySelectorAll('.img-item');
//console.log(items);

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    filter: ['blur(20px)','blur(0)'],
    //opacity: [0, 1],
    //rotate: ['x 5deg', 0],
    //scale: [1.1, 1],
    //translate: ['o 50px', 0],
  };
  const options = {
    duration: 600,
    delay: i * 300,
    fill: 'forwards',
  };
  items[i].animate(keyframes, options);
}