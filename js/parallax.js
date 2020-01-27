var jumboHeight = $('.jumbotron').outerHeight();
//array of images
var images = ["http://s.bootply.com/assets/example/bg_suburb.jpg", "http://placehold.it/1500X500","http://www.bootply.com/assets/example/bg_blueplane.jpg","http://lorempixel.com/1500/600/"];
$i=0;
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});

$('#change').click(function(e){
    //loop through image array on click of button
    $('.bg').css('background',' url('+images[$i]+') no-repeat center center');
    $i++;
    if($i==4){$i=0;}
});