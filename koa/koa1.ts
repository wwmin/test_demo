const Koa = require("koa");
const app = new Koa();
const userAgent = require("koa-useragent");
const log = require("./log");
const config = { format: text => `========= ${text}=========` };
app.use(userAgent);
app.use(log(config));
app.use(async (ctx, next) => {
  console.log(require("util").inspect(ctx.userAgent));
});
app.listen(3000);
