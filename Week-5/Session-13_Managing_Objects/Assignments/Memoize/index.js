function createTemperatureCache() {
    const cache = {};
  
    return function getTemperatureForCity(city) {
      if (cache.hasOwnProperty(city)) {
        return cache[city];
      }
  
      if (temperatureData.hasOwnProperty(city)) {
        const temperature = temperatureData[city];
        cache[city] = temperature;
        return temperature;
      }
  
      return null; // City not found in temperatureData
    };
  }
  
  const getTemperatureForCity = createTemperatureCache();
  

  const temperature1 = getTemperatureForCity('New York');
console.log(temperature1); // 20

const temperature2 = getTemperatureForCity('New York');
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity('London');
console.log(temperature3); // 18

const temperature4 = getTemperatureForCity('London');
console.log(temperature4); // 18 (retrieved from cache)
