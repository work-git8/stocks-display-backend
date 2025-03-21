const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

let sortedStocks = [
  {
    id: 1,
    name: 'reliance industries',
    price: 2500,
    growth: 3.5,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 2,
    name: 'hdfc bank',
    price: 1800,
    growth: 4.2,
    industry: 'finance',
    exchange: 'bse',
  },
  {
    id: 3,
    name: 'icici bank',
    price: 1600,
    growth: 5.1,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 4,
    name: 'tata consultancy services',
    price: 3200,
    growth: 2.9,
    industry: 'finance',
    exchange: 'bse',
    price: 1900,
  },
  {
    id: 5,
    name: 'infosys',
    price: 2900,
    growth: 3.8,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 6,
    name: "dr. reddy's laboratories",
    price: 2100,
    growth: 4.7,
    industry: 'pharma',
    exchange: 'bse',
  },
  {
    id: 7,
    name: 'sun pharmaceutical',
    price: 2300,
    growth: 3.2,
    industry: 'pharma',
    exchange: 'nse',
  },
  {
    id: 8,
    name: 'cipla',
    growth: 2.6,
    price: 2100,
    exchange: 'bse',
    industry: 'pharma',
  },
  {
    id: 9,
    name: 'ntpc',
    price: 1200,
    growth: 4.1,
    industry: 'power',
    exchange: 'nse',
  },
  {
    id: 10,
    name: 'power grid corporation',
    price: 1500,
    growth: 3.4,
    industry: 'power',
    exchange: 'bse',
  },
  {
    id: 11,
    name: 'adani power',
    price: 2200,
    growth: 5.3,
    industry: 'power',
    exchange: 'nse',
  },
  {
    id: 12,
    name: 'lupin',
    price: 2000,
    growth: 4.5,
    industry: 'pharma',
    exchange: 'bse',
  },
  {
    id: 13,
    name: 'axis bank',
    price: 1750,
    growth: 2.8,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 14,
    name: 'state bank of india',
    price: 1450,
    growth: 3.6,
    industry: 'finance',
    exchange: 'bse',
  },
  {
    id: 15,
    name: 'bajaj finance',
    price: 2650,
    growth: -2.9,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 16,
    name: "dr. reddy's laboratories",
    price: 1950,
    growth: 4.3,
    industry: 'pharma',
    exchange: 'bse',
  },
  {
    id: 17,
    name: 'biocon',
    price: 1850,
    growth: 3.9,
    industry: 'pharma',
    exchange: 'nse',
  },
  {
    id: 18,
    name: 'torrent power',
    price: 1600,
    growth: 2.4,
    industry: 'power',
    exchange: 'bse',
  },
  {
    id: 19,
    name: 'tata power',
    price: 1750,
    growth: 4.0,
    industry: 'power',
    exchange: 'nse',
  },
  {
    id: 20,
    name: 'jsw energy',
    price: 1450,
    growth: 3.1,
    industry: 'power',
    exchange: 'bse',
  },
];

//Endpoint 1 : Define an endpoint /stocks/sort/pricing using the get method.Define a variable pricing to take in the sorting condition if the price is high to low or else low to high.Send the sorted stocks as a JSON response.//
const sortByPricing = (stocks, pricing) => {
  if (pricing === 'high-to-low') {
    return stocks.sort((a, b) => b.price - a.price);
  } else {
    return stocks.sort((a, b) => a.price - b.price);
  }
};
app.get('/stocks/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  let sortedStocks1 = sortedStocks.slice();
  res.json({ stocks: sortByPricing(sortedStocks1, pricing) });
});

//Endpoint 2 : Define an endpoint /stocks/sort/growth using the get method.Define a variable growth to create a condition to sort the stocks based on their growth rate (high-to-low or low-to-high).Send the filtered stocks as a JSON response.//
const sortByGrowth = (stocks, growth) => {
  if (pricing === 'high-to-low') {
    return stocks.sort((a, b) => b.price - a.price);
  } else {
    return stocks.sort((a, b) => a.price - b.price);
  }
};
app.get('/stocks/sort/growth', (req, res) => {
  let growth = req.query.growth;
  let sortedStocks2 = sortedStocks.slice();
  res.json({ stocks: sortByGrowth(sortedStocks2, growth) });
});

//Endpoint 3 : Define an endpoint /stocks/filter/exchange using the get method.Implement a function filterByExchange that returns the stocks of the selected exchange.While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive.Use the .toLowerCase() string function.Send the filtered stocks as a JSON response.//
function filterByExchange(stock, exchange) {
  return stock.exchange.toLowerCase() === exchange.toLowerCase();
}
app.get('/stocks/filter/exchange', (req, res) => {
  let exchange = req.query.exchange;
  let sortedStocks3 = sortedStocks.slice();
  res.json({
    stocks: sortedStocks3.filter((s) => filterByExchange(s, exchange)),
  });
});

//Endpoint 4 : Define an endpoint /stocks/filter/industry using the get method.Implement a function filterByIndustry that returns the stocks if it meets the selected industry criteria.While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive.Use the .toLowerCase() string function.Send the filtered stocks as a JSON response.//
function filterByIndustry(stock, industry) {
  return stock.industry.toLowerCase() === industry.toLowerCase();
}
app.get('/stocks/filter/industry', (req, res) => {
  let industry = req.query.industry;
  let sortedStocks4 = sortedStocks.slice();
  res.json({
    stocks: sortedStocks4.filter((s) => filterByIndustry(s, industry)),
  });
});

//Endpoint 5 : Define an endpoint /stocks using the get method.Send all the stocks as a JSON response.
app.get('/stocks', (req, res) => {
  res.json({ stocks: sortedStocks });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
