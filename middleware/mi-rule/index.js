const Path = require('path');
const fs = require('fs');
module.exports = (opts)=> {
    let {app,rules = []} = opts;
    if (!app) {
        throw new Error('the app param is neccessary !');
    }
//   提取出app实例对象中的属性名;
    const appKeys = Object.keys(app)
    rules.forEach((item) => {
        let {path,name} = item;
        if (appKeys.includes(name)) {
            throw new Error(`the name of ${name} already exits`);
        }
        let content = {};
    //    读取指定文件夹下所有的文件;
        fs.readdirSync(path).forEach((filename) => {
            let extname = Path.extname(filename);
            if (extname === '.js') {
                let name = Path.basename(filename,extname);
            //    读取文件的内容并赋值绑定;
                content[name] = require(Path.join(path,filename))
            }
        })
        app[name] = content
    })
}