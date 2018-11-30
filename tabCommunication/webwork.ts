if (typeof Worker === 'undefined') {
    alert('当前浏览器不支持 web work')
} else {
    // @ts-ignore
    let worker = new SharedWorker('worker.js');
    
}