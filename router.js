const router = require('koa-router')()
module.exports = (app)=>{
    router.get('/',app.controller.home.index)
    router.get('/home',app.controller.home.home)
    router.get('/user/:id/:name',app.controller.home.homeParams)
    // 增加响应表单请求的路由
    router.get('/user',app.controller.home.login)
    router.post('/user/register',app.controller.home.register)
    router.get('/test',app.controller.home.test)
    app.use(router.routes())
}