$("#product_tab").children('li').click(function(event) {
	var num = [0,1,2,3];
	var this_index = $(this).index();
	if($(this).index()==0){
		$("#miner_machine").children('li').show('fast');
	}
	else{
		/*num.forEach(function(item,index){
			if (index != this_index) {
				$("#miner_machine").children('.case' + index).css("display","none");
			}
			else{
				$("#miner_machine").children('.case' + index).css("display","block");
			}
		});*/
		for(var i=0;i<4;i++){
		    if(i!=this_index){
				$("#miner_machine").children('.case' + i).hide('fast');
			}
			else{
				$("#miner_machine").children('.case' + i).show('fast');
			}
		}
	}
});