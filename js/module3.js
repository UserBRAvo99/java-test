
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

// // Задача номер 17
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
// }
// // Change code below this line
// console.log(hexColors);
// console.log(rgbColors);