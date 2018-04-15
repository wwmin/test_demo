let Observer = (function() {
  // 防止消息队列暴露而被篡改,故将消息容器作为静态私有变量保存
  var __messages = {};
  return {
    regist: function regist(type, fn) {
      //如果此消息不存在则应该创建一个该消息类型
      if (typeof __messages[type] === "undefined") {
        // 将动作推入到该消息对应的动作执行队列中
        __messages[type] = [fn];
      } else {
        // 将动作方法推入该消息对应的动作执行序列中
        __messages[type].push(fn);
      }
      return this;
    },
    fire: function fire(type, args) {
      // 如果该消息没有被注册,则返回
      if (!__messages[type]) return;
      // 定义消息信息
      var events = {
        type: type,
        args: args || {}
      };
      var i = 0;
      var len = __messages[type].length;
      // 遍历消息动作
      for (; i < len; i++) {
        // 依次执行注册的消息对应的动作序列
        __messages[type][i].call(this, events);
      }
      return this;
    },
    remove: function remove(type, fn) {
      // 如果消息动作队列存在
      if (__messages[type] instanceof Array) {
        // 从最后一个消息动作遍历
        var i = __messages[type].length - 1;
        for (; i >= 0; i--) {
          // 如果存在该动作则在消息动作序列中一处相应动作
          __messages[type][i] === fn && __messages[type].splice(i, 1);
        }
      }
    }
  };
})();

const observerFns = {
  test: "test",
  addUser: "addUser"
};
// 使用
Observer.regist(observerFns.test, e => {
  console.log(e.type, e.args.msg);
})
  .regist(observerFns.test, e => {
    console.info(e.type, e.args.msg);
  })
  .regist(observerFns.addUser, e => {
    var type = e.type;
    var args = e.args;
    console.log(args);
    ``;
  });

Observer.fire(observerFns.test, { msg: "这是我传的参数" });
Observer.fire(observerFns.addUser, { name: "wwm" });

class Student {
  result: string;
  constructor(result: string) {
    this.result = result;
    this.say = this.say.bind(this); // 解决`class`的方法单独使用时`this`指向问题
  }
  say(e) {
    console.log(this.result);
  }
  answer(question: string) {
    // 注册回答问题
    Observer.regist(question, this.say);
  }
  sleep(question: string) {
    console.log(this.result + " " + question + " 已被注销");
    Observer.remove(question, this.say);
  }
}

class Teacher {
  ask(question) {
    console.log("问题是: " + question);
    Observer.fire(question, question);
  }
}
var student1 = new Student("学生1回答问题");
var student2 = new Student("学生2回答问题");
var student3 = new Student("学生3回答问题");

var teacher = new Teacher();

student1.answer("什么是设计模式");
student1.answer("简述观察者模式");
student2.answer("什么是设计模式");
student3.answer("简述观察者模式");

student3.sleep("什么是设计模式");

teacher.ask("什么是设计模式");
teacher.ask("简述观察者模式");

// var Student = function(result) {
//   var that = this;
//   that.result = result;
//   that.say = function() {
//     console.log(that.result);
//   };
// };
// Student.prototype.answer=function(question){
//   Observer.regist(question,this.say)
// }
// Student.prototype.sleep=function(question){
//   Observer.remove(question,this.say)
// }

// var Teacher=function(){};
// Teacher.prototype.ask=function(question){
//   console.log("问题是: "+question);
//   Observer.fire(question,null)
// }

// var student1 = new Student("学生1回答问题");
// var student2 = new Student("学生2回答问题");
// var student3 = new Student("学生3回答问题");

// var teacher = new Teacher();

// student1.answer("什么是设计模式");
// student1.answer("简述观察者模式");
// student2.answer("什么是设计模式");
// student3.answer("简述观察者模式");

// student3.sleep("什么是设计模式");

// teacher.ask("什么是设计模式");
// teacher.ask("简述观察者模式");
