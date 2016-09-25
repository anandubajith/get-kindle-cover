// TODO: compare images sizes and return only the larger one
// var size = require('request-image-size');

exports.get = function(ASIN) {

  var portalOneUrl = 'http://z2-ec2.images-amazon.com/images/P/{{ ASIN }}.01.MAIN._SCRM_.jpg';
  var portalTwoUrl = 'http://s3.cn-north-1.amazonaws.com.cn/sitbweb-cn/content/{{ ASIN }}/images/cover.jpg';
  portalOneUrl = portalOneUrl.replace('{{ ASIN }}', ASIN);
  portalTwoUrl = portalTwoUrl.replace('{{ ASIN }}', ASIN);
  
  return [portalOneUrl, portalTwoUrl]
};
