console.log(this);

// function statement
function x() {
  console.log(this);
  this.newvariable = "hello";
}
x();
console.log(newvariable);

// function expression
var b = function () {
  console.log(this);
};
b();

var c = {
  name: "this is new object",
  log: function () {
    console.log(this);
  },
};
c.log();
