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

    $('#deal').click(function(){
        var addressId = $('input[name="address_choose"]:checked').attr('value');
        console.log(addressId);

        $('input[class="son_check"]:checked').each(function(){
            console.log($(this).attr('orderId'));
            var orderId = $(this).attr('orderId');
            var index = $(this).attr('index');
            var test = {
                    userId: userId,
                    id: orderId,
                    paid: true,
                    buy: orders.list[index].buy,
                    addressId: addressId
                }
                console.log(test);
            $.ajax({
                url:'health/orders/update',
                type:'POST',
                dataType:'json',
                data:{
                    userId: userId,
                    id: orderId,
                    paid: 1,
                    buy: orders.list[index].buy,
                    addressId: addressId
                },
                headers: {
                    //Bearer是我的项目需要的,你可以按你的需求规范格式
                    'token': cookie.get("token"),
                },
                success:function(result){
                    console.log(result);
                    
                },
                error:function(e){
                    console.log(e);
                }
            });

        });
        alert("付款完成，等待发货");
        location.href = 'myorder.html';
        
    });
})