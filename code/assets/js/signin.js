function reset() {
    $('#form1')[0].reset();
    var checkList = document.querySelectorAll('.check')
    for (let i = 0; i < checkList.length; i++) {
        if (!checkList[i].classList.contains('d-none')) {
            checkList[i].classList.add('d-none');
        }
    }
}
// localStorage.removeItem('user');
$(document).ready(function() {
    var user = [];
    if (localStorage.getItem('user')) {
        user = user.concat(JSON.parse(localStorage.getItem('user')));
    } else {
        user = [{
            id: 0,
            name: 'Cao Nguyen Gia Hung',
            email: '20089711.hung@student.iuh.edu.vn',
            phone: '0347825051',
            password: '1'
        }]
        localStorage.setItem('user', JSON.stringify(user));
    }
    $('#signIn').click(function() {
        $('.container').removeClass("right-panel-active");
    });
    $('#signUp').click(function() {
        $('.container').addClass("right-panel-active");
    });

    function checkName() {
        var reg = /^([A-Z]+[A-Za-z]*)*(\s+[A-Z]+[A-Za-z]*)*$/;
        if ($("#name-signup").val().length < 3) {
            $('#f-name').removeClass("d-none");
            $('#f-name-2').addClass("d-none");
            $('#name-signup').addClass("border-danger");
            return false;
        } else {
            $('#f-name-2').removeClass("d-none");
            if (reg.test($("#name-signup").val())) {
                $('#t-name').removeClass("d-none");
                $('#f-name').addClass("d-none");
                $('#name-signup').removeClass("border-danger");
                return true;
            } else {
                $('#f-name').removeClass("d-none");
                $('#t-name').addClass("d-none");
                $('#name-signup').addClass("border-danger");
                return false;
            }
        }
    };

    function checkEmail() {
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const check = user.find(function(item) {
            return item.email == $("#email-signup").val()
        })
        if (check) {
            $('#f-email span').html("Email đã tồn tại");
            $('#f-email').removeClass("d-none");
            $('#t-email').addClass("d-none");
            $('#email-signup').addClass("border-danger");
            return false;
        }
        if (reg.test($("#email-signup").val())) {
            $('#f-email').addClass("d-none");
            $('#t-email').removeClass("d-none");
            $("#email-signup").removeClass("border-danger");
            return true;
        } else {
            $('#f-email span').html("Email không đúng định dạng");
            $('#f-email').removeClass("d-none");
            $('#t-email').addClass("d-none");
            $('#email-signup').addClass("border-danger");
            return false;
        }
    }

    function checkPhone() {
        const check = user.find(function(item) {
            return item.phone == $("#phone-signup").val()
        })
        if (check) {
            $('#f-phone span').html("Số điện thoại đã tồn tại");
            $('#f-phone').removeClass("d-none");
            $('#t-phone').addClass("d-none");
            $('#phone-signup').addClass("border-danger");
            return false;
        }
        var reg = /^[0-9]{10}$/;
        if (reg.test($("#phone-signup").val())) {
            $('#f-phone').addClass("d-none");
            $('#t-phone').removeClass("d-none");
            $("#phone-signup").removeClass("border-danger");
            return true;
        } else {
            $('#f-phone span').html("Số điện thoại không đúng định dạng");
            $('#f-phone').removeClass("d-none");
            $('#t-phone').addClass("d-none");
            $('#phone-signup').addClass("border-danger");
            return false;
        }
    }

    function checkPass() {
        let strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        let mediumPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
        //strong
        if (strongPassword.test($("#password-signup").val())) {
            $('#f-pass').addClass("d-none");
            $('#t-Spass').removeClass("d-none");
            $('#t-Mpass').addClass("d-none");
            $("#password-signup").removeClass("border-danger");
            return true;
        }
        //medium
        else if (mediumPassword.test($("#password-signup").val())) {
            $('#f-pass').addClass("d-none");
            $('#t-Mpass').removeClass("d-none");
            $('#t-Spass').addClass("d-none");
            $("#password-signup").removeClass("border-danger");
            return true;
        }
        //weak
        else {
            $('#f-pass').removeClass("d-none");
            $('#t-Spass').addClass("d-none");
            $('#t-Mpass').addClass("d-none");
            $('#password-signup').addClass("border-danger");
            return false;
        }
    }

    function checkConfirmPass() {
        if ($("#password-signup").val() == $("#confirm-password-signup").val() && $("#confirm-password-signup").val().trim() != '') {
            $('#f-repass').addClass("d-none");
            $('#t-repass').removeClass("d-none");
            $("#confirm-password-signup").removeClass("border-danger");
            return true;
        } else {
            $('#f-repass').removeClass("d-none");
            $('#t-repass').addClass("d-none");
            // $('#confirm-password-signup').addClass("border-danger");
            return false;
        }
    }
    $("#name-signup").blur(checkName);
    $("#email-signup").blur(checkEmail);
    $("#phone-signup").blur(checkPhone);
    $("#password-signup").blur(checkPass);
    $("#confirm-password-signup").blur(checkConfirmPass);
    $('#signIn').click(function() {
        reset();
    });
    $('#dangki').click(function() {
        console.log(user);

        if (checkName() && checkEmail() && checkPhone() && checkPass() && checkConfirmPass()) {
            var data = {
                id: user.length + 1,
                name: $('#name-signup').val().trim(),
                email: $('#email-signup').val().trim(),
                phone: $('#phone-signup').val().trim(),
                password: $('#password-signup').val().trim()
            }
            user.push(data);
            localStorage.setItem('user', JSON.stringify(user));
            $('#signInModal .modal-title').text('Đăng kí thành công');
            $('#signInModal .modal-body').html(`<p>Chào mừng ${data.name} đến với trang web của chúng tôi.!!!</p>
            <p>Bạn vui lòng đăng nhập để tiếp tục</p>`);
            $('#goSignUp').css('display', 'block');
            $('#backHome').css('display', 'none');
            reset();
            $('#goSignUp').click(function() {
                $('.container').removeClass("right-panel-active");
            })

        } else {
            $('#signInModal .modal-title').text('Đăng kí thất bại');
            $('#signInModal .modal-body').html('<p>Vui lòng điền chính xác và đầy đủ thông tin!!!</p>');
            $('#goSignUp').css('display', 'none');
            $('#backHome').css('display', 'none');
        }
    });
    $('#dangnhap').click(function() {
        var name_Sigin = $('#name-signin').val().trim();
        var pass_Sigin = $('#password-signin').val().trim();
        var check = user.find(function(item) {
            return (item.email == name_Sigin || item.phone == name_Sigin) && item.password == pass_Sigin;
        });
        if (check) {
            $('#signInModal .modal-title').text('Đăng nhập thành công');
            $('#signInModal .modal-body').html(`<p>Chào mừng ${check.name} đến với trang web của chúng tôi.!!!</p>
            <p>Chúc bạn có những giây phút trải nghiệm vui vẻ</p>`);
            $('#backHome').css('display', 'block');
            $('#goSignUp').css('display', 'none');
            localStorage.setItem('user_now', JSON.stringify(check));
            console.log(check);
            reset();
        } else {
            $('#signInModal .modal-title').text('Đăng nhập thất bại');
            $('#signInModal .modal-body').html('<p>Vui lòng điền chính xác và đầy đủ thông tin!!!</p>');
            $('#goSignUp').css('display', 'none');
            $('#backHome').css('display', 'none');
        }
    })
    $('#signInModal').on('shown.bs.modal', function() {
        $('#myInput').focus()
    })
});
var user = JSON.parse(localStorage.getItem('user'));

console.log(user);