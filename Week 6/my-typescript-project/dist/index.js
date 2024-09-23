"use strict";
var greeting = "Hello, TypeScript!";
console.log(greeting);
document.addEventListener('DOMContentLoaded', function () {
    var h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = greeting;
    }
});
