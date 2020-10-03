const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const sslify = require('koa-ssligy')
const fs = require('fs')
const app = new Koa()

const port = 443
const staticPath = './static'
const options = {
  key: fs.readFileSync('/root/.acme.sh/meizizi.me/meizizi.me.key'),
  cert: fs.readFileSync('/root/.acme.sh/meizizi.me/meizizi.me.cer'),
}
app.use(sslify())
app.use(static(
    path.join( __dirname,  staticPath)
))
app.use( async ( ctx ) => {
    ctx.body = 'hello world'
})

// app.listen(port, () => {
//     console.log('server is starting at port ' + port)
// })
https.createServer(options, app.callback()).listen(port, (err) => {
  if (err) {
    console.log('服务启动出错', err);
  }
})