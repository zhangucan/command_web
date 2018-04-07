export default{
  fallBarConfig: {
    request: {
      url: 'http://127.0.0.1:3000/findCodeDataByCode',
      data: {
        dataType: 20
      }
    },
    title: '测试',
    period: 6
  },
  SITE_ROOT_URL: 'http://127.0.0.1:8080/command_web',
  layout: {
    currentLayout: 'HolyGrail',
    HolyGrail: {
      left: [
      {'fallBarCard': 1},
      {'fallBarCard': 1},
      {'fallBarCard': 1}
      ],
      right: [
      {'fallBarCard': 2},
      {'fallBarCard': 1}
      ]
    }
  }
}
