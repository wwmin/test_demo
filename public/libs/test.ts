/**
 * 装饰着模式
 *
 * @param {any} time
 * @param {any} cb
 * @returns
 */
function after(time, cb) {
  return function() {
    console.log(time);

    if (--time == 0) {
      cb();
    }
  };
}
var eat = after(3, function() {
  console.log("吃饱了");
});
// eat();
// eat();
// eat();

//单例模式
var single = function(fn) {
  let ret;
  return function() {
    console.log(ret, arguments); // render一次undefined,render二次true,render三次true
    // 所以之后每次都执行ret，就不会再次绑定了

    return ret || (ret = fn.apply(this, arguments));
  };
};
let bindEvent = single(function() {
  console.log("log it.");
  return true;
});

let renders = function() {
  console.log("渲染");
  bindEvent();
};

renders();
renders();
renders();
