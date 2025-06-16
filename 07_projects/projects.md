# Projects Related to DOM


## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-h7cm9vbw?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,page2.html&terminalHeight=10&title=Static%20Starter)

# Solution Code

## project 1

``` javascript
console.log("Khushi")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
      case 'white':
      case 'pink':
      case 'skyblue':
      case 'red':
      case 'orange':
      case 'purple':
      case 'blue':
      case 'yellow':
      case 'black':
      case 'brown':
      case 'green':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log('No matching color');
    }
  });
});

```