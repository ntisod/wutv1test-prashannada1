


function beräkna(operator) {
  var Tal1, Tal2;
  Tal1 = parseFloat(document.getElementById('värde1').value);
  Tal2 = parseFloat(document.getElementById('värde2').value);
  var result;

  if (operator === '+') {
      result = Tal1 + Tal2;
  } else if (operator === '-') {
      result = Tal1 - Tal2;
  } else if (operator === '*') {
      result = Tal1 * Tal2;
  } else if (operator === '/') {
      result = Tal1 / Tal2;
  }

  document.getElementById('result').value = result; 
}

function räknaÅlder(){



}


