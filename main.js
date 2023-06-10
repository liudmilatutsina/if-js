// #1
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(5)(2));

// #2
function colorParagraph() {
  const COLORS = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');

  let click_count_text1 = 0;
  let click_count_text2 = 0;
  let click_count_text3 = 0;

  text1.addEventListener('click', (event) => {
    event.target.style.color = COLORS[colorNum(click_count_text1, COLORS.length)];
    click_count_text1++;
  });

  text2.addEventListener('click', (event) => {
    event.target.style.color = COLORS[colorNum(click_count_text2, COLORS.length)];
    click_count_text2++;
  });

  text3.addEventListener('click', (event) => {
    event.target.style.color = COLORS[colorNum(click_count_text3, COLORS.length)];
    click_count_text3++;
  });
}
function colorNum(click_count, colours_lenght) {
  return click_count % colours_lenght;
}

document.addEventListener('DOMContentLoaded', () => {
  colorParagraph();
});

// export { sum, colorNum }; // uncomment for tests