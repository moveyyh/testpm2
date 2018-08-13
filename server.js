const Koa = require('koa');
const path = require('path');
const body = require('koa-parse-json');
const PORT = 3030;

const app = new Koa();
app.use(require('koa-static')(path.resolve(__dirname, './static')));

app.use(async ctx => {
  let data;
  ctx.req.on('data', function (chuck) {
    data = chuck.toString();
    console.log(data);
    ctx.body.acceptData =  data;
  });
  ctx.req.on('end', () => {
    console.log('accept data end');
  })
  ctx.body = {
    headers: ctx.headers,
    method: ctx.method,
  }
});


app.listen(PORT, () => {
  console.log(`listrening port ${PORT}`)
});
