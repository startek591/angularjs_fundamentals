(function () {
  let stundent = {
    name: '',
    type: 'student',
  };

  document.addEventListener('DOMContentLoaded', contentLoaded);

  function contentLoaded(event) {
    document.getElementById('name').addEventListener('keyup', keyUp);
  }

  function keyUp(event) {
    calculatorNumericOutput();
  }

  function calculatorNumericOutput() {
    stundent.name = document.getElementById('name').value;
    let totalNameValue = 0;
    for (var i = 0; i < stundent.name.length; i++) {
      totalNameValue += stundent.name.charCodeAt(i);
    }
    let output =
      "Total Numeric value of person's name is " + totalNameValue;
    document.getElementById('output').innerHTML = output;
  }
})();
