const bottle = { color: 'yellow', hold: 'water', price: 50, iscleaned: true };
const key = Object.keys(bottle);
// console.log(key);

const value = Object.values(bottle);
// console.log(value);
const pairs = Object.entries(bottle);
// console.log(pairs);
Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 40;
delete bottle.iscleaned; 
console.log(bottle);