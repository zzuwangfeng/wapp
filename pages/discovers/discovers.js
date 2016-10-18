Page({
  data:{
    // text:"这是一个页面"
    text:"微信小应用",
    msg:['canvas','混合app开发'],
    json:{"name":"小张","sex":"男"},
    array:[{txt:"sb"}]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("‘发现’页面加载");
  },
  onReady:function(){
    // 页面渲染完成
    console.log("‘发现’页面渲染完成");
  },
  onShow:function(){
    // 页面显示
    console.log("‘发现’页面显示");
  },
  onHide:function(){
    // 页面隐藏
    console.log("‘发现’页面隐藏");
  },
  onUnload:function(){
    // 页面关闭
    console.log("‘发现’页面卸载");
  },
  glabelData:'发现页面',
  viewTap:function(){
    console.log("知道了，别点了!");
  },
  btnclick:function(){

  },
  changeValue:function(){
    console.log(this.data.text);
    this.setData({
      text:"蓝瘦香菇"
    })
  },
  getValue:function(){

    console.log(this.data.text);
    console.log(this.data.msg[0]);

  }

});

