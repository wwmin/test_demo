let Observer = (function () {
    var __messages = {};
    return {
        regist: function regist(type, fn) {
            if (typeof __messages[type] === "undefined") {
                __messages[type] = [fn];
            }
            else {
                __messages[type].push(fn);
            }
            return this;
        },
        fire: function fire(type, args) {
            if (!__messages[type])
                return;
            var events = {
                type: type,
                args: args || {}
            };
            var i = 0;
            var len = __messages[type].length;
            for (; i < len; i++) {
                __messages[type][i].call(this, events);
            }
            return this;
        },
        remove: function remove(type, fn) {
            if (__messages[type] instanceof Array) {
                var i = __messages[type].length - 1;
                for (; i >= 0; i--) {
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
    constructor(result) {
        this.result = result;
        this.say = this.say.bind(this);
    }
    say(e) {
        console.log(this.result);
    }
    answer(question) {
        Observer.regist(question, this.say);
    }
    sleep(question) {
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
