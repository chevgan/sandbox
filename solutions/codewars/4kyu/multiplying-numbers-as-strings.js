// ❓DESCRIPTION:

// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!
// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

// ✅ SOLUTIONS
function multiply(a, b) {
    const num1 = a.length;
    const num2 = b.length;
    const result = new Array(num1 + num2).fill(0);

    for (let i = num1 - 1; i >= 0; i--) {
        for (let j = num2 - 1; j >= 0; j--) {
            const product = Number(a[i]) * Number(b[j]);
            const sum = product + result[i + j + 1];

            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    while (result[0] === 0) {
        result.shift();
    }

    return result.length === 0 ? "0" : result.join("");
}

// Примеры использования
console.log(multiply("2", "3"));               // "6"
console.log(multiply("123", "456"));           // "56088"
console.log(multiply("123456789", "987654321")); // "121932631112635269"