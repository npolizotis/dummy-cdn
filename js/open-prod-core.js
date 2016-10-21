(function($){

	$(function(){
		$('head').append('<link rel="stylesheet" href="//rawgit.com/npolizotis/dummy-cdn/master/css/lightbox.css" type="text/css" />');
		$.get("//rawgit.com/npolizotis/dummy-cdn/master/html/product.html",function(data){
				$("body").append(data);
				$(".lightbox a.hidden").trigger("click");

			})

	});

})(window.jQuery);