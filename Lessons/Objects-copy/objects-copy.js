const firstObj = {
   a: 1,
   b: 2,
   c: {
      ab: 1,
      bc: 2,
   }
}

// Examples below show only a shallow copy
// Object copies with the for ... in loop
const copyFirstObj = {};

for (let value in firstObj) {
   copyFirstObj[value] = firstObj[value];
}

copyFirstObj.c.ab = 12; // Значення зміниться в обох об`єктах
console.log(copyFirstObj);
console.log(firstObj);


// Object copies with an Object.asign({}, objLink) - method
const asignCopyFirstObj = Object.assign({}, firstObj);
console.log(asignCopyFirstObj);

asignCopyFirstObj.c.ab = 12; // Значення зміниться в обох об`єктах
console.log(copyFirstObj);
console.log(firstObj);

// Spreed operator uses for copy
const spreadCopyFirstObj = { ...firstObj };
console.log(spreadCopyFirstObj);


// It`s a deep copy of an object
// Object copies with JSON.parse(JSON.stringify())
const jsonCopyFirstObj = JSON.parse(JSON.stringify(firstObj));

jsonCopyFirstObj.c.ab = 22
console.log(jsonCopyFirstObj);
console.log(firstObj);

