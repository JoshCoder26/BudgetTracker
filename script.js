let balance = parseFloat(localStorage.getItem("currentBalance"));
let currency = localStorage.getItem("currency");
if (balance === null){
    document.getElementById("jsSection").innerHTML = '<h2>First time setup</h2><input type="number" placeholder="Enter starting balance" id=balanceInput><br><input placeholder="Enter currency symbol" id=currencyInput><br><button id=continueButton>Continue</button>';
    document.getElementById("continueButton").addEventListener('click', () => {
        balance = document.getElementById("balanceInput").value
        currency = document.getElementById("currencyInput")
        document.getElementById("jsSection").innerHTML = '<h2>Enter goal</h2><input placeholder="Enter goal name" id="goal1name"><br><label for="goal1price">Enter goal price:<br>' + currency + '<input type="number" id="goal1price"><br><button id=continueButton>Done!</button>';
    })
}