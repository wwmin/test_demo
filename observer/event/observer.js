function create(fn) {
    let ret = false;
    return ({ next, complete, error }) => {
        function nextFn(...args) {
            if (ret) {
                return;
            }
            next(...args);
        }
        function completeFn(...args) {
            complete(...args);
            ret = true;
        }
        function errorFn(...args) {
            error(...args);
        }
        fn({ next: nextFn, complete: completeFn, error: errorFn });
        return () => (ret = true);
    };
}
let observer = create(observer => {
    setTimeout(() => {
        observer.next(1);
    }, 1000);
    observer.next(2);
    observer.complete(3);
});
const subject = {
    next: value => {
        console.log(value);
    },
    complete: console.log,
    error: console.log
};
var unsubscribe = observer(subject);
const getName = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("nodejs");
    }, 1000);
});
getName.then(res => {
    console.log(res);
});
function _func(s) {
    return Promise.resolve(s);
}
function _log(res) {
    console.log(res);
    return res;
}
_func("a")
    .then(_log)
    .then(_log)
    .then(_log)
    .then(_log)
    .then(_log)
    .then(_log)
    .then(_log)
    .then(_log);
module.exports = {};
