$(function () {
  var $text = $('#url'),
  $btn = $('#btn'),
  $img = $('img'),
  $tmpImg = $('<img>');
// load local store string to $img
var strImg = window.localStorage.getItem('img');
if(strImg !== ""){ 
  $img.attr("src",strImg);
}
$btn.click(function(){
  //validata url not null
  var url = $text.val();
  if(url === "") return;
  //load url image to tmpImg
  $tmpImg.attr('crossOrigin',"anonymous");
  $tmpImg.attr("src",url);
})
$tmpImg.load(function() {
  //create canvas
  var can =$('<canvas>').get(0);
  var ctx = can.getContext('2d');
  ctx.width=$tmpImg.get(0).width;
  ctx.height=$tmpImg.get(0).height;
  //canvas fill tmpImg
  ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height);
  //save base64
  var str = can.toDataURL(); 
  console.log(str);
  window.localStorage.setItem('img',str);
  var strImg = window.localStorage.getItem('img');
  $img.attr("src",strImg);
})

})