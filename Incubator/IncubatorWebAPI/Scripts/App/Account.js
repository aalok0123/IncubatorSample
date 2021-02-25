function ready() {

    $('#btnRegister').click(function (e) {
        e.preventDefault();

        var email = $('#Email').val();
        var password = $('#Password').val();
        var confirmPassword = $('#ConfirmPassword').val();

        if ( !(email && password && confirmPassword)) {
            return
        }

        $.ajax({

            type: 'Post',
            url: '/api/Account/Register',
            data: {
                Email: email,
                Password: password,
                ConfirmPassword:confirmPassword
            },
            success: function (result) {

                alert('saved');
            },
            error: function (error) {
                alert('error');
            }

        });


    });


    $('#btnLogin').click(function (e) {
        e.preventDefault();

        var email = $('#Email').val();
        var password = $('#Password').val();
        

        if (!(email && password )) {
            return
        }
        localStorage.removeItem('authorizationData');

        var data = "grant_type=password&username=" + email + "&password=" + password;
        $.ajax({

            type: 'Post',
            url: '/api/Account/Token',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data: data,
            success: function (response) {

                localStorage.setItem('authorizationData', JSON.stringify({ token: response.access_token, userName: response.userName }));

                location.href = '/';
            },
            error: function (error) {
                alert('login failed');
            }

        });


    });

    $('#linkLogout').click(function (e) {
        e.preventDefault();

        var logindata = localStorage.getItem('authorizationData');


        if (logindata) {

            var token = JSON.parse(localStorage.getItem('authorizationData')).token;
            $.ajax({

                type: 'Post',
                headers: {
                    Authorization: 'Bearer ' + token
                },
                url: 'api/Account/Logout',

                data: {},
                success: function (response) {
                    localStorage.removeItem('authorizationData');
                    location.href = '/Account/Login';
                },
                error: function (error) {
                    alert('Error');
                }

            });
        }
        else {

            location.href = '/Account/Login';
        }

    });

    function checkLogin() {

        var logindata=  localStorage.getItem('authorizationData');
        if (logindata) {
            $('#linkLogout').text('Logout');
        }
        else {
            if (!(location.href.indexOf('login') > 0)) {
                location.href = '/Account/login';
            }
        }
    }

    checkLogin();
}

$(document).ready(ready);


