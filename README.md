# 本地启动项目
- clone项目到本地
- 项目跟目录下打开命令行执行 npm install（务必要执行成功）
- 打开http.js 将端口改成8081（具体端口号不限制，自己喜好为准，注意此处不要将http上传至git中）
- 命令行执行 node http
- 新开命令行执行webpack --watch
- 浏览器访问localhost:8081即可

-------------------

#更新服务器
- 命令行执行ssh work@www.maddog.tech   密码123
- 进入服务器后cd website
- 执行git pull
- 执行重启命令sudo supervisorctl restart http

---------------------

#制作PPT
- 制作网址（[https://slides.com](https://slides.com)）,自行注册账号登录，有免费的。
- 登录成功后点击create a deck
- 编辑结束后，左侧导航栏里有share选项
- 点击share 默认就是link，勾选上fullScreen
- 复制地址到项目的相应配置区域即可

----------------------

#竖着增加页面
- data.js中pageData对象中有imgList数组代表着整个网站所有的图片元素
- imgList是个二维数组，其中每个元素都是一个数组，也代表了一个子页面
- 所以想增加竖着的页面，只需要增加一个imgList元素(数组格式的元素)
- 页面中展示位置按着数组顺序加载，所以想加在哪里就加在哪里

---------------------

#横着增加轮播页面
- 继上面增加了子元素（数组）之后，每个数组中的每个对象就是每个子轮播页面
- 子轮播页面必须有的属性是styleObject其中的background-image,路径就是图片的路径，其他属性可效仿其他元素的样式
