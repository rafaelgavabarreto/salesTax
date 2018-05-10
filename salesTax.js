var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
var results = {};
///var finalResults = []; // [company,totalSalesPartial,totalTaxesPartial]

for(i=0;i < companySalesData.length;i++) { //loopy for the name in companysalesdata
  var totalSalesPartial = 0;
  var totalTaxesPartial = 0;

  if(!(results[companySalesData[i].name])) {
    results[companySalesData[i].name] = {};
    results[companySalesData[i].name]['totalSales'] = 0;
    results[companySalesData[i].name]['totalTaxes'] = 0;
  }
  for(j=0; j < companySalesData[i].sales.length;j++) {
    totalSalesPartial += companySalesData[i].sales[j];
    totalTaxesPartial = totalSalesPartial * salesTaxRates[companySalesData[i].province];

  }
  for(k=0;k < Object.keys(results).length;k++) {
    if(Object.keys(results)[k] == companySalesData[i].name){ // name of company exist
      results[companySalesData[k].name]['totalSales'] = Object.values(results[companySalesData[k].name])[0] + totalSalesPartial;
      results[companySalesData[k].name]['totalTaxes'] = Object.values(results[companySalesData[k].name])[1] + totalTaxesPartial;
    }
  }
}
console.log(results);
}

calculateSalesTax();

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
