document.addEventListener('DOMContentLoaded', function() {
    const operand1Input = document.getElementById('operand1');
    const operand2Input = document.getElementById('operand2');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const checkBtn = document.getElementById('check-btn');
    const restartBtn = document.getElementById('restart-btn');
  
    calculateBtn.addEventListener('click', function() {
      const operand1 = parseFloat(operand1Input.value);
      const operand2 = parseFloat(operand2Input.value);
      
      if (!isNaN(operand1) && !isNaN(operand2)) {
        const result = operand1 + operand2;
        resultDiv.textContent = `${operand1} + ${operand2} = ${result}`;
        resultDiv.classList.remove('hidden');
      } else {
        resultDiv.textContent = 'Please enter valid numbers';
        resultDiv.classList.remove('hidden');
      }
    });
  
    checkBtn.addEventListener('click', function() {
      if (!resultDiv.classList.contains('hidden')) {
        alert(resultDiv.textContent);
      } else {
        alert('Calculate first to see the result.');
      }
    });
  
    restartBtn.addEventListener('click', function() {
      operand1Input.value = '';
      operand2Input.value = '';
      resultDiv.textContent = '';
      resultDiv.classList.add('hidden');
    });
  });
  