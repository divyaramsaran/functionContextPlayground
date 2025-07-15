const users = [
  {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  },
  {
    name: "Jane Smith",
    age: 25,
    email: "jane.smith@example.com",
  },
  {
    name: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
  },
];

const chooseFunction = () => {
  console.log("1.apply, \n2.bind \n3.call");
  const input = prompt(`Enter a function to apply`);
  if (isNaN(Number(input))) {
    console.log("Enter valid function number");

    return chooseFunction();
  }
  return input;
};

const applyFunction = (func, context, args) => {
  if (typeof func !== "function") {
    console.error("Provided argument is not a function");
    return;
  }
  return func.apply(context, args);
};

const bindFunction = (func, context, ...args) => {
  if (typeof func !== "function") {
    console.error("Provided argument is not a function");
    return;
  }
  return func.bind(context, ...args);
};

const callFunction = (func, context, ...args) => {
  if (typeof func !== "function") {
    console.error("Provided argument is not a function");
    return;
  }
  return func.call(context, ...args);
}