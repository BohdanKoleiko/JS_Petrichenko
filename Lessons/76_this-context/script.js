"use strict";

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
   console.log(this);
});

function myFn() {
   console.log(this);
}
myFn();
