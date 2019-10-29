$(document).ready(function(){
    $('#button').on('click', function(){
        let username = $('#user').val();
        let password = $('#pass').val();

        isUser(username);
        isPass(password);
    });
});

function error(e){
    $(e).css('border', '2px solid red');
    $('.alert-danger').fadeIn(3000)
}
function success(s){
    $(s).css('border', '2px solid green');
    $('.alert-success').fadeIn(3000)
}

function isUser(user){
    if(user == "" || user.length <= 3){
        error('#user');
        $('.alert-danger').fadeOut(3000)
    }else{
        success('#user');
        $('.alert-success').fadeOut(3000)
    }
}
function isPass(pass){
    if(pass == "" || user.length <=3){
        error('#pass');

    }else{
        success('#pass');
    }
}
