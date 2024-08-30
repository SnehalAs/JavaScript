function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    const numberOfPeople = parseInt(document.getElementById('number-of-people').value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter valid inputs.");
        return;
    }

    const tipAmount = billAmount * tipPercentage;
    const totalAmountPerPerson = (billAmount + tipAmount) / numberOfPeople;

    document.getElementById('tip-amount').innerText = `Tip Amount: $${tipAmount.toFixed(2)}`;
    document.getElementById('total-amount').innerText = `Total Amount per Person: $${totalAmountPerPerson.toFixed(2)}`;
}
