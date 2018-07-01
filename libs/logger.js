function logger(...value) {
  value.forEach(p => {
    if (Object.prototype.toString.call(p) !== "[object String]") {
      value = JSON.stringify(p);
    }
    let div = document.createElement("div");
    div.innerText = p;
    document.body.appendChild(div);
  })
}