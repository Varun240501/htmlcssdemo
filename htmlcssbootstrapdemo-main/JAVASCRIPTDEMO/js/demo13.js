// application of closure

function sayhilater() {
  var greeting = "Hi";
  setTimeout(function () {
    console.log(greeting);
  }, 3000);
}

sayhilater();
