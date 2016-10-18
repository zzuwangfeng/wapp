# wapp
微信小应开发

##微信小应用特别火
![图片](http://g.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=13733f35b4fb43160e12722841cd2d46/5d6034a85edf8db1e50d239a0f23dd54564e7428.jpg)

###程序的入口函数

```
onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log("小程序启动了");
  }

```