var animation={
	main:function(){
		var box = document.querySelectorAll('.box'),self=this;
		setTimeout(function(){
			self.animate(box,0);
		},500);
	},
	animate:function(arrBox,i){
		var self = this;
		if(!arrBox[i]){
			return;
		}
		arrBox[i].className+=' box'+(i+1)+'-hover';
		arrBox[i].addEventListener('webkitTransitionEnd',function(){
			i=i+1;
			self.animate(arrBox,i);
		},false);
	}
}
animation.main();
