class Datasource {
  constructor(url) {
    this.url = url;
  }
  getPrices() {
    const pricesPromise = fetch(this.url);
    pricesPromise
      .then(function (response) {
        response.json().then(function (data) {
          console.log(data.data.prices, "data fetched");
          let prices = data.data.prices;
          return prices;
        });
      })
      .catch(function (error) {
        console.log("Fetch Error:", error);
      });
  }
}

// class Datasource {
//   constructor(url) {
//     this.url = url;
//   }

//   getPrices() {
//     const mid = function () {
//       return (this.buy + this.sell) / 200;
//     };
//     const quote = function () {
//       return this.pair.slice(-3); // Extract last 3 characters in the string and return extracted part
//     };
//     // Datasource.getPrices() return Promise
//     return new Promise(async (resolve, reject) => {
//       try {
//         const res = await fetch(this.url);
//         const data = await res.json();
//         const prices = data.data.prices;
//         // console.log(prices);
//         resolve(
//           prices.map((price) => ({
//             ...price, //Spread notation for creating new object with all properties of existing object(price) i.e. resolve prices with each price having methods mid() and quote() while keeping same object properties
//             mid: mid.bind(price), //Add methods mid and quote
//             quote: quote.bind(price), //'price' is the value to be passed as the 'this' parameter to the target function when the function is called
//           }))
//         );
//       } catch (err) {
//         reject(err); // Returns Promise object that is rejected with given reason
//       }
//     });
//   }
// }

//* Test Below
const ds = new Datasource("https://static.ngnrs.io/test/prices");

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.err(error);
  });
