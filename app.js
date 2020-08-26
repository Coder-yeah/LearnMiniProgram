App({
  // 生命周期函数：后台存活2个小时，2个小时之内打开直接加载onShow
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  // 异步调用
  onLaunch: function () {
    console.log('小程序初始化完成了:onLaunch')
    // wx.request({
    //   url: '',
    // })
    // 异步调用
    wx.getUserInfo({
      // 1.获取用户的信息，并且在获取到用户信息之后，将用户信息传递给服务器
      // 但是，该接口即将废弃
      // 数据拿到之后，再进行回调
      success:function(res){
        console.log(res)
      }
    })
    // ,
    // // 设置定时器，制造错误
    // setTimeout(function(){
    //   const err = new Error();
    //   throw err
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // 1.判断小程序的进入场景，运用参数options，onLaunch对象也同样适用，不过需要自己填入参数options；
    console.log(options)
    // 对各个场景进行逻辑的填写
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
    console.log('界面显示出来了:onShow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏了:onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序中发生了错误:onError')
  },
})
