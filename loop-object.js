const bottle ={
    color: 'yellow', 
    hold: 'water',
    price: 50, 
    iscleaned: true
};/* 
for (const i = 0; i < 10; i++) {}
for (const man of mans){}
for (const prop of bottle){}
*/
for( var prop in bottle){
    console.log(prop);
}