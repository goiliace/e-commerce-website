$(document).ready(function() {
    function fixHeight(classname, ratio) {
        var cw = $(classname).width();
        $(classname).css({ 'height': cw * ratio + 'px' });
        console.log(cw);
        window.addEventListener('resize', function(event) {
            var cw = $(classname).width();
            $(classname).css({ 'height': cw * ratio + 'px' });
        }, true);
    }
    fixHeight('#myVideo', 0.5625);

    fixHeight('.owl-item .blog_img', 1)
    $.getJSON("../assets/js/data/women.json", function(data) {
        $('.card-product').each(function(index) {
            if (data[index]) {
                $(this).html(
                    `<a href="./product.html" data-id="${data[index]['id']}" class="link-product" data-aos="${data[index]['data-aos']}"  data-aos-duration="1000">
                    <div class="product_figure">
                                        <img class="card-img-top" src="${data[index].img}" alt="Card image cap">
                                    </div>
                    <div class="card-body text-center">
                        <div class="item-content">
                            <p class="product_brand"> ${data[index]['brand']} </p>
                            <h5 class="card-title" style="height: 50px;">${data[index].title} </h5>
                            <p class="card-text" style="white-space: nowrap;overflow: hidden;"> ${data[index].descrip} </p>
                            <p class="item-price"><b>${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data[index].price)}</b></p>
                            <a href="./product.html" class="btn btn-buy">Mua ngay</a>
                        </div>
                    </div>
                </a>`
                )
            }
        });
        $('.link-product').on('click', function() {
            var id = $(this).attr('data-id');
            localStorage.setItem('id', id);
            var p_active = $('.page-item.active').attr('data-page');
        })
    });


    $('#carousel-slider').carousel({
        interval: 3000
    });
    $('.video-item').click(function() {
        var video = $(this).attr('data-video');
        $('#myVideo').attr('src', video);
    });
    $('.customer-reviews').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    $('.video_box').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5
            }
        }
    });
    $('.news').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 5
            }
        }
    });
    $('.brand_box').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: false
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 4
            }
        }
    });

    $('.link-product').on('click', function() {
        var id = $(this).attr('data-id');
        localStorage.setItem('id', id);
        var p_active = $('.page-item.active').attr('data-page');
        localStorage.setItem('data-page', p_active);
    })
});