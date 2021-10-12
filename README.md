1.项目初始化

# 全局安装
npm install -g create-react-app
# 构建一个my-app的项目
npx create-react-app my-app 

2. 配置路径别名

# 暴露webpack
npm run eject
# 修改 webpack.config
```js
 alias: {
    ...
    // 文件路径别名
    '@': path.resolve(__dirname, '../src'),
    '@view': path.resolve(__dirname, '../src/view'),
},
```


3. Sass配置  默认就是支持Sass的
npm install node-sass -D 
    找到module下的rules，然后找到最后一个配置，exclude 里增加 /\.scss$/

4. 配置rem
```js
<script>
  ! function (e) {
      function t(a) {
          if (i[a]) return i[a].exports;
          var n = i[a] = {
              exports: {},
              id: a,
              loaded: !1
          };
          return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
      }
      var i = {};
      return t.m = e, t.c = i, t.p = "", t(0)
  }([function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = window;
      t["default"] = i.flex = function (normal, e, t) {
          var a = e || 100,
              n = t || 1,
              r = i.document,
              o = navigator.userAgent,
              d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
              l = o.match(/U3\/((\d+|\.){5,})/i),
              c = l && parseInt(l[1].split(".").join(""), 10) >= 80,
              p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
              s = i.devicePixelRatio || 1;
          p || d && d[1] > 534 || c || (s = 1);
          var u = normal ? 1 : 1 / s,
              m = r.querySelector('meta[name="viewport"]');
          m || (m = r.createElement("meta"), m.setAttribute("name", "viewport"), r.head.appendChild(
                  m)), m.setAttribute("content",
                  "width=device-width,user-scalable=no,initial-scale=" + u + ",maximum-scale=" + u +
                  ",minimum-scale=" + u), r.documentElement.style.fontSize = normal ? "50px" : a / 2 *
              s * n + "px"
      }, e.exports = t["default"]
  }]);
  flex(false, 20, 1);
</script>
```

5. 样式格式化
npm install normalize.css 
index.js 中 import 'normalize.css'

6. 路由设置，安装 react-router-dom

