// Temperature converter script (convert.js)

// Conversion functions
function convertCtoF(celsius) {
   return (celsius * 9 / 5) + 32;
 }
 
 function convertFtoC(fahrenheit) {
   return (fahrenheit - 32) * 5 / 9;
 }
 
 // DOM loaded event handler
 function domLoaded() {
   const cInput = document.getElementById('cInput');
   const fInput = document.getElementById('fInput');
   const convertButton = document.getElementById('convertButton');
   const errorMessage = document.getElementById('errorMessage');
   const weatherImage = document.getElementById('weatherImage');
 
   // Function to clear the opposing text field
   function clearOpposingField(inputField) {
     if (inputField === cInput) {
       fInput.value = '';
     } else if (inputField === fInput) {
       cInput.value = '';
     }
   }
 
   // Input event handlers for text fields
   cInput.addEventListener('input', () => clearOpposingField(cInput));
   fInput.addEventListener('input', () => clearOpposingField(fInput));
 
   // Convert button click event handler
   convertButton.addEventListener('click', () => {
     const celsius = parseFloat(cInput.value);
     const fahrenheit = parseFloat(fInput.value);
 
     // Clear error message
     errorMessage.innerHTML = '';
 
     // Convert Celsius to Fahrenheit
     if (!isNaN(celsius)) {
       const convertedFahrenheit = convertCtoF(celsius);
       fInput.value = convertedFahrenheit;
       // Change image based on Fahrenheit temperature
       if (convertedFahrenheit < 32) {
         weatherImage.src = 'cold.png';
         weatherImage.alt = 'Cold';
       } else if (convertedFahrenheit < 50) {
         weatherImage.src = 'cool.png';
         weatherImage.alt = 'Cool';
       } else {
         weatherImage.src = 'warm.png';
         weatherImage.alt = 'Warm';
       }
     }
 
     // Convert Fahrenheit to Celsius
     if (!isNaN(fahrenheit)) {
       const convertedCelsius = convertFtoC(fahrenheit);
       cInput.value = convertedCelsius;
       // Change image based on Fahrenheit temperature
       if (fahrenheit < 32) {
         weatherImage.src = 'cold.png';
         weatherImage.alt = 'Cold';
       } else if (fahrenheit < 50) {
         weatherImage.src = 'cool.png';
         weatherImage.alt = 'Cool';
       } else {
         weatherImage.src = 'warm.png';
         weatherImage.alt = 'Warm';
       }
     }
 
     // Display error message for invalid input
     if (isNaN(celsius) && isNaN(fahrenheit)) {
       errorMessage.innerHTML = 'Invalid input';
     }
   });
 }
 
 // Register domLoaded() as the event handler for DOMContentLoaded
 document.addEventListener('DOMContentLoaded', domLoaded);
 