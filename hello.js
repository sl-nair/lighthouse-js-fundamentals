let sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

 sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");