function ready() {

    

    $('#btnEditCompany').click(function (e) {
        e.preventDefault();

        var id = $('#Id').val();
        var name = $('#Name').val();
        var isActive = $('#IsActive').val();
        var partner = $('#Partner').val();

        if (!(name && isActive && partner)) {

            alert('please enter all details');
            return;
        }
        var token = JSON.parse(localStorage.getItem('authorizationData')).token;
        $.ajax({

            type: 'Post',
            url: '/api/Companies/' + id,

            headers: {
                Authorization: 'Bearer ' + token
            },
            data: {
                Name: name,
                IsActive: isActive,
                Partner: partner,
                Id:id
            },
            success: function (result) {

                location.href='/Companies/Index';
            },
            error: function (error) {
                alert('error');
            }

        });


    });


    function loadEditCompany() {

        var lastParem = location.href.lastIndexOf("/") + 1;
        var token = JSON.parse(localStorage.getItem('authorizationData')).token;
            
        var companyId = location.href.substring(lastParem, location.href.length);
        $.ajax({

            type: 'GET',
            url: '/api/Companies/' + companyId,
            data: {},
            

            headers: {
                Authorization: 'Bearer ' + token
            },
            success: function (result) {

                $('#Id').val(result.Id);
                $('#Name').val(result.Name);
                if (result.IsActive) {
                    $('#IsActive').prop('checked',true);
                }
                else {
                    $('#IsActive').prop('checked', false);
                }
                
                $('#Partner').val(result.Partner);

            },
            error: function (error) {
                alert('error');
            }

        });
    }

    function checkLogin() {

        var logindata = localStorage.getItem('authorizationData');
        if (logindata) {
            loadEditCompany();
        }
        else {
            $('#linkLogout').text('Login');
        }
    }

    checkLogin();
}

$(document).ready(ready);


