/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    var start = new Date().getTime();
    while (new Date().getTime() - start < seconds) {
        // console.log('do nothing...')
    }
}


printData()

