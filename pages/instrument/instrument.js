Page({
  data: {
    inputShowed: false,
    inputVal: "",
    grids: [{
      title: "新增仪器",
      icon: ""
    }, {
      title: "报销仪器",
      icon: ""
    }, {
      title: "仪器记录",
      icon: ""
    }],
    instrument: [{
      title: "示波器",
      description: "TDS1002"
    }, {
        title: "数字万用表",
      description: "暂无描述"
    }, {
        title: "数显电砂浴",
        description: "KXS-3.6"
    }, {
        title: "RF功率管",
      description: "暂无描述"
    }, {
      title: "数显电砂浴",
      description: "KXS-3.6"
    }, {
        title: "数电实验箱",
        description: "暂无描述"
    }, {
      title: "蜡烛",
      description: "白色"
    }, {
        title: "与非门",
        description: "CD4011"
    }]
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});