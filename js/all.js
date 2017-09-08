/*轮播函数*/
function playInTurn(query,spacetime,animatetime,list){
	var a = 0;
	var animate;
	var time = spacetime;
	var num = query.children().length-1;
	list.children('').click(function(event) {
		a = $(this).index();
		clearTimeout(animate);
		time = spacetime+animatetime;
		query.stop(true, false).animate({left:"-"+a*100+"%"},animatetime);
		list.children().eq(a).addClass('active');
		list.children().eq(a).siblings().removeClass('active');

		animate = setTimeout(function(){
			a = a+1;
			query.animate({left:"-"+a*100+"%"},animatetime,function(){
				if (a>=num) {
					query.css("left",0);
					a = 0;
					list.children().eq(0).addClass('active');
					list.children().eq(0).stop(true, false).siblings().removeClass('active');
				}
				else{
					list.children().eq(a).addClass('active');
					list.children().eq(a).siblings().removeClass('active');
				}
			});
			time = spacetime+animatetime;
			animate = setTimeout(arguments.callee,time);
		},time);
	});

	animate = setTimeout(function(){
		a = a+1;
		query.animate({left:"-"+a*100+"%"},animatetime,function(){
			if (a>=num) {
				query.css("left",0);
				a = 0;
				list.children().eq(0).addClass('active');
				list.children().eq(0).stop(true, false).siblings().removeClass('active');
			}
			else{
			    list.children().eq(a).addClass('active');
			    list.children().eq(a).siblings().removeClass('active');
		    }
		});
		time = spacetime+animatetime;
		animate = setTimeout(arguments.callee,time);
	},time);
}

$("#product_tab").children('li').click(function(event) {
	var num = [0,1,2,3];
	var this_index = $(this).index();
	if($(this).index()==0){
		$("#miner_machine").children('li').show('fast');
	}
	else{
		num.forEach(function(item,index){
			if (index != this_index) {
				$("#miner_machine").children('.case' + index).hide('fast');
			}
			else{
				$("#miner_machine").children('.case' + index).show('fast');
			}
		});
	}
});