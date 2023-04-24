var person = {};
console.log(person);

person = { firstname: "Navi", lastname: "H N" };
console.log(person);

var Navi = {
  firstname: "Naveen",
  lastname: "H N",
  address: {
    street: "XYZ",
    state: "KA",
  },
};

console.log(Navi);

function greet(person) {
  console.log("Hello " + person.firstname);
}

greet(Navi);
greet({
  firstname: "Suman",
  lastname: "H N",
});

greet("3");
