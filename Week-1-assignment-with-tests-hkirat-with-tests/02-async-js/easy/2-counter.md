## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function counter() {
for (let i = 0; i < 10; i++) {
setTimeout(() => {
console.log(i)
}, 1000 \* i)
}
}

counter()

(Hint: setTimeout)
