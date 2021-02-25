function ready() {

    $('#btnCompanyCreate').click(function (e) {
        debugger
        e.preventDefault();

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
            url: '/api/Companies',
            headers: {
                Authorization: 'Bearer ' + token
            },
            data: {
                Name: name,
                IsActive: isActive,
                Partner: partner
            },
            success: function (result) {

                location.href = '/Companies/Index';
            },
            error: function (error) {
                alert('error');
            }

        });


    });

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
                Partner: partner
            },
            success: function (result) {

                alert('saved');
            },
            error: function (error) {
                alert('error');
            }

        });


    });

    
   
}

$(document).ready(ready);


