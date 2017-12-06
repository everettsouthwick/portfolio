$(function () {
    $(".button-collapse").sideNav()
    $('div#banner').addClass('banner-loaded')
    $('input, textarea').characterCounter()

    setExperience()
    decodeContactInfo()

    var options = [
        { selector: 'div#images', offset: 100, callback: showImages }
    ];
    Materialize.scrollFire(options)
});

$(window).scroll(function () {
    if ($('#navigation-bar').offset().top > 64) {
        $('#navigation-bar').removeClass('expanded')
    }
    else {
        $('#navigation-bar').addClass('expanded')
    }
});

$('ul.skill-languages li').hover(function () {
    $(this).text($(this).data('years-experience'))
}, function () {
    $(this).text($(this).data('language'))
})

function setExperience() {
    $('ul.skill-languages li').each(function (index) {
        var today = new Date()
        if ($(this).data('start-date') != undefined) {
            var start = new Date($(this).data('start-date'))
            var days = getDayDifference(start, today)
            var experience = prettyYears(days)
            $(this).data('years-experience', experience)
            $(this).data('language', $(this).text())
        }
    })
}

function getDayDifference(start, today) {
    var time = Math.abs(start.getTime() - today.getTime());
    var days = Math.ceil(time / (1000 * 3600 * 24));
    return days
}

function prettyYears(days) {
    var years = days / 365
    var prettyYears = Math.round(years * 10) / 10
    var decimal = Math.round(prettyYears % 1 * 10) / 10
    if (decimal > 0 && decimal < .5) {
        prettyYears = Math.floor(prettyYears)
    } else if (decimal > .5) {
        prettyYears = Math.floor(prettyYears) + .5
    }
    return prettyExperience(prettyYears)
}

function prettyExperience(experience) {
    if (experience == 1) {
        return "1 year"
    } else {
        return experience + " years"
    }
}

function decodeContactInfo() {
    $('span.encoded-phone').each(function (index) {
        var encoding = $(this).text();
        $(this).text(atob(encoding));
        $(this).removeClass('encoded-phone');
    })

    $('span.encoded-email').each(function (index) {
        var encoding = $(this).text();
        $(this).text(atob(encoding));
        $(this).removeClass('encoded-email');
    })

    $('a.encoded-phone').each(function (index) {
        var encoding = $(this).attr('href');
        $(this).attr('href', atob(encoding));
        $(this).removeClass('encoded-phone');
    })

    $('a.encoded-email').each(function (index) {
        var encoding = $(this).attr('href');
        $(this).attr('href', atob(encoding));
        $(this).removeClass('encoded-email');
    })
}

function showImages() {
    $('div#images div.section-image img').each(function (index) {
        $(this).delay(index * 300).animate({ opacity: 1 }, 1000)
    })
}