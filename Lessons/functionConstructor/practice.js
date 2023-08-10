'use strict'

function User(name, id) {
   this.name = name;
   this.id = id;
   this.human = true;
   this.hello = function () {
      console.log(`Hello ${this.name}`);
   }
}

User.prototype.exit = function () {
   console.log(`A User ${this.name} exited from a system`);
}

const bohdan = new User('Bohdan', 28);
const liza = new User('Liza', 26);

bohdan.hello();
liza.hello();

bohdan.exit();
liza.exit();

console.log(bohdan);
console.log(liza);
