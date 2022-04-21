//push code header
const header = `<nav class="navbar navbar-expand-md">
<a class="navbar-brand col-2 col-md-2" href="#">
    <img src="../assets/img/logo.png" alt="">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-bar" aria-controls="nav-bar" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa fa-bars" aria-hidden="true"></i>
</button>
<div class="collapse navbar-collapse col-10 col-md-10" id="nav-bar">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 col-md-10 justify-content-center">
        <li class="nav-item">
            <a class="nav-link" href="./index.html">Trang chủ</a>
        </li>
        <li class="nav-item">
            <a class="nav-link position-relative" href="#">Sản phẩm</a>
            <ul class="sub-menu bg-light">
                <li><a class="nav-link" href="./shop-new.html">Sản phẩm mới</a></li>
                <li> <a class="nav-link  " href="./shop-women.html">Women</a></li>
                <li><a class="nav-link" href="./shop-men.html">Men</a></li>
                <li><a class="nav-link" href=""> Comming Soon  </a></li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link position-relative" href="#">Thương hiệu</a>
            <ul class="sub-menu bg-light">
                <li><a class="nav-link" href=""> Calvin Klein</a></li>
                <li><a class="nav-link" href=""> CHANEL </a></li>
                <li><a class="nav-link" href=""> DIOR </a></li>
                <li><a class="nav-link" href=""> LACÔME  </a></li>
                <li><a class="nav-link" href=""> GUCCI   </a></li>
                <li><a class="nav-link" href=""> MUGLER  </a></li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./aboutUs.html">Về chúng tôi</a>
        </li>
    </ul>
    <ul class=" stateBox nav col-md-2 justify-content-center">
        <li class="nav-item">
            <a class="nav-link" href="../html/user.html"><i class="fa fa-user-o" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="../html/cart.html"><i class="fa fa-shopping-bag" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item" data-toggle="modal" id="searchHeader">
            <a class="nav-link" href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"></a>
        </li>
    </ul>
</div>
</nav>`
document.getElementById("header").innerHTML = header
    //push code footer
document.getElementById("footer").innerHTML = `<div class="container-fluid">
<div class="row justify-content-center">
    <div class="col-md-3">
        <img src="../assets/img/Logo2.png" alt="" width="180">
        <p class="text-capitalize mt-3">Trang phân phối nước hoa hàng đầu Việt Nam - Nơi Bán nước hoa Cao Cấp Chính Hãng 100%.</p>
    </div>
    <div class="col-md-2">
        <h3>Thông tin</h3>
        <a href="./aboutUs.html">Về chúng tôi</a>
        <a href="./eror.html">Chính sách bán hàng</a>
        <a href="./eror.html">Theo dõi đơn hàng</a>
    </div>
    <div class="col-md-3">
        <h3>Liên hệ với chúng tôi</h3>
        <div class="contact">
            <a href="./index.html">www.myWebsite.com</a>
            <a href="tel:0347825JQK">(+84) 347825JQK</a>
            <a href="mailto:zombizombi51@gmail.com">info@email.com</a>
            <p>12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, TP. Hồ Chí Minh</p>
            <div class="icon-social h1">
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    <div class="col-md-3">
        <h3>Newsletter</h3>
        <label for="email-KH">Hãy để lại email để chúng tôi có thể liên lạc với bạn</label>
        <input type="email" name="" id="email-KH" class="form-control" placeholder="nhập email của bạn" style="background-color: transparent">
    </div>
</div>
<footer>
    <p class="text-center m-0">Copyright © 2022 | Tất cả bản quyền thuộc về <b>Cao Nguyễn Gia Hưng</b> & <b>Lê Nguyệt Châu Sa</b> </p>
</footer>
</div>
`
    //push code search
const modal = document.getElementById('modal')
document.getElementById('modal').innerHTML = `<div class="modal-container js-modal-container">
<div class="search_box">
    <input type="text" class="input_search" placeholder="Bạn cần tìm gì?">
    <input type="image" src="https://perfumegraphy.com/_idio/img/sch.svg" class="input_icon">
</div>
<div class="row suggestion_box justify-content-center">
    <div class="col-md-auto">
        <a href="#" class="suggestion_box-item">
            <div class="suggestion_box-item-icon">
                <img src="https://perfumegraphy.com/_idio/img/sch.svg" alt="">
            </div>
            <div class="suggestion_box-item-text">
                <p>Nước hoa</p>
            </div>
        </a>
    </div>
    <div class="col-md-auto">
        <a href="#" class="suggestion_box-item">
            <div class="suggestion_box-item-icon">
                <img src="https://perfumegraphy.com/_idio/img/sch.svg" alt="">
            </div>
            <div class="suggestion_box-item-text">
                <p>Nước hoa</p>
            </div>
        </a>
    </div>
    <div class="col-md-auto">
        <a href="#" class="suggestion_box-item">
            <div class="suggestion_box-item-icon">
                <img src="https://perfumegraphy.com/_idio/img/sch.svg" alt="">
            </div>
            <div class="suggestion_box-item-text">
                <p>Nước hoa</p>
            </div>
        </a>
    </div>
    <div class="col-md-auto">
        <a href="#" class="suggestion_box-item">
            <div class="suggestion_box-item-icon">
                <img src="https://perfumegraphy.com/_idio/img/sch.svg" alt="">
            </div>
            <div class="suggestion_box-item-text">
                <p>Nước hoa</p>
            </div>
        </a>
    </div>
</div>
</div>
`
    //truot header

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if ((prevScrollpos > currentScrollPos) || currentScrollPos < 200) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
    //open modal search header
const modalSearch = document.getElementById("searchHeader");
const modalContainer = document.querySelector(".js-modal-container");

modalSearch.addEventListener("click", () => {
    modal.classList.add("open");
});
modalContainer.addEventListener("click", (e) => {
    e.stopPropagation();
});
modal.addEventListener("click", () => {
    modal.classList.remove("open");
});