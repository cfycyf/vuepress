module.exports = {
  title: "Happy Taylor's",
  description: 'Control emotion, Control life!',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '综合', 
		  items: [
			  { text: 'serviceConfig2Run', link: '/common/serverConfig/' },
			  { text: 'python', link: '/common/python/' },
			  { text: 'protocol', link: '/common/protocol/' },
			  { text: 'c', link: '/common/c/' },
		  ]
	  },
      { text: 'Linux', link: '/linux/' },
      { text: '随笔', link: '/suibi/' },
    ],
	sidebar:'auto',
	updatePopup: true,
	lastUpdated: 'Last Updated',
	tag: {
		"location": 2,
		"text": "Tag"
	}
  }
}
