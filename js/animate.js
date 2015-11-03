var animate = {
	main:function(){
		var boxs = document.querySelectorAll('.box'), animateType=[], className, self=this;
		// 获取每个动画元素的动画类型
		for(var i=0,len=boxs.length;i<len;i++){
			className = boxs[i].getAttribute('data-animate-type');
			animateType.push(className);
		}
		// 开始第一个动画
		setTimeout(function(){
			self.animate(boxs,0,animateType);
		},500);
	},
	animate:function(arrBox,i,animateType){
		var self = this,curBox=arrBox[i];
		if(!curBox){
			return;
		}
		// 显示动画元素
		curBox.style.visibility='visible';
		// 开始动画
		curBox.className+=' animated '+animateType[i];
		// 一个动画结束时开始下一个动画
		curBox.addEventListener('webkitAnimationEnd',function(){
			i=i+1;
			self.animate(arrBox,i,animateType);
		},false);		
	}
}
animate.main();
