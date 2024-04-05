const apiKey = '699b1e630e9fb7faa6db4484';

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${sourceCurrency}/${targetCurrency}`);
        if (!response.ok) {
            throw new Error('Failed to access exchange rate');
        }
        const exchangeData = await response.json();
        const exchangeRate = exchangeData.conversion_rate;
        const convertedAmount = amount * exchangeRate;

        document.getElementById('result').textContent = `${amount} ${sourceCurrency} is converted into ${convertedAmount.toFixed(2)} ${targetCurrency}`;
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = 'Failed to perform the conversion';
    }
    
    return false;
}

document.getElementById('currencyForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    convertCurrency(); 
});