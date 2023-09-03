// ❓DESCRIPTION:

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// ✅ SOLUTIONS
let createCounter = function(init) {
    let count = init
    function increment(incr) {
        count++
        return count
    }
    function reset(incr) {
        count = init;
        return count;
    }
    function decrement(incr) {
        count--;
        return count;
    }

    return {
        increment,
        decrement,
        reset
    }
};