
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
