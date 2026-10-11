exports.add = (a,b) => a+b;
exports.subtract = (a,b) => a-b;
exports.multiply = (a,b) => a*b;
exports.divide = (a,b) => {
    if(b === 0) {
        throw new Error("Denominator cannot be zero");
    }
    return a / b;
};

// module.exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// }