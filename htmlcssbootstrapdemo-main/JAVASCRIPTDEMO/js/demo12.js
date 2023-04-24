function greet(greeting) {
  return function (name) {
    console.log(greeting + " " + name);
  };
}

var sayhello = greet("hello");
sayhello("Anu");
