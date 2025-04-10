// STATEMENTS IN JS

// if ... else
if (50 == 50) {
   console.log("Equal!");
}

if (50 == 40) {
   console.log("Equal!");
} else {
   console.log("Not equal!");
}

// ternary operator
// condition ? val1 : val2
50 < 40 ? console.log("Less") : console.log("Equal or more");

// switch operetor
const action = "say_hello";
switch (action) {
   case "say_hello": {
      const message = "hello";
      console.log(message);
      break;
   }
   case "say_hi": {
      const message = "hi";
      console.log(message);
      break;
   }
   default: {
      console.log("Empty action received.");
   }
}
