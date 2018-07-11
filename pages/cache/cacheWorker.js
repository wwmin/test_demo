addEventListener("message", e => {
  let data = e.data;
  switch (data.method) {
    case "start":
      //calc
      var result = [data.data.func].call(data.data.scope, data.dta.arg);
      postMessage("jisuan")
      break;

    default:
      break;
  }
}, false)



/**
 * JavaScript Momoization
 * @param {string} func name of function / method
 * @param {object} [obj] mothed's object or scope correction object
 *
 * MIT / BSD license
 */
function Memoize(func, obj) {
  var obj = obj || window,
    func = obj[func],
    cache = {};
  return function () {
    var key = Array.prototype.join.call(arguments, '_');
    if (!(key in cache))
      cache[key] = func.apply(obj, arguments);
    console.log(cache);

    return cache[key];
  }
}

var fib = {
  fib: function (n) {
    if (n == 0 || n == 1)
      return 1;
    return this.fib(n - 1) + this.fib(n - 2);
  },
  fib_memo: function (n) {
    if (n == 0 || n == 1)
      return 1;
    return this.fib_memo(n - 1) + this.fib_memo(n - 2);
  }
}

fib.fib_memo = Memoize('fib_memo', fib);