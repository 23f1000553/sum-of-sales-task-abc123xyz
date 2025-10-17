fetch('data.csv')
  .then(response => response.text())
  .then(data => {
    const salesData = data.split('\n').slice(1).map(row => row.split(',')[1]);
    const totalSales = salesData.reduce((total, sale) => total + parseFloat(sale), 0);
    document.getElementById('total-sales').textContent = totalSales.toFixed(2);
  });