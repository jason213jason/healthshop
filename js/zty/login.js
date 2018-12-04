$(document).ready(function(){
    
    /* 登录 */
    $('#login-u').click(function(){
        $.ajax({
            url:'health/user/login',
            type:'POST',
            dataType:'json',
            data:{
                phonenumber:$('#login-phone').val(),
                password:$('#login-password').val()
            },
            success:function(result){
                console.log(result);
                var data = result.resultMsg;
                cookie.set("token",data,0.1);
                location.href = '/';
            },
            error:function(e){
                console.log(e);
                alert(e.responseJSON.message);
            }
        });
    });

    /* 注册 */
    $('#r-submit').click(function(){
        if ($('#r-p1').val() != $('#r-p2').val()) {
            alert("两次输入的密码不一致");
        }else if (!isPhoneNo($('#r-phone').val())) {
            alert("请输入手机号");
        }else{
            $.ajax({
                url:'health/user/add',
                type:'POST',
                dataType:'json',
                data:{
                    phonenumber:$('#r-phone').val(),
                    password:$('#r-p1').val(),
                    nickname:$('#r-name').val()
                },
                success:function(result){
                    console.log(result);
                    alert("注册成功");
                    location.reload();
                },
                error:function(e){
                    console.log(e);
                    alert(e.responseJSON.message);
                }
            });
        }
    });

    // 验证手机号
    function isPhoneNo(phone) { 
         var pattern = /^1[34578]\d{9}$/; 
         return pattern.test(phone); 
    }

})