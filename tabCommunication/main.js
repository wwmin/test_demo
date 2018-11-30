window.onstorage = e => console.log(e);
window.addEventListener("storage", e => console.log(e));
localStorage.setItem("a", "aaaa");
function getDom(id) {
    return document.getElementById(id);
}
let checkButton = getDom("checkId");
let setButton = getDom("setId");
checkButton.addEventListener("click", e => {
    let value = (document.getElementById("checkInputId")).value;
    console.log(value);
    let storageValue = localStorage.getItem("a");
    getDom("checkInputId").value = storageValue;
});
setButton.addEventListener("click", e => {
    let value = getDom("setInputId").value;
    console.log(value);
    localStorage.setItem("a", value);
});
let data = "";
let onconnect = function (e) {
    let port = e.ports[0];
    port.onmessage = function (e) {
        if ((e.data = "get")) {
            port.postMssage(data);
        }
        else {
            data = e.data;
        }
    };
};
var throttle = function (action, delay) {
    var last = 0;
    return function () {
        var curr = +new Date();
        if (curr - last > delay) {
            action.apply(this, arguments);
            last = curr;
        }
    };
};
function throttle1(fn, wait) {
    let _fn = fn, timer, flags = true;
    return function () {
        let args = arguments, self = this;
        console.log(args);
        if (flags) {
            _fn.apply(self, args);
            flags = false;
            return flags;
        }
        if (timer)
            return false;
        timer = setTimeout(function () {
            clearTimeout(timer);
            timer = null;
            _fn.apply(self, args);
        }, wait);
    };
}
window.onscroll = throttle(function () {
    console.log("滚动");
}, 200);
let addEvent = function (ele, type, fn) {
    if (window.addEventListener) {
        addEvent = function (ele, type, fn) {
            ele.addEventListener(type, fn, false);
        };
    }
    else if (window.attachEvent) {
        addEvent = function (ele, type, fn) {
            ele.attachEvent("on" + type, function () {
                fn.call(ele);
            });
        };
    }
    addEvent(ele, type, fn);
};
let only = function (obj, keys) {
    obj = obj || {};
    if ("string" === typeof keys)
        keys = keys.split(/ +/);
    return keys.reduce(function (ret, key) {
        if (null == obj[key])
            return ret;
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
