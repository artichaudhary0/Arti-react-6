// let prodPrice = [131, 23424, 234234];

// // push : insert value at last
// prodPrice.push(354);
// console.log(prodPrice);

// // push : remove value at last
// prodPrice.pop();
// console.log(prodPrice);

// // shift : remove the first element
// prodPrice.shift();
// console.log(prodPrice);

// // unshift : insert first position
// prodPrice.unshift('')
// console.log(prodPrice);

// let prodPrice = [131, 23424, 23, 42, 34]; // 0 1 2
// // splice :
// // let result1 = prodPrice.splice(2, 2);
// // console.log(result1);

// // slice :
// let result2 = prodPrice.slice(2, 4);
// console.log(result2);

// let prodPrice = [1,2];

// let result = prodPrice.forEach((e) => e*10);
// console.log(result);

// let result = prodPrice.map((e) => e * 10);
// console.log(result);

// let value = [131, 23424, 23, 4, 2, 3, 4];
// let serachValue = 10

// let result = findValue.find((e)=> e === serachValue);

// console.log(result);

// let value = [131, 23424, 23, 4, 2, 3, 4];
// let result = value.filter((e) => e % 2 == 0);
// console.log(result);

let array1 = [131, 23424, 23, 4, 2, 3, 4];

let array2 = [...array1];

array2[3] = 10;

console.log(array2);
console.log(array1);
