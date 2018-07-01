async function Fetch({url, data, method, config}) {
  method = method.toUpperCase();
  //window fetch方法
  if (window.fetch) {
    let requestConfig = {
      credentials: 'include',
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: "cors",
      cache: "force-cache"
    };

    function assignConfig(targetConfig, sourceConfig) {
      if (sourceConfig) {
        Object.keys(sourceConfig).forEach(key => {
          if (sourceConfig[key]) {
            if (typeof sourceConfig[key] !== "object") {
              if (sourceConfig[key]) Object.assign(targetConfig, sourceConfig)
            } else {
              assignConfig(targetConfig[key], sourceConfig[key])
            }
          }
        })
      }
    }

    assignConfig(requestConfig, config);
    if (method === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      })
    }
    try {
      var response = await fetch(url, requestConfig);
      var responseJson = await response.json();
    } catch (error) {
      throw new Error(error)
    }
    return responseJson
  } else {
    let requestObj;
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest();
    } else {
      requestObj = new ActiveXObject;
    }
    let sendData = '';
    if (method === 'POST') {
      sendData = JSON.stringify(data);
    }
    requestObj.open(method, url, true);
    if (config.headers) Object.keys(config.headers).forEach(key => {
      if (config.headers[key]) requestObj.setRequestHeader(key, config.headers[key])
    });
    requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    requestObj.send(sendData);
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4) {
        if (requestObj.status === 200) {
          let obj = requestObj.response;
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj);
          }
          return obj
        } else {
          throw new Error(requestObj)
        }
      }
    }
  }
}