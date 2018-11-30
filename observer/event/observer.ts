function create(
  fn: (param: IObserverParam) => void
): (param: IObserverParam) => (param: IObserverParam) => void {
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

interface IObserverParam {
  next: Function;
  complete: Function;
  error: Function;
}
let observer = create(observer => {
  setTimeout(() => {
    observer.next(1);
  }, 1000);
  observer.next(2);
  observer.complete(3);
});
const subject: IObserverParam = {
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

function _func(s: string) {
  return Promise.resolve(s);
}
function _log(res) {
  console.log(res);
  return res;
}
_func("a")
  .then(_log) // a
  .then(_log) // a
  .then(_log) // a
  .then(_log) // a
  .then(_log) // a
  .then(_log) // a
  .then(_log) // a
  .then(_log); // a

module.exports = {};
