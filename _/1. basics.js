// let num1: number;
// const num2: number = 2;
// let str: string = '';
// const sumNum = (num1: number | undefined, num2?: number) => {
// 	num1;
// 	if (typeof num1 !== 'number' || typeof num2 !== 'number')
// 		throw new Error('Not a number');
// 	num1 + num2;
// };
// num1 = 21;
// // sumNum(num1, num2)
// sumNum(undefined, num2);
var arr = [];
arr.push(21);
arr.push([21, 22, 23, 24]);
arr.push('ssdadsf');
arr.push(true);
var obj = {
    a: 2
};
obj.b = '09';
var arr2 = [];
var handleArr = function (arr) {
    //
    return arr;
};
handleArr([1, 2, 3, 4]);
handleArr(['filip', 'john', 'tom']);
var func = function (value) {
    if (typeof value === 'number')
        value *= 2;
};
var generateError = function (message, code) {
    // throw { message, code };
    if (typeof message === 'string')
        return message;
    if (typeof message === 'number')
        return message;
    if (typeof message === 'boolean')
        return message;
    // message *= 2;
};
var arr4 = [2];
var p1 = {
    name: '',
    age: 0,
    kind: 'business'
};
var Component = function (props, test) {
    return 0;
};
var Component2 = function (props) {
    // props.
    return 0;
};
