//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      goods:[
        {
          id:"1",
          name:"iPhone 11 Pro",
          description:"************",
          price: 8699,
          images:["../../images/iPhone11Pro.png","../../images/iPhone11Pro.png"]
        },
        {
          id:"2",
          name:"iPhone 11",
          description:"************",
          price: 5499,
          images:["../../images/iPhone11.png","../../images/iPhone11.png"]
        },
        {
          id:"3",
          name:"iPhone SE",
          description:"************",
          price: 3299,
          images:["../../images/iPhoneSE.png","../../images/iPhoneSE.png"]
        },
        {
          id:"4",
          name:"iPhone XR",
          description:"************",
          price: 4799,
          images:["../../images/iPhoneXR.png","../../images/iPhoneXR.png"]
        },
        {
          id:"5",
          name:"Apple Watch Series 6",
          description:"************",
          price: 3199,
          images:["../../images/AppleWatchSeries6.png","../../images/AppleWatchSeries6.png"]
        },
        {
          id:"6",
          name:"Apple Watch SE",
          description:"***",
          price: 2199,
          images:["../../images/AppleWatchSE.png","../../images/AppleWatchSE.png"]
        },
        {
          id:"7",
          name:"Apple Watch Series 3",
          description:"***",
          price: 1499,
          images:["../../images/AppleWatchSE.png","../../images/AppleWatchSE.png"]
        }
      ],
      cart:[]
    }
  }
})
