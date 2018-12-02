$(function (){
    $('.search-bar a').on('click',function(){
        /*跳转去搜索列表 带上key*/
        var key =$.trim($('input').val());
        location.href = 'searchlist.html?key='+key;
    });
});