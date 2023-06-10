// #1
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(5)(2));

// #2
function colorParagraph () {
  const COLORS = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');

  let clickCountText1 = 0;
  let clickCountText2 = 0;
  let clickCountText3 = 0;

  text1.addEventListener('click', (event) => {
    event.target.style.color = COLORS[colorNum(clickCountText1)];
    clickCountText1++;
  });

  text2.addEventListener('click', (event) => {
    event.target.style.color = COLORS[colorNum(clickCountText2)];
    clickCountText2++;
  });

  text3.addEventListener('click', (event) => {
    event.target.style.color = COLORS[colorNum(clickCountText3)];
    clickCountText3++;
  });

  function colorNum(clickCount) {
    return clickCount % COLORS.length;
  }
}

export { sum, colorParagraph };
