addEventListener("message",(e)=>{
  let data=e.data;
  switch(data.cmd){
      case 'start':
      postMessage("work started: " + data.msg);
      break;
      case 'end':
      postMessage("worker stoped: "+data.msg);
      break;
      default:
      postMessage("Unknown commond: "+data.msg);
  }
},false);