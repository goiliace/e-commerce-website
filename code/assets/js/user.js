$(document).ready(function() {
    var user_now = JSON.parse(localStorage.getItem('user_now'))
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
        })
    }
    $('#signInModal').on('shown.bs.modal', function() {
        $('#myInput').focus()
    });
})