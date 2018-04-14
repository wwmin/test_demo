var targetObj={
  age:1
}

function observer(oldval,newval){
  console.log('name属性的值从 '+oldval+'改变为 '+newval);
}

Object.defineProperty(targetObj,'name',{
  enumerable:true,
  configurable:true,
  get:function(){
    return name;
  },
  set:function(val){
    //调用处理函数
    observer(name,val);
    name=val;
  }
});

targetObj.name="www";
targetObj.name="mmm";
console.info('targetObj:',targetObj);
