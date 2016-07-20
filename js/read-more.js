$(function(){

//add css
// should be added at PB level 
 $('head').append('<link rel="stylesheet" href="https://gitcdn.link/cdn/npolizotis/dummy-cdn/fa0e3fa2f5f28777dbfab4751938a10cddc0f9ce/css/read-more.css" type="text/css" />');


//before 
$('<input type="checkbox" class="read-more-state" id="post-2">').insertBefore(".articleMeta");

  
//after 
$('<label for="post-2" class="read-more-trigger"></label>').insertAfter(".articleMeta");

//Read more targets
$(".authorNotes,.publicationContentDoi,.publicationContentReceivedDate.dates ,.publicationContentAcceptedDate.dates,.publicationContentEpubDate.dates").addClass("read-more-target");

// pb configuration replaceable
 $(".general-image.leaderBoard,#3bbadb9a-40c6-420c-b5b4-85856e392b06,#763eb2fa-1c80-480e-9667-29e9233f2ca3").addClass("hidden");
$(".articleMeta").addClass("read-more-wrap");

});
