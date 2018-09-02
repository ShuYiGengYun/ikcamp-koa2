module.exports = {
    index: async (ctx,next) => {
        await ctx.render('home/index',{title:'iKcamp欢迎您'})
    },
    home: async (ctx,next) => {
        await  ctx.render('common/test')
    },
    homeParams: async (ctx,next) =>{
        let request = ctx.params
        let id = request.id
        let name = request.name
        ctx.send({
            status: 'success',
            data: 'hello ikcmap'
        })
    },
    login: async(ctx,next) => {
        await ctx.render('home/login',{
            btnName:'This is user-router'
        })
    },
    register: async (ctx,next) =>{
       let params = ctx.request.body
       let name = params.name
       let password = params.password
       let {app} = ctx
       let res = await app.service.home.register(name,password)
       if (res.status === '-1') {
           await ctx.render('home/login',res.data)
       } else {
           ctx.state.title = '个人中心'
           await ctx.render('home/success',res.data)
       }
    },
    test: async (ctx, next) => {
        let params = ctx.request.body
        let {app} = ctx;
        await ctx.send(params)
    }
}