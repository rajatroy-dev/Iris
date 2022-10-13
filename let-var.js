console.log(a);
var a = 1;
console.log(a);

// Hoisting doesn't work
// console.log(b);
// let b = 2;
// console.log(b);

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}