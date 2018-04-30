// 使用监听 localstorage 方式通信
window.onstorage = e => console.log(e);
window.addEventListener("storage", e => console.log(e));
localStorage.setItem("a", "aaaa");

function getDom(id) {
  return document.getElementById(id);
}

let checkButton = getDom("checkId");
let setButton = getDom("setId");
checkButton.addEventListener("click", e => {
  let value: string = (<HTMLInputElement>document.getElementById(
    "checkInputId"
  )).value;
  console.log(value);
  let storageValue: string = localStorage.getItem("a");
  (getDom("checkInputId") as HTMLInputElement).value = storageValue;
});
setButton.addEventListener("click", e => {
  let value: string = (getDom("setInputId") as HTMLInputElement).value;
  console.log(value);
  localStorage.setItem("a", value);
});

let data: string = "";
let onconnect = function (e) {
  let port = e.ports[0];
  port.onmessage = function (e) {
    if (e.data = 'get') {
      port.postMssage(data)
    } else {
      data = e.data;
    }
  }
}

function throttle(fn, wait) {
  let _fn = fn,
    timer,
    flags = true;
  return function () {
    let args = arguments,
      self = this;
    if (flags) {
      _fn.apply(self, args);
      flags = false;
      return flags;
    }

    // 如果定时器还在,说明上一次还没执行完,不往下执行
    if (timer) return false;
    timer = setTimeout(function () {//延迟执行
      clearTimeout(timer);//清空上次的定时器
      timer = null;
      _fn.apply(self, args);
    }, wait);
  }
}

window.onscroll = throttle(function () {
  console.log("滚动");

}, 200);
