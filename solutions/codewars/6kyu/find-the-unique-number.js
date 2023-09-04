// ❓DESCRIPTION:

// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// ✅ SOLUTIONS

function findUniq(arr) {
    const unique = arr.filter((value, index, self) => self.indexOf(value) === self.lastIndexOf(value));
    return unique[0];
}

console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 0, 1, 0 ]))
console.log(findUniq([ 0, 0, 1 ]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
