requirejs.config({
  'paths':'https://cdn.bootcss.com/jquery/3.4.1/jquery.js'
})

require(['jquery']),function($){
  $(function(){
    var $btnAdd = $('#add'),
        $enabled = $('#enabled'),
        $unabled = $('#unabled'),
        $num = $('#number'),
        $title = $('#text'),
        $eventCode = $('textarea'),
        opt={};
    $enabled.click(function(){
      opt.disable=true;
    })
    $unabled.click(function(){
      opt.disable=false;
    })
    $num.change(function(){
      opt.num=Number($num.val());
    })
    $title.change(function(){
      if($title.val() !== ""){
        opt.title=$title.val();
      }else{
        opt.title="同意";
      }
    })
    // $timerButton.show(opt);
    $btnAdd.click(function(){
      opt.container="#main";
      opt.onClick=function(){
        eval($eventCode.html());
      }
      require(['index.js']),function(){
        $timerButton.show(opt);
      }

    })
  })
}