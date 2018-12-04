var userId = cookie.get("userId");
$(document).ready(function(){
    console.log(userId);
    $.ajax({
        url:'health/orders/user',
        type:'GET',
        dataType:'json',
        data:{
            userId:userId
        },
        headers: {
            //Bearer是我的项目需要的,你可以按你的需求规范格式
            'token': cookie.get("token"),
        },
        success:function(result){
            console.log(result);
            orders.list = result.data;
        },
        error:function(e){
            console.log(e);
        }
    });

    $.ajax({
        url:'health/address/byUser',
        type:'POST',
        dataType:'json',
        data:{
            id:userId
        },
        headers: {
            //Bearer是我的项目需要的,你可以按你的需求规范格式
            'token': cookie.get("token"),
        },
        success:function(result){
            console.log(result);
            address.list = result.data;
        },
        error:function(e){
            console.log(e);
        }
    });
})