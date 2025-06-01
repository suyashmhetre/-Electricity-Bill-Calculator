document.addEventListener('DOMContentLoaded', function () { 
    let unitsInput = document.querySelector('input[name="email"]');  // for the number of units
    let resultOutput = document.getElementById("output");            // to display the result
    let submitButton = document.querySelector('.button-confirm');

    let unit = document.getElementById("item1");
    let electricity = document.getElementById("item2");
    let distribution = document.getElementById("item3");
    let total = document.getElementById("item4");
    let card = document.getElementById("mainbox");
    let instabtn = document.querySelector('.instabtn');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        card.style.visibility = "visible";

        let value = parseFloat(unitsInput.value);
        let result = 0;

        if (isNaN(value) || value <= 0) {
            unit.textContent = "NaN";
            electricity.textContent = "NaN";
            distribution.textContent = "NaN";
            total.textContent = "NaN";
            resultOutput.textContent = "Please enter a valid number of units.";
            return;
        }

        if (value >= 1 && value <= 100) {
            let electricityCharge = value * 5.16;
            let distributionCharge = value * 1.17;
            let baseRate = value * 4.71;
            result = electricityCharge + distributionCharge + baseRate;

            unit.textContent = value;
            electricity.textContent = electricityCharge.toFixed(2);
            distribution.textContent = distributionCharge.toFixed(2);
            total.textContent = `₹ ${result.toFixed(2)}`;

        } else if (value >= 101 && value <= 300) {
            let z = value - 100;
            result = (100 * 5.16) + (z * 11.09) + 128 + (value * 1.17);

            unit.textContent = value;
            electricity.textContent = (100 * 5.16).toFixed(2);
            distribution.textContent = (value * 1.17).toFixed(2);
            total.textContent = `₹ ${result.toFixed(2)}`;

        } else if (value >= 301 && value <= 400) {
            result = ((((value + 200) - value) * 4.71) + (((value + 100) - 300) * 10.29) + 128 + (value * 1.17) + 139 + 354);

            unit.textContent = value;
            electricity.textContent = (100 * 5.16).toFixed(2);
            distribution.textContent = (value * 1.17).toFixed(2);
            total.textContent = `₹ ${result.toFixed(2)}`;

        } else if (value >= 401 && value <= 500) {
            result = ((((value + 200) - value) * 4.71) + (((value + 200) - value) * 10.29) + ((value - 400) * 14.55) + 128 + (value * 1.17) + 139 + 354);

            unit.textContent = value;
            electricity.textContent = (100 * 5.16).toFixed(2);
            distribution.textContent = (value * 1.17).toFixed(2);
            total.textContent = `₹ ${result.toFixed(2)}`;
        }

        resultOutput.textContent = ""; // Clear message after success
    });
});
