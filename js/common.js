window.abc ={};
    abc.getParamsByUrl = function () {
        /*以对象存储地址栏信息*/
        var params = {};
        var search = location.search;
        if (search){
            search = search.replace('?','');
            var arr = search.split('&');
            arr.forEach(function (item,i) {
                var itemArr = item.split('=');
                params[itemArr[0]] = itemArr[1];
            });
        };
        console.log(params);
        return params;
    };
