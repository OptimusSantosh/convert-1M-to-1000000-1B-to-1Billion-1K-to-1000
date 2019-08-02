// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


 function calculateMBK(value) {

    let unit = 1;

    if (value.match('K') || value.match('k')) {
      unit = 1000;
    }
    if (value.match('M') || value.match('m')) {
      unit = 1000000;
    }
    if (value.match('B') || value.match('b')) {
      unit = 1000000000;
    }

    value = value.replace(/[kmb\s]/gi, '');

    console.log('returned ' + value);

    if (/[^\d|.]/.test(value) || value === '') {
      console.error('Input is invalid');
      return 0;
    } else {
      this.msgss = [];
      return parseFloat(value) * unit;
    }
  }


var input = "k";
var output = calculateMBK(input);

console.log("value is " + output);

console.log("value length ", output.toString().length);