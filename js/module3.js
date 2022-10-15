
// Задача номер 7

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// Задача номер 10
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];

// const values = [];

// // Change code below this line
// for (const key in apartment ) {
//     keys.push(key)
//     values.push(apartment[key])
// }


// console.log(keys);
// console.log(values);


// // Задача номер 12
// function countProps(object) {
//     let propCount = 0;
//     // console.log(propCount);

//   // Change code below this line
//     const values = Object.values(object);
//     propCount = (values.length);
//   // Change code above this line
//     return propCount;
// }

// countProps({})
// //  повертає 0
// countProps({ name: "Mango", age: 2 })
// //  повертає 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
// //  повертає 3


// // Задача номер 13
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// console.log(values);
// // Change code below this line
// for (const value of Object.values(apartment)) {
//     values.push(value)
    
// }
// const keys = Object.keys(apartment);
// console.log(keys);

// // Задача номер 14
// function countProps(object) {
//   // Change code below this line
//     let propCount = 0;
    

//     // for (const key in object) {
//     // if (object.hasOwnProperty(key)) {
//     //     propCount += 1;
//     // }
//     // }
//     propCount = Object.keys(object)
//     return propCount.length;
//   // Change code above this line
// }

// countProps({})
// console.log(countProps({}));
// //  повертає 0
// countProps({ name: "Mango", age: 2 })
// console.log(countProps({ name: "Mango", age: 2 }));
// //  повертає 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// //  повертає 3

// // Задача номер 16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
    
//   // Change code below this line
//     console.log(Object.values(salaries));
//     for ( const salarie of Object.values(salaries)) {
//         totalSalary += salarie;
//     }
//   // Change code above this line
//     return totalSalary;
// }

// countTotalSalary({})
// console.log(countTotalSalary({}));
// //  повертає 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// //  повертає 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// //  повертає 400

// // Задача номер 17 - 24
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const colorHex of Object.values(colors)) {
//     hexColors.push(...Object.values([colorHex.hex]))
//     rgbColors.push(...Object.values([colorHex.rgb]))

// ДЕСТРУКТУРИЗАЦІЯ В ЦИКЛАХ
// Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.
// for (const {hex, rgb} of Object.values(colors)) {
//     console.log({hex, rgb});
//     hexColors.push(...Object.values([hex]))
//     rgbColors.push(...Object.values([rgb]))
// }
// }
// // Change code below this line
// console.log(hexColors);
// console.log(rgbColors);


// // // Задача номер 18
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (product of products){
//         console.log(product);
//         if (productName === product.name) {
//             return product.price
//         }
        
// }
// return null
    
//   // Change code above this line
// }

// // getProductPrice("Radar")
// console.log(getProductPrice("Radar"));
// //  повертає 1300.
// // getProductPrice("Grip")
// console.log(getProductPrice("Grip"));
// //  повертає 1200.
// // getProductPrice("Scanner")
// console.log(getProductPrice("Scanner")
// );
// //  повертає 2700.
// // getProductPrice("Droid")
// console.log(getProductPrice("Droid")
// );
// //  повертає 400.
// // getProductPrice("Engine")
// console.log(getProductPrice("Engine")
// );
// //  повертає null.

// // // Задача номер 19
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     const arr = [];
//     for (const product of products)
//         if (product[propName]) {
//             arr.push(product[propName]);
//     }
//     return arr
//   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// // повертає["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));
// // повертає[4, 3, 7, 9]
// console.log(getAllPropValues("price"));
// // повертає[1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));
// // повертає[]



// // // // Задача номер 20
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line

//     for (product of products) {
//         console.log(product.name);
//         if (product.name === productName) {
//             return product.price * product.quantity
//         }
//     }
//     return 0;
//   // Change code above this line
    
// }

// console.log(calculateTotalPrice("Blaster"));
// //  повертає 0
// console.log(calculateTotalPrice("Radar"));
// //  повертає 5200
// console.log(calculateTotalPrice("Droid"));
// //  повертає 2800
// console.log(calculateTotalPrice("Grip"));
// //  повертає 10800
// console.log(calculateTotalPrice("Scanner"));
// //  повертає 8100


// // // // Задача номер 26


// Change code below this line
// function calculateMeanTemperature(forecast) {
//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;
//     const {
//         today: { low: todayLow, high: todayHigh, },
//         tomorrow: {low:tomorrowLow, high:tomorrowHigh}
//     } = forecast;

//   // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }) );
// // повертає 28.5
// console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }));
// //  повертає 37



// // // // Задача номер 29
// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);




// // // // // Задача номер 30
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//   // Change code below this line
//     const newTask = { completed, category, priority, ...data };
//     console.log(newTask);
//     return newTask;
//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) );
// // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" }) );
// // повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }) );
// // повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" }) );
// // повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

