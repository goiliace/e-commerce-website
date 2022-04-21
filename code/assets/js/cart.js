$(document).ready(function() {
    function totalPrice() {
        var total = 0;
        $('.product_item').each(function() {
            var price = $(this).find('.product_price').text().replace(/\D/g, '');
            var qty = $(this).find('.qty').val();
            total += price * qty;
            console.log(total);
        })
        $('.product_total_price_value h4').html(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total));
    }

    var cart = JSON.parse(localStorage.getItem('cart'))
    if (cart.length == 0 || cart == null) {
        $('.have_items__wrapper').css('display', 'none')
        $('.no_items__wrapper').css('display', 'block')
        console.log(cart);
    } else {
        cart.forEach(e => {
            $('#producItems').append(
                `<div class="product_item  mb-4">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-5">
                        <div class="product_img">
                            <img src="${e.img}" alt="">
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="product_name">
                            <h2>${e.name}</h2>
                        </div>
                        <div class="product_price">
                            <h4>${e.price}</h4>
                        </div>
                        <div class="product_quantity-wrapper d-flex mt-3 align-items-center">
                            <span>Chọn số lượng</span>
                            <div class="product_quantity">
                                <a class="minus" role="button" id="minus-item">
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </a>
                                <input name="qty" id = "qty" class="qty" type="number" value="${e.qty}" min="1" max="6" aria-valuemin="1" aria-valuemax="6" aria-valuenow="6" autocomplete="off" role="spinbutton">
                                <a class="plus" role="button" id="plus-item">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="product_remove">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
            </div>`
            )
        })
        totalPrice();

    }
    $('.product_remove').click(function() {
        $(this).parent().parent().remove()
        var id = $(this).parent().parent().find('.product_name h2').text()
        var cart = JSON.parse(localStorage.getItem('cart'))
        cart.forEach((e, i) => {
            if (e.name == id) {
                cart.splice(i, 1)
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
        if (cart.length == 0) {
            $('.have_items__wrapper').css('display', 'none')
            $('.no_items__wrapper').css('display', 'block')
        }
        totalPrice();

    });
    $('.plus').on('click', function() {
        var qty = $(this).parent().find('.qty');
        if (qty.val() < qty.attr('max')) {
            qty.val(parseInt(qty.val()) + 1)
            totalPrice();

        } else
            alert('Mỗi lần chỉ được mua tối đa 6 ')
    })

    $('.minus').on('click', function() {
        var qty = $(this).parent().find('.qty');
        console.log(qty.val());
        if (qty.val() > qty.attr('min')) {
            qty.val(parseInt(qty.val()) - 1)
            totalPrice();

        } else {
            alert('Không được bé hơn 1')
        }
    });
})