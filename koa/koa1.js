var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Koa = require("koa");
const app = new Koa();
const userAgent = require("koa-useragent");
const log = require("./log");
const config = { format: text => `========= ${text}=========` };
app.use(userAgent);
app.use(log(config));
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(require("util").inspect(ctx.userAgent));
}));
app.listen(3000);
