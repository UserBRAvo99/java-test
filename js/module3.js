
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




// // // // // Задача номер 31
// Change code below this line
// function add(...args) {
//     let total = 0;
//     for (const arr of args) {
//         total += arr;
//     }
//     return total
//   // Change code above this line
// }
// console.log();
// console.log(add(15, 27));
// //  повертає 42
// console.log(add(12, 4, 11, 48));
// //  повертає 75
// console.log(add(32, 6, 13, 19, 8));
// //  повертає 78
// console.log(add(74, 11, 62, 46, 12, 36));
// //  повертає 241


// // // // // Задача номер 32
// Change code below this line
// function addOverNum(number, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (number < arg) {
//             total += arg
//         }
//     }

//     return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// //  повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// //  повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// //  повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// //  повертає 218

// // // // // // Задача номер 33
// // Change code below this line
// function findMatches(firstArgs, ...args) {
//   const matches = []; // Don't change this line
    
//     for (const arg of args)
//     for(const argf of firstArgs)
//         if (argf === arg) {
//             matches.push(argf)
//         }
//   // Change code above this line
//     return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// // повертає[1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// // повертає[17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// // повертає[24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
// // повертає[]


// // // // // // // Задача номер 34

// const bookShelf = {
//   // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//     return "Returning all books";
//     },
//     addBook(bookName) {
//     return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//     return `Deleting book ${bookName}`
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//     },
//   // Change code above this line
// };
// console.log();
// console.log(bookShelf.getBooks() );
// // повертає рядок "Returning all books"

// console.log(bookShelf.addBook("Haze") );
// // повертає рядок "Adding book Haze"

// console.log(bookShelf.removeBook("Red sunset") );
// // повертає рядок "Deleting book Red

// console.log(bookShelf.updateBook("Sands of dune", "Dune") );
// // повертає рядок "Updating book Sands of dune to Dune"


// // // // // // // // Задача номер 35 Повторно розібратися!!!
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const indexBook = this.books.indexOf(oldName)
//         this.books.splice(indexBook, 1, newName)
//     // Change code above this line
//     },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
//     // , значення властивості books - це масив["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
//     // , значення властивості books - це масив["Dune", "Haze", "The guardian of dreams"]


// // // // // // // // Задача номер 39
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//     // Change code below this line
//         console.log(potionName);
// const indexPotion = this.potions.indexOf(potionName)
//     console.log(indexPotion)
//     this.potions.splice(indexPotion, 1)


//     // Change code above this line
//     },
// };
// atTheOldToad.removePotion("Dragon breath")
//     // , у властивості potions буде масив["Speed potion", Stone skin"]
// atTheOldToad.removePotion("Speed potion")
//     // , у властивості potions буде масив["Stone skin"]




// // // // // // // // Задача номер 41
const atTheOldToad = {
    potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
    ],
  // Change code below this line
    getPotions() {
    return this.potions;
    },

    addPotion(newPotion) {
        for (const key of this.potions) {
            if (key.name === newPotion.name) 
                    return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }

        // console.log(newPotion);
    //     if (this.potions.includes(newPotion)) {
    //     return `Error! Potion ${newPotion} is already in your inventory!`;
    // }
        return this.potions.push(newPotion);
    },


    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            const element = this.potions[i];
            if (element.name !== potionName) {
                return this.potions.splice(i, 1)
            }
        }
        
    // const potionIndex = this.potions.indexOf(potionName);

    // if (potionIndex === -1) {
    //     return `Potion ${potionName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1);
        
        
        return `Potion ${potionName} is not in inventory!`;
    },
    updatePotionName(oldName, newName) {

        for (const potion of this.potions) {
    if (potion.name === oldName) {
        potion.name = newName;
    };
    }
    },
  // Change code above this line
};


// console.log(...atTheOldToad.potions);
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));