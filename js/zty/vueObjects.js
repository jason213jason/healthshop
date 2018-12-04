/* 目录 */
var vueSort = new Vue({
	el:'#sort',
	data:{
		row:[]
	}
});

/* 首页商品 */
var glist = new Vue({
	el:'#gbrief-list',
	data:{
		gbriefs:[]
	}
});


var orders = new Vue({
	el:'#order',
	data:{
		list:[]
	},
	methods:{
		buyP:function(index){
			this.list[index].buy = this.list[index].buy + 1;
		},
		buyD:function(index){
			this.list[index].buy = this.list[index].buy - 1;
		}
	}
});


var gdetail = new Vue({
	el:'#ddd',
	data:{
		detail:[]
	}
});

var address = new Vue({
	el:'.address',
	data:{
		list:[]
	}
});