$(function(){
  var $btn = $('input[type="button"]'),
      num=10,
      timer;
  $btn.attr('disabled','disabled');
  $btn.val('同意('+num+'s)');
  timer=setInterval(function(){
    num--;
    if(num === 0){
      $btn.val('同意');
      $btn.removeAttr('disabled');
      clearInterval(timer);
    }else{
      $btn.val('同意('+ num +'s)');
    }
  },1000)
})