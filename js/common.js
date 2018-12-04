window.abc ={};
    abc.getUrlKey = function(name) {
	    // var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    // var r = window.location.search.substr(1).match(reg);
	    // if (r != null) return unescape(r[2]); return null;
	    var url= decodeURI(window.location.search);
	    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&"); 
	    // var url = location.search; 
	    // console.log(paraString);
	    var paraObj = {} 
	    for (i=0; j=paraString[i]; i++){ 
	        // console.log(j);
	        if (j.substring(0,j.indexOf("="))==name) {
	        	return j.substring(j.indexOf("=")+1,j.length);
	        }
	        paraObj[j.substring(0,j.indexOf("="))] = j.substring(j.indexOf("=")+1,j.length); 
	    }
	    console.log(paraObj);
    };
