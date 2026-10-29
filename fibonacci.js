function fibonacci(num) {
    // F(n) = F(n-1) + F(n-2)
    if (num === 0) {
        return 0
    }
    if (num === 1) {
        return 1
    }
    // console.log(fibonacci(num - 1) + fibonacci(num -2))
    return fibonacci(num - 1) + fibonacci(num -2);

}

module.exports = fibonacci;



// fibonacci(0)
// fibonacci(2)
// fibonacci(3); // 2
// fibonacci(5)
// fibonacci(7); // 13
// fibonacci(8)
// fibonacci(11)


console.log(fibonacci(0))// 0
console.log(fibonacci(2))// 1
console.log(fibonacci(3)) // 2
console.log(fibonacci(5))// 5
console.log(fibonacci(7)) // 13
console.log(fibonacci(8)) // 21
console.log(fibonacci(11)) // 89

