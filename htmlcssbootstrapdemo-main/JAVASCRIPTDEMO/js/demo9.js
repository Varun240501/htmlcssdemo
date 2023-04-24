function greet() {
  console.log("hi");
}

greet.language = "english";
console.log(greet);
console.log(greet.language);

function log(a) {
  console.log(a);
}
var b = 3;
log(b);
log(3);
log("Hello");
log({ greeting: "hi" });
log(function () {
  console.log("hi");
});
