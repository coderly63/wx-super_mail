// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindGetUerProfile(e) {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        const { userInfo } = res
        wx.setStorageSync('userInfo', userInfo);
      }
    })
  },

  onLoad: function (options) {

  },

})