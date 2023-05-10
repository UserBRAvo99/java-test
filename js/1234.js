// function likes(names) {
//     if (names.length === 1) return `${names[0]} likes this`;
//     if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
//     if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     if (names.length > 3)
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     return 'no one likes this';
// }
// console.log(likes([]));
// // , 'no one likes this');
// console.log(likes(['Peter']));
// // , 'Peter likes this');
// console.log(likes(['Jacob', 'Alex']));
// // , 'Jacob and Alex like this');
// console.log(likes(['Max', 'John', 'Mark']));
// // , 'Max, John and Mark like this');
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
// // , 'Alex, Jacob and 2 others like this');

//
//
//
function moveZeros(arr) {
    const newArr = [];
    const zeroArr = [];
    arr.forEach(e => {
        if (e === 0) zeroArr.push(e);
        if (e !== 0) newArr.push(e);
    });

    return [...newArr, ...zeroArr];
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
