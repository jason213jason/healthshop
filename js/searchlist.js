
$(function () {
    /*页面初始化，key在输入框内显示*/
    /*获取关键字*/
    var urlparams = abc.getUrlKey('key');
    var $input = $('#input').val(urlparams || '');

    /*页面初始化，根据关键字查询第一页数据4条*/
    getsearchdata({
        pername:urlparams,
        sortId:abc.getUrlKey('sortId')

    },function (data) {
        /*渲染数据*/
        $('.product').html(template('list',data));
    })

    $('.search-bar a').on('click',function(){
        /*跳转去搜索列表 带上key*/
        var key = $('.search-bar input').val();
        console.log(key);
        location.href = 'searchlist.html?key='+encodeURI(key);
    });

    /*用户点击搜索根据新关键字搜索商品，重置排序功能*/
    $('.search a').on('tap',function () {
        var key = $('.search-bar input').val();
        console.log(key);
        if(!key){
            mui.toast('请输入关键字');
            return false;
        }
        getsearchdata({
            pername: key,

        },function (data) {
            /*渲染数据*/
            $('.product').html(template('list',data));
        });

    });
});
var  getsearchdata = function (params,callback) {
    console.log(params);
    if (params.sortId != null) {
        $.ajax({
            url:'./health/gbrief/bySort',
            type:'get',
            data: {
                sortId:params.sortId
            },
            headers: {
                //Bearer是我的项目需要的,你可以按你的需求规范格式
                'token': cookie.get("token"),
            },
            dataType:'json',
            success:function (result) {
                console.log(result);
                glist.gbriefs = result.data;
            }
        });
    }else if (params.pername != null){
        $.ajax({
            url:'./health/gbrief/bySort',
            type:'get',
            data: {
                key:params.pername
            },
            headers: {
                //Bearer是我的项目需要的,你可以按你的需求规范格式
                'token': cookie.get("token"),
            },
            dataType:'json',
            success:function (result) {
                console.log(result);
                glist.gbriefs = result.data;
            },
            error:function(e){
                console.log(e);
                alert("请重新登录");
                location.href = 'login.html';
            }
        });
    }else{
        $.ajax({
            url:'./health/gbrief/getList',
            type:'get',
            data:{
                sortId:0
            },
            headers: {
                //Bearer是我的项目需要的,你可以按你的需求规范格式
                'token': cookie.get("token"),
            },
            dataType:'json',
            success:function (result) {
                console.log(result);
                glist.gbriefs = result.data;
            },
            error:function(e){
                console.log(e);
                alert("请重新登录");
                location.href = 'login.html';
            }
        });
    }
};