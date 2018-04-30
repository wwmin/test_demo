function after(time, cb) {
    return function () {
        console.log(time);
        if (--time == 0) {
            cb();
        }
    };
}
var eat = after(3, function () {
    console.log("吃饱了");
});
var single = function (fn) {
    let ret;
    return function () {
        console.log(ret, arguments);
        return ret || (ret = fn.apply(this, arguments));
    };
};
let bindEvent = single(function () {
    console.log("log it.");
    return true;
});
let renders = function () {
    console.log("渲染");
    bindEvent();
};
let add = function (x) {
    return function (y) {
        return x + y;
    };
};
function curry(fn) {
    let slice = Array.prototype.slice;
    let args = slice.call(arguments, 1);
    return function (n) {
        let newArgs = args.concat(slice.call(arguments));
        return fn.apply(null, newArgs);
    };
}
function curryES6(fn) {
    const g = (...allArgs) => allArgs.length >= fn.length
        ? fn(...allArgs)
        : (...args) => g(...allArgs, ...args);
    return g;
}
const addd = curryES6((x, y) => {
    console.log(x + y);
});
addd(1)(23);
