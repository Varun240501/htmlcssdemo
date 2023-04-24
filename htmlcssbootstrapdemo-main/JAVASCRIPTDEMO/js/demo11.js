// Immediately invokate function expression
//IIFEs

var greetfunc = function (name) {
  console.log("hello " + name);
};
greetfunc("John");

var greeting = (function (name) {
  console.log("hello " + name);
})("smith");
console.log(greeting);
