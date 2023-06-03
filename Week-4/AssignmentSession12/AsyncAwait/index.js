async function getExchangeRate(currencyCode) {
    try {
      const response = await fetch('https://api.exchangeratesapi.io/latest');
      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error);
      }
  
      const rate = data.rates[currencyCode];
      if (rate === undefined) {
        return null;
      }
  
      return Number(rate.toFixed(4));
    } catch (error) {
      throw new Error('Failed to fetch exchange rates: ' + error.message);
    }
  }
  
  getExchangeRate('USD')
  .then((rate) => {
    console.log(rate); // Output: 1.2133
  })
  .catch((error) => {
    console.error(error);
  });

getExchangeRate('XYZ')
  .then((rate) => {
    console.log(rate); // Output: null
  })
  .catch((error) => {
    console.error(error);
  });
