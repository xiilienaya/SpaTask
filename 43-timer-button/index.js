define(['jquery']),function($){
var $timerButton = (function(){
  function show(conf){
    var cfg={
      num:10,
      container:"body",
      title:"同意",
      onClick:null
    },
    timer,
    $btn=$('<input class="timer-button" type="button" value="1">');
    // 1.DOM draw
    $.extend(cfg,conf);
    $btn.appendTo($(cfg.container));
    console.log(cfg);
    // 2.event bind
    if(cfg.disable){
      $btn.val(cfg.title);
      $btn.click( cfg.onClick )
      return;
    }
    $btn.attr('disabled','disabled');
    $btn.val(cfg.title+'('+cfg.num+'s)');
    if(timer){
      clearInterval(timer);
    }
    timer=setInterval(function(){
      cfg.num--;
      if(cfg.num === 0){
       $btn.val(cfg.title);
        $btn.removeAttr('disabled');
        clearInterval(timer);
      }else{
       $btn.val(cfg.title+'('+ cfg.num +'s)');
      }
    },1000);
    $btn.click( cfg.onClick )
  }
  return ({
    show:show
  })
})();
}

function TimerButton(){
  this.show=function(conf){
    var cfg={
      num:10,
      container:"body",
      title:"同意",
      onClick:null
    },
    timer,
    $btn=$('<input class="timer-button" type="button" value="1">');
    // 1.DOM draw
    $.extend(cfg,conf);
    $btn.appendTo($(cfg.container));
    console.log(cfg);
    // 2.event bind
    if(cfg.disable){
      $btn.val(cfg.title);
      $btn.click(function(){
        cfg.onClick();
      })
      return;
    }
    $btn.attr('disabled','disabled');
    $btn.val(cfg.title+'('+cfg.num+'s)');
    if(timer){
      clearInterval(timer);
    }
    timer=setInterval(function(){
      cfg.num--;
      if(cfg.num === 0){
       $btn.val(cfg.title);
        $btn.removeAttr('disabled');
        clearInterval(timer);
      }else{
       $btn.val(cfg.title+'('+ cfg.num +'s)');
      }
    },1000);
    $btn.click( cfg.onClick )
  }
}