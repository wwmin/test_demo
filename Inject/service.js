let a = "1";
function after(time, cb) {
    return function () {
        if (--time === 0) {
            cb();
        }
    };
}
let eat = after(3, function () {
    console.log("吃饱了");
});
eat();
eat();
eat();
