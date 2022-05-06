$(document).ready(function() {

    var qty = $('#qty');
    $('#plus-item').on('click', () => {
            if (qty.val() < qty.attr('max')) {
                qty.val(parseInt(qty.val()) + 1)
            } else {
                $('#errorQty Strong').text('Mỗi lần chỉ được mua tối đa 6 sản phẩm');
                $('#errorQty').toast('show');

            }
        })
        // them vao gio hang
    $('#btnBuy').on('click', function() {
        var id = localStorage.getItem('id')
        var qty = $('#qty').val()
        var name = $('.product_info__name').text()
        var price = $('.product_info__price').text()
        var img = $('#product-img img').attr('src')
        var data = {
            id: id,
            qty: qty,
            name: name,
            price: price,
            img: img
        }
        var cart = JSON.parse(localStorage.getItem('cart'))
        if (cart == null) {
            cart = []
        }
        cart.push(data)
        localStorage.setItem('cart', JSON.stringify(cart))
        $('#ordersucces Strong').text('Đã thêm vào giỏ hàng')
        $('#ordersucces').toast('show')
    })
    $('#minus-item').on('click', () => {
        if (qty.val() > qty.attr('min')) {
            qty.val(parseInt(qty.val()) - 1)
        } else {
            $('#errorQty Strong').text('Số lượng tối thiểu là 1');
            $('#errorQty').toast('show');

        }
    })
    $('.heart-n-active').on('click', function() {
        $(this).css('display', 'none')
        $('.heart-active').css('display', 'block')
    })
    $('.heart-active').on('click', function() {
        $(this).css('display', 'none')
        $('.heart-n-active').css('display', 'block')
    })
    var idProduct = localStorage.getItem('id')
    console.log(idProduct);
    var PATH = localStorage.getItem('path');
    $.getJSON(PATH, function(data) {
        var item = data.find(e => e.id == idProduct);
        preview_img = item['subProduct']['pre_img']
        $('#product-img').append(`<img src="${item.img}" alt="">`)
        preview_img.forEach(element => {
            $('#preview-img').append(`<img src="${element}" alt="">`)
        });
        $('#preview-img img').on('click', function() {
            $('#product-img img').attr('src', $(this).attr('src'))
        });
        $('.header-brand div').text(item.brand)
        $('.product_info__brand').text(item.brand);
        $('.product_info__name').text(item.title);
        $('.product_info__price').text(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price));
        $('.product_info__type').text(item.title);
        $('.product-info__about').text(item['subProduct']['des']);
        $('.product_descr__brand').text(item.brand);
        $('.product_descr__name').text(item.title);
        $('.product_descr__descr').text(item['subProduct']['des']);
        $('#des_content_right p').text(item['subProduct']['des_content'][0]);
        (item['subProduct']['des_content'][1]) ? $('#des_content_left p').text(item['subProduct']['des_content'][1]): $('#des_content_left').css('display', 'none')
        $('#des_content_right img').attr('src', item['subProduct']['des_img'][0]);
        item['subProduct']['des_img'][1] ? $('#des_content_left img').attr('src', item['subProduct']['des_img'][1]) : $('#des_content_left').css('display', 'none')
        var s = ''

        s += `<div class="col-md-6">
            <dl>`
        for (let i in item['subProduct']['des_about']) {
            s += `<dt>${i}</dt>
                <dd>${item['subProduct']['des_about'][i]}</dd>`
        }
        s += ` </div>`
        console.log(s);
        $('#about-des').html(s)
        $('.about_des__descr').append(`<p>${item['subProduct']['des_about_des'][0]}</p>`)
        var data_desc = '<div class = "readmore d-none" data-aos="fade-right" data-aos-duration="1000"> '
        for (let i = 1; i < item['subProduct']['des_about_des'].length; i++) {
            if (item['subProduct']['des_about_des'][i]) {
                data_desc += `<p>${item['subProduct']['des_about_des'][i]}</p>`
            }
        }
        data_desc += '</div>'
        $('.about_des__descr').append(data_desc)
        $('#btnReadMore').on('click', function() {
            $('.readmore').toggleClass('d-none')
            $('#btnReadMore').text($('.readmore').hasClass('d-none') ? 'Đọc thêm' : 'Rút gọn')
        })
    });

})