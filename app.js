const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const middle = require('./middleware');
middle(app);
router(app);
app.listen(3000, ()=>{
    console.log('server is running at port 3000')
})