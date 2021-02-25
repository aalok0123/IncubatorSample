function ready() {

    $('body').on('click', '.aDelete', function (e) {

        var deleConfirm = confirm("Do you want to delete this record");
        if (!deleConfirm) {
            return;
        }
        e.preventDefault();

        var id = $(this).attr('data-id')

        if (!(id)) {


            return;
        }
        var token = JSON.parse(localStorage.getItem('authorizationData')).token;
        $.ajax({

            type: 'Post',
            url: '/api/Companies/Delete/' + id,

            headers: {
                Authorization: 'Bearer ' + token
            },
            data: {},
            success: function (result) {

                location.href = '/Companies/Index';
            },
            error: function (error) {
                alert('error');
            }

        });



    });
        
    

    function loadCompany() {
        var token = JSON.parse(localStorage.getItem('authorizationData')).token;
        $.ajax({

            type: 'GET',
            url: '/api/Companies',
            
            headers: {
                Authorization: 'Bearer ' + token
            },
            data: {},
            success: function (result) {

                var newHtml = '';
                if (result.length > 0) {
                    $(result).each(function (i, d) {

                        newHtml = newHtml + "<tr><td>" + d.Name + "</td> <td>" + d.IsActive + "</td><td>" + d.Partner + "</td> <td> <a href='/Companies/Edit/" + d.Id +"'> Edit</a> &nbsp; &nbsp;<a class='aDelete' href='#' data-id='"+d.Id+"'>Delete<a></td> </tr>" 

                    });
                }
                var allCompanyHtml = $('#tBodyAllCompanies');
                allCompanyHtml.append(newHtml);

            },
            error: function (error) {
                alert('error');
            }

        });
    }

    
    function checkLogin() {

        var logindata = localStorage.getItem('authorizationData');
        if (logindata) {

            loadCompany();
        }
        else {
            Location.href = '/Account/login';
        }
    }

    checkLogin();
}

$(document).ready(ready);


