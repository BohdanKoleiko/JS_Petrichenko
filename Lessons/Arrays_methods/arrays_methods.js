'use strict'

// filter
const names = ['Ivan', 'Bohdan', 'Masha', 'Voldemart'];

const shortNames = names.filter(name => name.length <= 5);

console.log(shortNames);
// ----------------------


// map
const answers = ['IvAn', 'BOHDAN', 'diMa', 'vova'];

const filteredAnswers = answers.map(answer => {
   let res = answer[0].toUpperCase() + answer.slice(1).toLowerCase();
   return res
});

console.log(filteredAnswers);
// ---------------------


// every/some
const dates = [4, 'cat', null];
console.log(dates.some(item => typeof item === 'number'));
console.log(dates.every(item => typeof item === 'number'));
// ---------------------


// reduce
const numArr = [4, 5, 1, 3, 2, 6];
const sum = numArr.reduce((prev, current) => prev + current, 0);
console.log(sum);

const strArr = ['apple', 'plum', 'orange', 'banana'];
const uniteStr = strArr.reduce((prev, next) => `${prev}, ${next}`);
console.log(uniteStr);
