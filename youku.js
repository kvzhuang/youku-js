var getUrl = function (data) {
    var js = JSON.parse(data), vid, typelist, key1, key2, sid,
        d = new Date(), params;
    vid =  js['data'][0]['videoid'];
    typelist = js['data'][0]['streamtypes'];
    key1 = js['data'][0]['key1'];
    key2 = js['data'][0]['key2'];
    sid = d.getTime() +""+(Math.floor(Math.random() * 9000)+10000);
    key = _getKey(key1, key2);
    params = vid + '/type/hd2/sid/' + sid + '/K/' + key + '/video.m3u8';
    console.log('http://v.youku.com/player/getM3U8/vid/' + params);
    document.getElementById('vid').innerHTML = 'http://v.youku.com/player/getM3U8/vid/' + params;
    return 'http://v.youku.com/player/getM3U8/vid/' + params;
}
function _getKey(key1, key2) {
    var a = hexdec(key1);
    var b = a ^ 0xA55AA5A5;
    b = dechex(b);
    return key2 + b;
}
function hexdec(hex_string) {
  hex_string = (hex_string + '')
    .replace(/[^a-f0-9]/gi, '');
  return parseInt(hex_string, 16);
}
function dechex(number) {
  if (number < 0) {
    number = 0xFFFFFFFF + number + 1;
  }
  return parseInt(number, 10)
    .toString(16);
}
function querystring(key) {
   var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
   var r=[], m;
   while ((m=re.exec(document.location.search)) != null) r[r.length]=m[1];
   return r;
}
window.onload = function () {
    var script = document.createElement('script');
        script.src = 'proxy.php?vid=' + querystring('vid');
        script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);
}
