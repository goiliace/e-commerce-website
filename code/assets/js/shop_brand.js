$(document).ready(function() {
    brand = localStorage.getItem('brand')
    console.log(brand);
    $('#shop').attr('data-path', brand)
});