# Bable is a JavaScript compiler
#初始化
`npm init`
#安装babel
`npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest`
#创建 src文件夹 创建 `.babelrc` 文件

#安装脚手架
`npm install --global babel-cli`
`npm i babel-cli -g`
#测试是否安装成功
`babel --version`
#创建ES6文件 
`es6.js`
`[1, 2, 3].map(item => items + 1)`
#编译成es5 存放与es5.js
`babel ./src/es6.js -o ./src/es5.js`

