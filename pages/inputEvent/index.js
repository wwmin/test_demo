let EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, hander);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  getEvent: function (event) {
    return event ? event : window.event;
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  getCharCode: function (event) {
    if (typeof event.charCode === "number") {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  },
  getClipboardText: function (event) {
    var clipboardData = (event.clipboardData || window.clipboardData);
    return clipboardData.getData("text");
  },
  setClipboardText: function (event, value) {
    if (event.clipboardData) {
      return event.clipboardData.setData("text/plain", value);
    } else if (window.clipboardData) {
      return window.clipboardData.setData("text", value);
    }
  }
}

// 截取精确小数方法
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
Vue.directive('int-num', {
  bind: function (el, binding, vnode) {
    let {
      cb,//回调函数,可在不满足条件的情况下做一下后续提示等操作
      min,//最小值
      max,//最大值
      decimal //精确小数位数
    } = binding.value ? binding.value : {
      cb: Function,
      min: 0,
      max: 100,
      decimal: 0
    };

    if (min > max) {
      throw new Error("最小值不能大于最大值");
      return;
    }

    el.keypressHandler = function (event) {
      // 当小数位数位0时,此时不允许输入'.'点符号
      if (decimal === 0 && event.charCode === 46) {
        event.preventDefault();//组织默认行为
        event.stopPropagation();//停止传递冒泡事件,不会进入input事件中
      }
    }
    el.inputHandler = function (event) {
      if (isNaN(Number(el.value))) {
        el.value = "";
      } else {
        el.value = round(Number(el.value), decimal);
      }
      cb.call(null, Number(el.value));
      if (el.value > max) {
        el.value = max;
      }
    }
    el.blurHandler = function () {
      if (el.value > max) {
        cb.call(this, "最大值是 " + max)
      }
      if (el.value < min) {
        cb.call(this, "最小值是 " + min);
      }
    }
    // 添加事件监听
    el.addEventListener("keypress", el.keypressHandler)
    el.addEventListener('input', el.inputHandler);
    el.addEventListener("blur", el.blurHandler);
  },
  unbind: function (el) {
    // 移除事件监听
    el.removeEventListener("keypress", el.keypressHandler)
    el.removeEventListener('input', el.inputHandler);
    el.removeEventListener("blur", el.blurHandler);
  }
});
new Vue({
  el: "#app",
  data: {
    value: ""
  },
  methods: {
    showAlert(e) {
      console.info(JSON.stringify(e));
    }
  }
})