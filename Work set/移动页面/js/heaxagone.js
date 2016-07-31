(function(){
	function change(){
		var font=document.documentElement.clientWidth/320*20;
		document.documentElement.style.fontSize=font+'px';	
	};
	window.addEventListener('resize',change,false);
	change();
})();