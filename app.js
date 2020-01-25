document.getElementById('loading').style.display = 'none';

document.getElementById('loan-form').addEventListener('submit', (e) => {
    e.preventDefault();

    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    setTimeout(() => calculateResults(), 2000);
});

function calculateResults() {

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
    } else {
        showError('Please, check your numbers!');
    }
};

function showError(error) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.classList.add('alert', 'alert-danger');
    errorDiv.textContent = error;

    card.insertBefore(errorDiv, heading);

    setTimeout(() => errorDiv.remove(), 3000);

};























// const calculate = document.querySelector('#calculate');
// const amount = document.querySelector('#amount');
// const interest = document.querySelector('#interest');
// const years = document.querySelector('#years');
// const monthlyPaymentField = document.querySelector('#monthly-payment');
// const totalPaymentField = document.querySelector('#total-payment');
// const totalInterestField = document.querySelector('#total-interest');
// const loader = document.querySelector('#loading');
// const results = document.querySelector('#results');

// loader.style.display = 'none';

// function loadEventListeners() {
//     calculate.addEventListener('click', calculateLoan);
// };

// loadEventListeners();

// function calculateLoan(e) {
//     e.preventDefault();
//     // check if fields are not empty
//     if(!amount.value || !interest.value || !years.value) {
//         alert('Please fill required fields!');
//         return false;
//     }

//     results.style.display = 'none';
//     loader.style.display = 'block';

//     function calc() {

//         const amountVal = parseFloat(amount.value);
//         const interestVal = parseFloat(interest.value);
//         const yearsVal = parseFloat(years.value);

//         const totalInterest = (amountVal * interestVal) / 100;

//         const totalPayment = (amountVal + totalInterest);

//         const monthlyPayment = totalPayment / (yearsVal * 12);

//         monthlyPaymentField.value = monthlyPayment;
//         totalPaymentField.value = totalPayment;
//         totalInterestField.value = totalInterest;

//         results.style.display = 'block';
//         loader.style.display = 'none';
//     };

//     setTimeout(() => calc(), 1000);

// };