// pages/goodsLists/goodsLists.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    searchContent: '',
    indicatorDots: false,
    autoPlay: true,
    interval: 3000,
    duration: 1000,
    greatPics: [
      "../../images/great1.png",
      "../../images/great2.png",
      "../../images/great3.png",
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goods = getApp().globalData.goods;
    this.setData({
      goods: goods
    })
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

  buy: function (e) {
    var selectedItem = e.currentTarget.dataset.item;
    var id = selectedItem.id;
    var cart = getApp().globalData.cart;

    var isContains = false;
    cart.forEach(element => {
      if (element.item.id == id) {
        element.count++;
        isContains = true;
        console.log(cart);
        return;
      }
    });

    if (!isContains) {
      var newItem = {
        item: selectedItem,
        count: 1
      }
      cart.push(newItem);
      console.log(cart);
    }

    wx.showToast({
      title: '添加成功',
      duration: 300
    })
  },

  addSearchContent: function (e) {
    let keyWord = e.detail.value ? e.detail.value : null;
    that.setData({
      searchContent: keyWord
    })
  },

  search: function () {
    wx.navigateTo({
      url: '../searchPage/searchPage',
      success: function (res) {

      },
      fail: function () {

      },
      complete: function () {

      }
    })
  }
})