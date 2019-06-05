# Vue

## vue cli 3.0 创建项目
```
打开命令行 vue ui 

( 以图形化界面创建和管理项目 )

配置一般选择：vue-router、dart-scss、babel、eslint
```

## npm run serve 默认打开浏览器
```
package.json 找到下面一行代码

"serve": "vue-cli-service serve"

修改为

"serve": "vue-cli-service serve --open"
```

## 点击 a 标签拨打电话
```
<a href="'tel:' + phone">{{phone}}</a>
```

## 判断手机类型 IOS & Android
```
const u = navigator.userAgent;

// 判断 Android
if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) 

// 判断 IOS
if (u.indexOf('iPhone') > -1)
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
