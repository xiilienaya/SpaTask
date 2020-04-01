$(function(){
  var $icon = $('#icon'),
      $pwd = $('#pwd');
  $icon.mouseover(function(){
    $icon.attr("class","iconfont icon-yincangbukejian");
    $pwd.attr("type","text");
  })
  $icon.mouseout(function(){
    $icon.attr("class","iconfont icon-yanjing");
    $pwd.attr("type","password");

  })
})