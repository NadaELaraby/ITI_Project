var i = 0;
// var arr = [];
$(document).ready(function () {

    arr = ['../imgs/44.jpg', '../imgs/11.jpg', '../imgs/33.jpg', '../imgs/44.jpg', '../imgs/46.jpg', '../imgs/45.jpg'];


    window.setInterval(function () {
        i++;
        img = arr[i];
        $(".backgroundslider").css("background-image", 'url("' + img + '")');
        if (i >= 4) {
            i = -1;
        }

    },2000);



});