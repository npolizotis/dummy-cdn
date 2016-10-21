(function($){

	$(function(){
		$('head').append('<link rel="stylesheet" href="//rawgit.com/npolizotis/dummy-cdn/master/css/lightbox.css" type="text/css" />');
		$.get("//rawgit.com/npolizotis/dummy-cdn/master/html/product.html",function(data){
				//laod html
				$("body").append(data);
				

				 
            
            var close=function (e){
                if(e.keyCode===27){
                    $("a.closemsg")[0].click();
                    $("#product-inner").addClass("done");
                }
            }
            $(document).on('keyup','#product-inner:not(.done)',close);   
            
            $(".lightbox a.hidden")[0].click();
            $(".lightbox input")[0].focus();
            $("#product-inner form").on("submit", function(e) {
                e.preventDefault();
                if ($("#product-inner.lightbox form")[0].checkValidity()) 
                {
                    var product = $("#product-inner input#product").val();
                    var environment = $("#product-inner input:radio[name=environment]:checked").val();
                    window.open("http://" + product + "-" + environment + ".literatumonline.com");
                    return false;
                }
            });
        

			})

	});

})(window.jQuery);