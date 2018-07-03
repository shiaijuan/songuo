# songuoUI
### SG-UI库文档

#### 一、关于SG-UI
SG-UI是一个轻量级框架，轻量级框架只是 CSS 框架，不涉及 JS 部分，主要用于网页的布局。之所以写编写这个框架，是因为工作中重复的东西太多，通过框架可以很好的将这些零散组件整合到一起。另一方面，自己写个小项目，总结旧知识、学习新知识是一件乐事。

#### 二、模块划分
##### 栅格
任何框架必须建立在栅格的基础上才能灵活布局
##### 媒体
##### 按钮
##### 排版
##### 表单
##### 表格
##### 面板
##### 媒体组件
##### 辅助工具
辅助类是一系列类的组合，比如字号大小、颜色值、padding、margin 以及左右浮动等
##### 主题
编写主题只需改变组件的颜色

#### 三、命名规则
层次、结构、规律、组件修饰：比如按钮及面板都存在多个语境（颜色、大小等）
加前缀sg-、有意义button、简写btn、多个定语的修饰组成一句话，如<button class="ui primary basic button">Primary</button>

> sg-button  实心按钮
sg-button-outline  空心按钮
sg-button-primary  颜色
sg-button-mini  尺寸
添加网格组件 —— 满宽按钮
sg-button-group 按钮组
vertical 垂直按钮组
https://nzbin.github.io/snack/#buttons
带有下拉菜单的按钮  http://www.getuikit.net/docs/button.html



#### 四、技术栈
##### 1.Webpack
##### 2.ES6
##### 3.HTML
##### 4.CSS
##### 5.Sass/Less，编写框架大致会用到的 npm 如下：
    autoprefixer
    node-sass
    npm-run-all
    rimraf
    Onchange
    css预处理器中的循环
##### 6.组件封装：面向对象、原型、闭包
##### 7.Jquery

#### 五、构建工具
##### 1.Grunt
##### 2.Ruby
##### 3.Sass
##### 4.Compass

