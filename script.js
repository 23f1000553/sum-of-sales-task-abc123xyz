'use strict';

const form = document.getElementById('data-form');
const totalSalesElement = document.getElementById('total-sales');
let totalSales = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const product = document.getElementById('product-input').value;
  const sales = parseFloat(document.getElementById('sales-input').value);
  const city = document.getElementById('city-input').value;

  totalSales += sales;
  totalSalesElement.textContent = totalSales.toFixed(2);

  const newData = `${product},${sales},${city}\n`;

  fetch('data.csv', {
    method: 'POST',
    body: newData,
    headers: {
      'Content-Type': 'text/csv'
    }
  });
});