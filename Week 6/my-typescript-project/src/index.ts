const greeting: string = "Hello, TypeScript!";
console.log(greeting);

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.textContent = greeting;
    }
});
