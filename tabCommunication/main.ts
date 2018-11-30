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
  let value: string = (<HTMLInputElement>(
    document.getElementById("checkInputId")
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
let onconnect = function(e) {
  let port = e.ports[0];
  port.onmessage = function(e) {
    if ((e.data = "get")) {
      port.postMssage(data);
    } else {
      data = e.data;
    }
  };
};
var throttle = function(action, delay) {
  var last = 0;
  return function() {
    var curr = +new Date();
    if (curr - last > delay) {
      action.apply(this, arguments);
      last = curr;
    }
  };
};

function throttle1(fn, wait) {
  let _fn = fn,
    timer,
    flags = true;
  return function() {
    let args = arguments,
      self = this;
    console.log(args);

    if (flags) {
      _fn.apply(self, args);
      flags = false;
      return flags;
    }

    // 如果定时器还在,说明上一次还没执行完,不往下执行
    if (timer) return false;
    timer = setTimeout(function() {
      //延迟执行
      clearTimeout(timer); //清空上次的定时器
      timer = null;
      _fn.apply(self, args);
    }, wait);
  };
}

window.onscroll = throttle(function() {
  console.log("滚动");
}, 200);

// 惰性函数
let addEvent = function(ele, type, fn) {
  if (window.addEventListener) {
    addEvent = function(ele, type, fn) {
      ele.addEventListener(type, fn, false);
    };
  } else if ((window as any).attachEvent) {
    addEvent = function(ele, type, fn) {
      ele.attachEvent("on" + type, function() {
        fn.call(ele);
      });
    };
  }
  addEvent(ele, type, fn);
};

let only = function(obj, keys) {
  obj = obj || {};
  if ("string" === typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function(ret, key) {
    if (null == obj[key]) return ret;
    ret[key] = obj[key];
    return ret;
  }, {});
};
let o = {
  env: "development",
  proxy: false,
  subdomainOffset: 2
};
var aaa = only(o, ["env", "proxy", "wwmin"]);
