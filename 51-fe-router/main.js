$(function(){
  window.onhashchange=function(){
    var $block=$("#main"),
        strHash=window.location.hash,
        color = strHash.split('/')[1];

  $block.css("background-color",color);
  }
})