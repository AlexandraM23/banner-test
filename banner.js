var today = new Date();
var todayDate = today.getDate();

$(function () {
    $('#intro-bg').show().addClass('bg-zoom-out');
    setTimeout(step1, 1000);
    setTimeout(step2, 2000);
    setTimeout(step3, 3000);
    setTimeout(step4, 4000);
    setTimeout(step5, 5000);
});

var step1 = function () {
    $("#intro-text1")
        .css('display', 'flex')
        .show()
        .addClass("text-zoom-out");
    setTimeout(hideText, 1000, "#intro-text1");
}

var step2 = function () {
    $("#intro-text2")
        .css('display', 'flex')
        .show()
        .addClass("text-zoom-out");
    setTimeout(hideText, 1000, "#intro-text2");
}

var step3 = function () {
    $("#intro-text3")
        .css('display', 'flex')
        .show()
        .addClass("text-zoom-out");
    setTimeout(hideText, 1000, "#intro-text3");
    setTimeout(hideIntroBg, 1000);
}

var step4 = function () {
    $('#earth')
        .show()
        .addClass("earth-zoom-out");

    $('#spaceship')
        .show()
        .addClass("ship-zoom-out");

    $('#title')
        .show()
        .addClass('title-zoom-out');
}

var step5 = function () {
    if (todayDate < 10) {
        $('#date').show();
    } else {
        $('#now').show();
    }

    $(".trailer-link")
        .show()
        .addClass('trailer-in')
        .hover(beamOn, beamOff);

}

var beamOn = function () {
    $("#beam-top").css('opacity', '1');
}

var beamOff = function () {
    $("#beam-top").css('opacity', '0');
}

var hideIntroBg = function () {
    $('#intro-bg').fadeOut();
}

var hideText = function (id) {
    $(id).hide();
}



