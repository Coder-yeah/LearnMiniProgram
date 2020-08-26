// 注册页面：绑定数据、生命周期回顾、事件处理函数等
Page({
// 2.初始化数据
  data:{
    name:'Coder',
    age:18,
    students:[
      {id:110,name:'Kobe',age:30},
      {id:111,name:'James',age:31},
      {id:112,name:'Curry',age:32}
    ],
    counter:0
  },
  // 3.监听wxml中相关的一些事件
  HandleBtnClick(){
    this.setData({
      name:'CoderCoder'
    })
  },
  HandleBtnAdd(){
    // console.log('加1按钮发生了点击哦')
    //1.错误做法：界面数据不会随内部数据刷新
    // this.data.counter+=1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  HandleBtnSub(){
    // console.log('减1按钮发生了点击哦')
    this.setData({
      counter:this.data.counter-1
    })
  },
  handleUserInfo(event){
    console.log(event)
  },
  handleViewClick(){
    console.log('哈哈哈被点击了')
  },

  // 4.监听其他事件
  // 监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  },

  // 1.监听页面的生命周期函数
  // 页面被加载出来
  onLoad(){
    console.log("onLoad")
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success(res){
        console.log(res)
      }
    })
  },
  // 页面显示出来时
  onShow(){
    console.log("onShow")
  },
  // 页面初次渲染完成时，已经完成了向逻辑层的交互，呈现出来时是active状态
  onReady(){
    console.log("onReady")
  },
  // 当页面隐藏起来时
  onHide(){
    console.log("onHide")
  },
  onUnload(){
    console.log("onUnload")
  }
})