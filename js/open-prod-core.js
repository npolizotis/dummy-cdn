var jQueryVersion = '2.2.4'

if (window.jQuery === undefined || window.jQuery.fn.jquery < jQueryVersion) {
  var done = false
  var script = document.createElement('script')
  script.src = '//ajax.googleapis.com/ajax/libs/jquery/' + jQueryVersion + '/jquery.min.js'
  script.onload = script.onreadystatechange = function () {
    if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
      done = true
      initMyBookmarklet()
    }
  }
  document.getElementsByTagName('head')[0].appendChild(script)
} else {
  initMyBookmarklet()
}

function initMyBookmarklet () {
  (function ($) {
    $(function () {
      if ($('#product-inner')) {
        $('#product-inner').removeClass('done')
        $('.lightbox a.hidden')[0].click()
        $('.lightbox input')[0].focus()
        return
      }
      $('head').append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/npolizotis/dummy-cdn@1.3.0/css/lightbox.css" type="text/css" />')
      $.get('https://cdn.jsdelivr.net/gh/npolizotis/dummy-cdn@1.3.0/html/product.html', function (data) {
        // laod html
        $('body').append(data)
        var close = function (e) {
          if (e.keyCode === 27) {
            $('a.closemsg')[0].click()
            $('#product-inner').addClass('done')
          }
        }
        $(document).on('keyup', '#product-inner:not(.done)', close)

        $('.lightbox a.hidden')[0].click()
        $('.lightbox input')[0].focus()
        $('#product-inner form').on('submit', function (e) {
          e.preventDefault()
          if ($('#product-inner.lightbox form')[0].checkValidity()) {
            var product = $('#product-inner input#product').val()
            var environment = $('#product-inner input:radio[name=environment]:checked').val()
            window.open('http://' + product + '-' + environment + '.literatumonline.com')
            return false
          }
        })
      })
    })
  })(window.jQuery)
}
