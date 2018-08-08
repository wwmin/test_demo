/**
 * 网页加水印 canvas 方式
 *
 * @export
 * @param {*} [{
 *   container = document.body,
 *   width = '400px',
 *   height = '300px',
 *   textAlign = 'center',
 *   textBaseline = 'middle',
 *   font = "20px Microsoft Yahei",
 *   fillStyle = 'rgba(230, 230, 230, 0.8)',
 *   content = '保密水印',
 *   rotate = '10',
 *   zIndex = -1000
 * }={}]
 * @returns
 */
export function __waterDocument({
  container = document.body,
  width = '200px',
  height = '150px',
  textAlign = 'center',
  textBaseline = 'middle',
  font = "20px Microsoft Yahei",
  fillStyle = 'rgba(230, 230, 230, 0.8)',
  content = '保密水印',
  rotate = '10',
  zIndex = -1000
} = {}) {
  const args = arguments[0];
  const canvas = document.createElement('canvas');
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  const ctx = canvas.getContext("2d");
  if (ctx === null) {
    console.error("this browser is not support canvas.");
    return;
  }
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font;
  ctx.fillStyle = fillStyle;
  ctx.rotate(Math.PI / 180 * rotate);
  ctx.fillText(content, parseFloat(width) / 2, parseFloat(height) / 2);
  const base64Url = canvas.toDataURL();
  const __wm = document.querySelector('.__wm');
  const watermarkDiv = __wm || document.createElement("div");
  const styleStr = `
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:${zIndex};
      pointer-events:none;
      background-repeat:repeat;
      background-image:url('${base64Url}')`;
  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.classList.add('__wm');
  if (!__wm) {
    container.style.position = 'relative';
    container.insertBefore(watermarkDiv, container.firstChild);
  }
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  if (MutationObserver) {
    let mo = new MutationObserver(function () {
      const __wm = document.querySelector('.__wm');
      // 只在__wm元素变动才重新调用 __canvasWM
      if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm) {
        // 避免一直触发
        mo.disconnect();
        mo = null;
        __waterDocument(JSON.parse(JSON.stringify(args)));
      }
    });
    mo.observe(container, {
      attributes: true,
      subtree: true,
      childList: true
    })
  }
}


/**
 *网页加水印 svg 方式
 *
 * @export
 * @param {*} [{
 *   container = document.body,
 *   content = '请勿外传',
 *   width = '300px',
 *   height = '200px',
 *   opacity = '0.2',
 *   fontSize = '20px',
 *   zIndex = 1000
 * }={}]
 */
export function __waterDocumentSvg({
  container = document.body,
  content = '请勿外传',
  width = '300px',
  height = '200px',
  opacity = '0.2',
  fontSize = '20px',
  zIndex = 1000
} = {}) {
  const args = arguments[0];
  const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${width}">
<text x="50%" y="50%" dy="12px"
text-anchor="middle"
stroke="#000000"
stroke-width="1"
stroke-opacity="${opacity}"
fill="none"
transform="rotate(-45, 120 120)"
style="font-size: ${fontSize};">
${content}
</text>
</svg>`;
  const base64Url = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svgStr)))}`;
  const __wm = document.querySelector('.__wm');
  const watermarkDiv = __wm || document.createElement("div");
  const styleStr = `
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${zIndex};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${base64Url}')`;
  watermarkDiv.setAttribute('style', styleStr);
  watermarkDiv.classList.add('__wm');
  if (!__wm) {
    container.style.position = 'relative';
    container.insertBefore(watermarkDiv, container.firstChild);
  }
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  if (MutationObserver) {
    let mo = new MutationObserver(function () {
      const __wm = document.querySelector('.__wm');
      // 只在__wm元素变动才重新调用 __canvasWM
      if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm) {
        // 避免一直触发
        mo.disconnect();
        mo = null;
        __waterDocumentSvg(JSON.parse(JSON.stringify(args)));
      }
    });
    mo.observe(container, {
      attributes: true,
      subtree: true,
      childList: true
    })
  }
}

/**
 *图片加水印
 *
 * @export
 * @param {*} [{
 *   url = '',
 *   textAlign = 'center',
 *   textBaseline = 'middle',
 *   font = "20px Microsoft Yahei",
 *   fillStyle = 'rgba(184, 184, 184, 0.8)',
 *   content = '请勿外传',
 *   cb = null,
 *   textX = 100,
 *   textY = 30
 * }={}]
 */
export function __picWM({
  url = '',
  textAlign = 'center',
  textBaseline = 'middle',
  font = "20px Microsoft Yahei",
  fillStyle = 'rgba(184, 184, 184, 0.8)',
  content = '请勿外传',
  cb = null,
  textX = 100,
  textY = 30
} = {}) {
  const img = new Image();
  img.src = url;
  img.crossOrigin = 'anonymous';
  img.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.font = font;
    ctx.fillStyle = fillStyle;
    ctx.fillText(content, img.width - textX, img.height - textY);
    const base64Url = canvas.toDataURL();
    cb && cb(base64Url);
  }
}

//通过NodeJS生成水印
// 1.  安装gm以及相关环境，详情看[gm文档](https://github.com/aheckmann/gm)
// 2.  `ctx.type = 'image/png';`设置响应为图片类型
// 3.  生成图片过程是异步的，所以需要包装一层Promise，这样才能为通过 async/await 方式为 ctx.body 赋值

// ```
// const fs = require('fs')
// const gm = require('gm');
// const imageMagick = gm.subClass({
//   imageMagick: true
// });


// const router = require('koa-router')();

// router.get('/wm', async (ctx, next) => {
//   const {
//     text
//   } = ctx.query;

//   ctx.type = 'image/png';
//   ctx.status = 200;
//   ctx.body = await ((() => {
//     return new Promise((resolve, reject) => {
//       imageMagick(200, 100, "rgba(255,255,255,0)")
//         .fontSize(40)
//         .drawText(10, 50, text)
//         .write(require('path').join(__dirname, `./${text}.png`), function (err) {
//           if (err) {
//             reject(err);
//           } else {
//             resolve(fs.readFileSync(require('path').join(__dirname, `./${text}.png`)))
//           }
//         });
//     })
//   })());
// });
// ```