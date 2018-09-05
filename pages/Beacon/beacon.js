let pm = new Promise((resolve, reject) => {
  resolve(1)
});

pm.then(res => {
  throw new Error('eeeee')
  res;
  return res + 1;
}).then(res => {
  res;
  return res + 1;
  }).catch(e => {
    e;
    return e;
  }).then(res => {
    res;
})