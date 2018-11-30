class Eventer {
    constructor() {
        this.map = null;
        this.map = {};
    }
    add(name, fn) {
        if (this.map[name]) {
            this.map[name].push(fn);
            return;
        }
        this.map[name] = [fn];
        return this;
    }
    emit(name, ...args) {
        this.map[name].forEach(fn => {
            fn(...args);
        });
        return this;
    }
}
let e = new Eventer();
e.add("hello", (err, name) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(name);
}).emit('hello', '发生了错误').emit('hello', null, "hello node.js");
