
Component({
  data: {
    selected:0,
    "borderStyle": "black",
    "selectedColor": "#0099CC",
    "list": [{
      "pagePath": "/pages/home/index/index",
      "text": "首页",
      "iconPath": "./icons/home.png",
      "selectedIconPath": "./icons/homes.png"
    },
    {
      "pagePath": "/pages/home/vide/video",
      "text": "视频",
      "iconPath": "./icons/shipin.png",
      "selectedIconPath": "./icons/shipin.png"
    },
    {
      "pagePath": "/pages/home/my/my",
      "text": "我的",
      "iconPath": "./icons/my.png",
      "selectedIconPath": "./icons/wode.png"
    }
    ]
  
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setData({
        selected:data.index
      })
      wx.switchTab({url})
    }
  }
})