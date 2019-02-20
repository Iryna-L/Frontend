var min = 10;
var max = 100;
var step = 10;

for(i = min; i<=max; i+=step) {
    console.log(i);
}

var j = min - step;
while(j<max) {
    console.log(j+=step);
}

var k = min - step;
do {
    console.log(k+=step);
}while(k<max)