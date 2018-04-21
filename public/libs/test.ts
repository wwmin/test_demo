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
eat();
eat();
eat();
