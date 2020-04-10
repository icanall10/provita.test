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
                loop: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        margin: 20,
                        autoWidth: true
                    },
                    768: {
                        margin: 30,
                        autoWidth: true
                    },
                    1640: {
                        margin: 80,
                        autoWidth: true
                    }
                }
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
            .click(function () {
                let li = $(this).closest('li');
                let ul = li.children('ul');

                if (ul.length) {
                    li.toggleClass('open');

                    return false;
                }
            });


        $('.mobile-menu-block .menu a')
            .once()
            .click(function () {
                let li = $(this).closest('li');
                let ul = li.children('ul');
                let wrapper = $(this).closest('.menu');

                if (ul.length) {
                    wrapper
                        .find('.open')
                        .not(li)
                        .removeClass('open');

                    li.toggleClass('open');

                    return false;
                }
            });


        $('[data-mobile-menu-toggle]')
            .once()
            .click(function () {
                $('body').toggleClass('mobile-menu-open');

                return false;
            });


        $('[data-mobile-second-menu-toggle]')
            .once()
            .click(function () {
                $('body').toggleClass('mobile-second-menu-open');

                return false;
            });


        $('.news-grid.owl-carousel')
            .once()
            .owlCarousel({
                responsive: {
                    0: {
                        autoWidth: true,
                        margin: 20
                    },
                    768: {
                        items: 3,
                        margin: 30
                    },
                    1640: {
                        items: 3,
                        margin: 80
                    }
                }
            });


        $('.footer-block .menus .title')
            .once()
            .click(function () {
                $(this)
                    .closest('.menu')
                    .toggleClass('open');
            });

    }


    $(document).ready(function () {
        behaviors();
    });


    $(document).ajaxComplete(function () {
        behaviors();
    });

})(jQuery);