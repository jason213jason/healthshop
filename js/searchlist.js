$(function () {
    /*页面初始化，key在输入框内显示*/
    /*获取关键字*/
    var urlparams = abc.getParamsByUrl();
    var $input = $('#input').val(urlparams.key || '');

    /*页面初始化，根据关键字查询第一页数据4条*/
    getsearchdata({
        pername:urlparams.key,

    },function (data) {
        /*渲染数据*/
        $('.product').html(template('list',data));
    })

    /*用户点击搜索根据新关键字搜索商品，重置排序功能*/
    $('.search a').on('tap',function () {
        var key = $.trim($input.val());
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
    $.ajax({
        url:'./health/gbrief/getList',
        type:'get',
        data: {search:''},
        dataType:'json',
        success:function (data) {
            console.log(data);
        }
    });
};