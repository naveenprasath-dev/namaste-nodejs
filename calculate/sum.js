// // Methods and its variables are protected 
// // we have to export to use it.

var text = "this is a module with exports"
function calculateSum (a,b) {
    console.log( a +b);
}

module.exports = {
    text: text,
    calculateSum: calculateSum,
};

// export function calculateSum (a,b) {
//         console.log( a +b);
// }
