// pages/myCart/myCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart: [],
    totalPrice: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCartData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getCartData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getCartData: function () {
    this.setData({
      cart: getApp().globalData.cart
    })
    var total = 0;
    var cart = this.data.cart;
    cart.forEach(item => {
      var price = item.item.price;
      var count = item.count;
      total = total + price * count;
    });
    this.setData({
      totalPrice: total
    })
  },

  removeItem: function (e) {
    this.caculateCount(e, false);
  },

  addItem: function (e) {
    this.caculateCount(e, true);
  },

  caculateCount: function (e, isAdd) {
    var selectedItem = e.currentTarget.dataset.item;
    var cart = getApp().globalData.cart;
    cart.forEach(item => {
      if (item.item.id == selectedItem.item.id) {
        if (isAdd) {
          item.count++;
        } else {
          item.count--;
          if (item.count == 0) {
            var index = cart.indexOf(item);
            cart.splice(index);
          }
        }
      }
    })
    this.getCartData();
  },

  navigateToDetails: function () {
    wx.navigateTo({
      url: '../goodsDetail/goodsDetail',
      success: function (res) {

      },
      fail: function () {

      },
      complete: function () {

      }
    })
  },
  pay: function () {
    wx.requestPayment({})
  }
})