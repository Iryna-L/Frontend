let min = 10;
let max = 100;
let step = 10;
let i = min;

for(let i = min; i<=max; i+=step) {
    console.log(i);
}

i = min - step;
while(i<max) {
    console.log(i+=step);
}

i = min - step;
do {
    console.log(i+=step);
}while(i<max)


