$(document).ready(function() {
    user = JSON.parse(localStorage.getItem('user'));

    function checkName() {
        console.log('hih');
        var reg = /^([A-Z]+[A-Za-z]*)*(\s+[A-Z]+[A-Za-z]*)*$/;
        if ($("#user-update-name").val().length < 3) {
            $('#user-update-name').addClass("border-danger");
            $(this).next().removeClass("d-none");
            $(this).next().html("Tên phải có ít nhất 3 ký tự");
            return false;
        } else {
            $('#f-name-2').removeClass("d-none");
            if (reg.test($("#user-update-name").val())) {
                $('#user-update-name').removeClass("border-danger");
                $(this).next().addClass("d-none");
                return true;
            } else {
                $('#user-update-name').addClass("border-danger");
                $(this).next().removeClass("d-none");
                $(this).next().html("Tên không đúng định dạng");
                return false;
            }
        }
    };

    function checkEmail() {
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const check = user.find(function(item) {
            return item.email == $("#user-update-email").val()
        })
        if (check) {
            $(this).next().removeClass("d-none");
            $(this).next().html("Email đã tồn tại");
            $('#user-update-email').addClass("border-danger");
            return false;
        }
        if (reg.test($("#user-update-email").val())) {
            $('#user-update-email').removeClass("border-danger");
            $(this).next().addClass("d-none");
            return true;
        } else {
            $(this).next().removeClass("d-none");
            $(this).next().html("Email không đúng định dạng");
            $('#user-update-email').addClass("border-danger");
            return false;
        }
    }

    function checkPhone() {
        const check = user.find(function(item) {
            return item.phone == $("#user-update-phone").val()
        })
        if (check) {

            $('#user-update-phone').addClass("border-danger");
            $(this).next().removeClass("d-none");
            $(this).next().html("Số điện thoại đã tồn tại");
            return false;
        }
        var reg = /^[0-9]{10}$/;
        if (reg.test($("#user-update-phone").val())) {
            $('#user-update-phone').removeClass("border-danger");
            $(this).next().addClass("d-none");
            return true;
        } else {
            $('#user-update-phone').addClass("border-danger");
            $(this).next().removeClass("d-none");
            return false;
        }
    }
    $("#user-update-name").blur(checkName);
    $("#user-update-email").blur(checkEmail);
    $("#user-update-phone").blur(checkPhone);
    var user_now = JSON.parse(localStorage.getItem('user_now'))
    console.log(user_now);
    if (user_now) {
        $('#no-user').addClass('d-none')
        $('#user').removeClass('d-none')
        $('#user-name').text(user_now.name)
        $('#user-email').text(user_now.email)
        $('#user-phone').text(user_now.phone)
        $('#user-address').text(user_now.address)
        $('#log-out').click(function() {
            localStorage.removeItem('user_now')
            $('#no-user').removeClass('d-none')
            location.reload()
        });
        $('#user-updateInfo').click(function() {
            $('#user-update-name').attr('value', user_now.name)
            $('#user-update-email').attr('value', user_now.email)
            $('#user-update-phone').attr('value', user_now.phone)
            $('#user-update-address').attr('value', user_now.address)
        });
        $('#done-update').click(function() {
            if (checkName() && checkEmail() && checkPhone()) {
                var user_update = {
                    id: user_now.id,
                    name: $('#user-update-name').val(),
                    email: $('#user-update-email').val(),
                    phone: $('#user-update-phone').val(),
                    password: user_now.password,
                    address: $('#user-update-address').val()
                }
                console.log(user_update);
                var user = JSON.parse(localStorage.getItem('user'));
                var idx = user.findIndex(function(item) {
                    return item.id == user_now.id
                });
                user[idx] = user_update;
                localStorage.setItem('user', JSON.stringify(user));
                console.log(user);
                user_now = user_update
                localStorage.setItem('user_now', JSON.stringify(user_now))
                location.reload()

                alert('Cập nhập thành công')
            } else {
                alert('Cập nhập thất bại')
            }
        })
    }
    $('#done-pass-update').click(function() {
        var oldPass = $('#old-pass').val();
        var newPass = $('#new-pass').val();
        var rePass = $('#re-pass').val();
        console.log(oldPass, newPass, rePass, user_now.password);
        if (oldPass == user_now.password) {
            if (newPass === rePass && newPass != '') {
                user_now.password = newPass;
                var users = JSON.parse(localStorage.getItem("user"));
                console.log(users);
                users.forEach((e, i) => {
                    if (e.phone == user_now.phone) {
                        users[i] = user_now;
                        localStorage.setItem("user", JSON.stringify(users));
                    }
                });
                console.log(users);

                localStorage.setItem("user_now", JSON.stringify(user_now));
                $('#user-update-pass-modal').modal('hide');
                alert("Update success");
            } else {
                alert("Mật khẩu mới không khớp hoặc bỏ trống");
            }
        } else {
            alert("Mật khẩu cũ không đúng");
        }
    });
    $('#signInModal').on('shown.bs.modal', function() {
        $('#myInput').focus()
    });
})