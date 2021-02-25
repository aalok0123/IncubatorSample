function ready() {



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

                        newHtml = newHtml +"<tr><td>"+d.Name+"</td> <td>"+d.IsActive+"</td><td>"+d.Partner+"</td> <td> <a href='/Companies/Edit/"+d.Id+"'> Edit</a></td> </tr>" 

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


