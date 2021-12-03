require('./Array');

const arr = [1, 2, 3, 4, 5, 6, 7];

// console.dir({
//     after        : arr.after(-3),
//     before       : arr.before(-3),
//     between      : arr.between(2, 2),
//     outside      : arr.outside(2, 5),
//     mapRight     : arr.mapRight((e, i) => e + i),
//     count        : arr.count((e) => e % 2 === 0),
//     countRight   : arr.countRight((e) => e % 2 === 0),

//     head         : arr.head,
//     tail         : arr.tail,
//     random       : arr.random,

//     lastIndex    : arr.lastIndex,
//     averageIndex : arr.averageIndex,

//     uneven       : arr.uneven,
//     even         : arr.even
// })

// arr.inject([2, 3, 2, 2], [4, 4]);
// console.log(arr)
// arr.inject([2, 3, 2, 2], [4, 4]);
// console.log(arr)

(() => {
    arr.replaceRight((el, i) => {
        console.log(el, i)
        return el * 10;
    });
    console.log(arr);

    arr.rewrite('word');
    console.log(arr);
})()