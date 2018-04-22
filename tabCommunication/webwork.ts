if (typeof Worker === 'undefined') {
    alert('当前浏览器不支持webwork')
} else {
    let worker = new SharedWorker('worker.js');
    
}