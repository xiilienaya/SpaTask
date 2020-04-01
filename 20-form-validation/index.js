$(function () {
  //获取元素
  var $width = $("#width"),
    $height = $("#height"),
    $btnCal = $("#calculate"),
    $perimeter = $("#perimeter"),
    $area = $("#area");

  //点击
  $btnCal.click(clickCalc)
  $(document).keydown(function (event) {
    if (event.keyCode == 13) {
      clickCalc();
    }
  });

  function clickCalc() {
    
    if (!validata('#width') || !validata('#height')) return;

    var w = Number($width.val()),
      h = Number($height.val());
    //calculate
    var p = 2 * eval(w+h),
      a = eval(w*h);

    $perimeter.val(p);
    $area.val(a);
  };

  $width.keypress(function (e) {
    if (/[abcdf-zABCDF-Z`~!@#$%^&*()\=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
      e.preventDefault();
      return;
    }
    
    var start = e.target.selectionStart,
      value = e.target.value;
    
    if (e.key === 'e') {
      if (start === 0 || value.indexOf('e') !== -1 || value.indexOf('E') !== -1) {
        e.preventDefault();
        return;
      }
      if (start === 1 && value.substring(0, 1) === '-') {
        e.preventDefault();
        return;
      }
    }
  })
  $height.keypress(function (e) {
    if (/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
      e.preventDefault();
      return;
    }
  })
  $width.focusout(function () {
    if (!validata('#width')) $width.select()
  })
  $height.focusout(function () {
    if (!validata('#height')) $height.select()
  })

  function validata(filed) {
    // get DOM
    var $data = $(filed),
      $text = filed.substring(1),
      $msg = $(`${filed}-validation-message`);
    // validata null
    if ($data.val() === '') {
      if ($text == 'width') {
        $msg.html('宽度不能为空');
      } else {
        $msg.html('高度不能为空');
      }
      return false;
    }
    
    if (!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
      $msg.html('必须是数值');
      $data.select();
      return false;
    }
    if (Number($data.val()) < 0) {
      $msg.html('必须大于0');
      return false;
    }
    $msg.html('');
    return true
  }
});
