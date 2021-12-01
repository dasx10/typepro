require('./Array');

const arr = [1, 2, 3, 4, 5, 6, 7];
console.dir({
    after      : arr.after(-3),
    before     : arr.before(-3),
    between    : arr.between(2, 5),
    mapRIght   : arr.mapRight((e, i) => e + i),
    count      : arr.count((e) => e % 2 === 0),
    countRight : arr.countRight((e) => e % 2 === 0)
})

arr.forEachRight((e) => console.log(e))


const arr2 = [2, 3, 3, 4];
console.log({ arr2 });
arr2.clear().push(2);
console.log({ arr2 });

console.log(arr.averageIndex);