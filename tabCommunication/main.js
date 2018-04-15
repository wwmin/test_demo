// 使用监听 localstorage 方式通信
window.onstorage = e => console.log(e);
window.addEventListener("storage", e => console.log(e));
