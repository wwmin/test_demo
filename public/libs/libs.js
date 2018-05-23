/**
 * 装饰着模式
 *
 * @param {any} time
 * @param {any} cb
 * @returns
 */
function after(time, cb) {
  return function () {
    console.log(time);
    if (--time === 0) {
      cb();
    }
  };
}

// eat();
// eat();
// eat();
//单例模式
let single = function (fn) {
  let ret;
  return function () {
    console.log(ret, arguments); // render一次undefined,render二次true,render三次true
    // 所以之后每次都执行ret，就不会再次绑定了
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
// renders();
// renders();
// renders();
// 柯里化雏形
let add = function (x) {
  return function (y) {
    return x + y;
  };
};
// console.log(add(3)(4));
// 通用柯里化函数
function curry(fn) {
  let slice = Array.prototype.slice; //将slice缓存起来
  let args = slice.call(arguments, 1); //这里将arguments转成数组并保存
  return function (n) {
    //将新旧的参数拼接起来
    let newArgs = args.concat(slice.call(arguments));
    return fn.apply(null, newArgs); //返回执行的fn并传递最新的参数
  };
}

// ES6版的柯里化函数
function curryES6(fn) {
  const g = (...allArgs) =>
    allArgs.length >= fn.length
      ? fn(...allArgs)
      : (...args) => g(...allArgs, ...args);
  return g;
}

const addd = curryES6((x, y) => {
  console.log(x + y);
});
addd(1)(23);
// function debounce(func, wait, immediate) {
//   let timeout;
//   return function () {
//     let context = this;
//     console.log(this);
//     let args = arguments;
//     let later = function () {
//       timeout = null;
//       if (!immediate) {
//         func.apply(context, args);
//       }
//     };
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) {
//       func.apply(context, args);
//     }
//   };
// }
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    let callNow = immediate && !timeout;
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }
}