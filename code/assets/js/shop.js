$(document).ready(function() {


    function add_product(item) {
        $('.shop_product').append(
            `<div class="col-xl-3 col-lg-4 col-md-6 col-xm-12 mt-5" data-aos="${item['data-aos']}" data-aos-duration="1000"> ` +
            '<div class="item" >' +
            `<a href="./product.html" data-id = "${item.id}" class="link-product">` +
            '<div class="card">' +
            '<div class="product_figure">' +
            ' <img class="card-img-top" src="' + item.img + '" alt="Card image cap">' +
            '</div>' +
            '<div class="card-body text-center">' +
            '<div class="item-content">' +
            '<p class="product_brand">' + item.brand + '</p>' +
            '<h5 class="card-title">' + item.title + '</h5>' +
            // '<p class="card-text">' + item.descrip + '</p>' +
            '<p class="item-price"><b>' + new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price) + '</b></p>' +
            // '<a href="#" class="btn btn-buy">Mua ngay</a>' +
            '</div>' +
            '</a>' +
            '</div>' +
            '</div>'
        )
    }

    function go_product() {
        $('.link-product').on('click', function() {
            var id = $(this).attr('data-id');
            localStorage.setItem('id', id);
            var p_active = $('.page-item.active').attr('data-page');
            localStorage.setItem('data-page', p_active);
        })
    }

    function empty_product() {
        if (!$('.shop_product').is(':empty')) {
            $('.not-found').addClass('d-none')
        }
        if ($('.shop_product').is(':empty')) {
            $('.not-found').removeClass('d-none')
        }
    }
    $('#sidebar').html('')
    var shop = $('#shop').attr('data-shop');

    function findByBrand(pageData) {
        $('#shopFilterBrand').empty()
        var brand = new Set();
        pageData.forEach(item => {
            brand.add(item.brand)
        })
        $('#shopFilterBrand').append(`
        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="filter-product-brand" value="" id="filter-product__all_brand" checked>
                                            <label class="form-check-label" for="filter-product__all_brand">
                                                                    Tất cả
                                                                </label>
                                        </div>
        `)
        brand.forEach(item => {
            $('#shopFilterBrand').append(`
            <div class="form-check" data-brand = ${item}>
                                            <input class="form-check-input" type="radio" name="filter-product-brand" value="" id="${item}">
                                            <label class="form-check-label" for="${item}">
                                                                    ${item}
                                                                </label>
                                        </div>`)
        });
    }
    var PATH = `../assets/js/data/${$('#shop').attr('data-path')}.json`;
    localStorage.setItem('path', PATH);
    $.getJSON(PATH, function(data) {
        var n = Math.floor(data.length / 4);
        N = Math.round(data.length / n);
        console.log(localStorage.getItem('data-page'));
        var page = 'page-1';
        var pages = {
            'page-1': ""
        }
        for (var i = 0; i < N; i++) {
            let num = i + 1
            pages['page-' + num.toString()] = data.slice(n * i, n * num)
            $('.pagination').append('<li class="page-item" data-page="page-' + num.toString() + '"><a class="page-link" href="#shop" >' + num.toString() + '</a></li>')
        }
        $(`.pagination .page-item[data-page='${page}']`).addClass('active')
        console.log(page);


        findByBrand(pages[page])
        $('#shopFilterBrand').children().click(function() {
            var brand = $(this).attr('data-brand');
            console.log(brand);
            console.log(1);
            $('.shop_product').html('');
            pages[page].map(function(item) {
                if ((item.brand.toLowerCase().indexOf(brand.toLowerCase())) != -1) {
                    add_product(item)
                }
            })
        });
        pages[page].map(add_product)
        $('#filter-product__all').click(function() {
            $('.shop_product').empty();
            pages[page].map(add_product)
            go_product()
        });
        $('#filter-product__5').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price < 500000) {
                    add_product(item)
                }
            })
            go_product()
            empty_product()
        });
        $('#filter-product__10').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price >= 500000 && item.price < 1000000) {
                    add_product(item)
                }
            })
            go_product()
            empty_product()

        });
        $('#filter-product__20').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price >= 1000000 && item.price < 2000000) {
                    add_product(item)
                }
            })
            go_product()
            empty_product()
        });
        $('#filter-product__50').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price >= 2000000 && item.price < 3000000) {
                    add_product(item)
                }
            })
            go_product()
            empty_product()
        });
        $('#filter-product__100').click(function() {
            $('.shop_product').empty();
            pages[page].map(function(item) {
                if (item.price >= 3000000) {
                    add_product(item)
                }
            })
            go_product()
            empty_product()
        });
        $('.page-item').on('click', function() {
            $('.shop_product').empty();
            $('.page-item').removeClass('active')
            $(this).addClass('active')
            page = $(this).attr('data-page')
            pages[page].map(add_product)
            go_product()
            findByBrand(pages[page])
            $('#shopFilterBrand').children().click(function() {
                var brand = $(this).attr('data-brand');
                console.log(brand);
                console.log(1);
                $('.shop_product').html('');
                pages[page].map(function(item) {
                    if ((item.brand.toLowerCase().indexOf(brand.toLowerCase())) != -1) {
                        add_product(item)
                    }
                })
            });
        });
        $('#shop-search__input').on('keypress', function(e) {
            if (e.which == 13) {
                $('.shop_product').empty();

                data.map(function(item) {
                    if ((item.title.toLowerCase().indexOf($('#shop-search__input').val().toLowerCase()) != -1) || (item.brand.toLowerCase().indexOf($('#shop-search__input').val().toLowerCase()) != -1)) {
                        if (!$('.not-found').hasClass('d-none')) {
                            $('.not-found').addClass('d-none')
                        }
                        add_product(item)
                    }
                    if ($('.shop_product').is(':empty')) {
                        $('.not-found').removeClass('d-none')
                    }
                })
            }
            go_product()
        });
        go_product()
    });
});