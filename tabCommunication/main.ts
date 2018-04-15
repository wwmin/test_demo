// 使用监听 localstorage 方式通信
window.onstorage = e => console.log(e);
window.addEventListener("storage", e => console.log(e));
localStorage.setItem("a", "aaaa");

function getDom(id) {
  return document.getElementById(id);
}

let checkButton = getDom("checkId");
let setButton = getDom("setId");
checkButton.addEventListener("click", e => {
  let value: string = (<HTMLInputElement>document.getElementById(
    "checkInputId"
  )).value;
  console.log(value);
  let storageValue: string = localStorage.getItem("a");
  (getDom("checkInputId") as HTMLInputElement).value = storageValue;
});
setButton.addEventListener("click", e => {
  let value: string = (getDom("setInputId") as HTMLInputElement).value;
  console.log(value);
  localStorage.setItem("a", value);
});
