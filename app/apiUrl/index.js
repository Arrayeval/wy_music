const baseConfig = 'http://www.mptab.cn:3001/'
const ApiUrls = {
  // 推荐歌单列表  http://www.mptab.cn:3001/personalized
  recommendList: baseConfig + 'personalized',
  // 推荐歌单概要 http://www.mptab.cn:3001/related/playlist?id=1
  recommendIntro: baseConfig + 'related/playlist?id=1',
  // 推荐新音乐 http://www.mptab.cn:3001/personalized/newsong
  recommendNewMusic: baseConfig + 'personalized/newsong'
}
export default ApiUrls