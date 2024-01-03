import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

function updateCounter() {
  let counter = $('#count').html() || 0;
  counter = parseInt(counter, 10);
  counter++;
  $('#count').html(`${counter} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
