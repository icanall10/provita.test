(function ($) {

    function behaviors() {

        $('[data-ui-dialog-link]')
            .once('ui-dialog')
            .click(function () {
                let $this = $(this);
                let code = $this.attr('data-ui-dialog-link');
                let orderName = $this.attr('data-order-name');

                let dialog = $('[data-ui-dialog="' + code + '"]');

                if (!dialog.length) return false;

                if (orderName) {
                    dialog.find('input[name="order_name"]').val(orderName);
                }

                let width = dialog.attr('data-ui-dialog-width');
                let title = dialog.attr('data-ui-dialog-title');
                let className = dialog.attr('data-ui-dialog-class');

                dialog.dialog({
                    width: width,
                    title: title,
                    modal: true,
                    dialogClass: className,
                    create: function (e, ui) {
                        $(e.target)
                            .closest('.ui-dialog')
                            .find('.ui-dialog-titlebar-close')
                            .html('<svg><use xlink:href="./img/icons.svg#close"></use></svg>');
                    }
                });

                behaviors();

                return false;
            });


        $('select:visible')
            .once('select2', function () {
                $(this).select2({
                    width: 'auto',
                    dropdownParent: $(this).closest('.form-group')
                });
            });


        $('a.colorbox')
            .once()
            .colorbox({
                maxWidth: '100%',
                maxHeight: '100%'
            });


        $('.slider-block .owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                loop: true,
                dots: true,
                nav: false,
                dotsContainer: '.slider-block .dots'
            });


        $('.slider-block .prev')
            .once()
            .click(function () {
                $(this)
                    .closest('.slider-block')
                    .find('.owl-carousel')
                    .trigger('prev.owl.carousel');

                return false;
            });


        $('.slider-block .next')
            .once()
            .click(function () {
                $(this)
                    .closest('.slider-block')
                    .find('.owl-carousel')
                    .trigger('next.owl.carousel');

                return false;
            });


        $('.doctors-list.owl-carousel')
            .once()
            .owlCarousel({
                autoWidth: true,
                margin: 80,
                loop: true,
                nav: false,
                dots: false
            });


        $('.doctors-block .prev')
            .once()
            .click(function () {
                $(this)
                    .closest('.doctors-block')
                    .find('.owl-carousel')
                    .trigger('prev.owl.carousel');

                return false;
            });


        $('.doctors-block .next')
            .once()
            .click(function () {
                $(this)
                    .closest('.doctors-block')
                    .find('.owl-carousel')
                    .trigger('next.owl.carousel');

                return false;
            });


        $('.contacts-place-block .map')
            .once(function () {
                var id = $(this).attr('id');

                ymaps.ready(function () {
                    let coords = [55.774730, 37.617901];

                    let map = new ymaps.Map(id, {
                        center: coords,
                        zoom: 13,
                        controls: ['zoomControl']
                    });

                    map.behaviors.disable('scrollZoom');

                    let placemark = new ymaps.Placemark(coords, {
                        hintContent: 'Россия, Москва, Волконский 1-й переулок, 15',
                        balloonContent: 'Россия, Москва, Волконский 1-й переулок, 15'
                    });

                    map.geoObjects.add(placemark);
                });
            });


        $('.before-after .owl-carousel')
            .once()
            .owlCarousel({
                items: 1,
                dots: false,
                nav: true,
                navText: [
                    '<svg><use xlink:href="./img/icons.svg#arrow-medium"></use></svg>',
                    '<svg><use xlink:href="./img/icons.svg#arrow-medium"></use></svg>'
                ]
            });


        $('.right-menu-block a')
            .once()
            .click(function(){
                let li = $(this).closest('li');
                let ul = li.children('ul');

                if (ul.length) {
                    li.toggleClass('open');

                    return false;
                }
            });

    }


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);