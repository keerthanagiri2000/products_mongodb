//double
const double=(num) => num*2;
const n=process.argv[2];

//running comment -node double.js
console.log(process.argv); //command line arguments
console.log(double(n));