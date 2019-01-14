define(['jquery'], function () {

    $(function () {

        var target = $('.page-head')

        if (target !== null) {
            var position = target.position()
            window.addEventListener('scroll', function () {
                var height = $(window).scrollTop()
                if (height > position.top) {
                    target.addClass('affix')
                } else {
                    target.removeClass('affix')
                }
            })
        }
    });
});