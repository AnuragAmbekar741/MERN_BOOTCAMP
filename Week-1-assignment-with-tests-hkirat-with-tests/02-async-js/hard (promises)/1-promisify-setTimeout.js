/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    function resolve() {
        setTimeout(() => {
            console.log('RESOLVED!')
        }, n)
    }
    return new Promise(resolve)
}


console.log(wait(5000))