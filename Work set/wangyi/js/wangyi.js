// 导航部分
function nav(xg_b){
	var oNav=document.getElementById(xg_b);
	var oYc=oNav.getElementsByTagName('div')[0];
	oNav.onmouseover=function(){
		oYc.style.display='block';
	}
	oNav.onmouseout=function(){
		oYc.style.display='none';
	}
}

// 登录
function dl(){
	var oDl=document.getElementById('dl');
	var oKk=document.getElementById('kk');
	var oGb=document.getElementById('gb');
	oDl.onclick=function(){
		oKk.style.display='block';
	}
	oGb.onclick=function(){
		oKk.style.display='none';
	}
}

// 头部选项卡部分

// 选项卡部分，用传参吧
function xxk(ul,div){
	var oUl=document.getElementById(ul);
	var aLi=oUl.getElementsByTagName('li');
	var oDiv=document.getElementById(div);
	var aUl=oDiv.getElementsByTagName('ul');
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for (var a = 0; a < aLi.length; a++) {
				aLi[a].className='';
				aUl[a].style.display='none';
			}
			this.className='on'
			aUl[this.index].style.display='block';
		}
	}
}

function xxk2(ul,div){
	var oUl=document.getElementById(ul);
	var aLi=oUl.getElementsByTagName('li');
	var oDiv=document.getElementById(div);
	var aUl=oDiv.children;
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for (var a = 0; a < aLi.length; a++) {
				aLi[a].className='';
				aUl[a].style.display='none';
			}
			this.className='on'
			aUl[this.index].style.display='block';
		}
	}
}


// 图片轮播图
function lbt(){
	var oTu=document.getElementById('tu');
	var aTu=oTu.getElementsByTagName('li');
	var oGang=document.getElementById('gang');
	var aGang=oGang.getElementsByTagName('li');
	var oNext=document.getElementById('next');
	var oPrev=document.getElementById('prev');
	var oBanner=document.getElementById('banner');
	var count=0;
	var time=null;
	for (var i = 0; i < aGang.length; i++) {
		aGang[i].index=i;
		aGang[i].onmouseover=function(){
			for (var a = 0; a < aGang.length; a++) {
				aGang[a].className='';
				aTu[a].style.display='none';
			}
			this.className='on';
			aTu[this.index].style.display='block';
		}
	}
	time=setInterval( function(){
		// clearInterval(time);
		count++;
		if(count==aGang.length){
			count=0;
		}
		for (var i = 0; i < aGang.length; i++) {
			aTu[i].style.display='none';
			aGang[i].className='';
		}
		aTu[count].style.display='block';
		aGang[count].className='on';
	},1000);
	oBanner.onmouseover=function(){
		clearInterval(time);
	}
	oBanner.onmouseout=function(){
		time=setInterval( function(){
			count++;
			if(count==aGang.length){
				count=0;
			}
			for (var i = 0; i < aGang.length; i++) {
				aTu[i].style.display='none';
				aGang[i].className='';
			}
			aTu[count].style.display='block';
			aGang[count].className='on';
		},1000);
	}
	oNext.onclick=function(){
			count++;
			if(count==aGang.length){
				count=0;
			}
			for (var i = 0; i < aGang.length; i++) {
				aTu[i].style.display='none';
				aGang[i].className='';
			}
			aTu[count].style.display='block';
			aGang[count].className='on';
		}
	oPrev.onclick=function(){
		count--;
		if(count==-1){
			count=aGang.length-1;
		}
		for (var i = 0; i < aGang.length; i++) {
			aGang[i].className='';
			aTu[i].style.display='none';
		}
		aTu[count].style.display='block';
		aGang[count].className='on';
	}
}


function zh(){
	var oZh=document.getElementById('zh');
	var aZh=oZh.getElementsByTagName('li');
	var count=0;
	var time=null;
	time=setInterval(function(){
		count++;
		if(count==aZh.length){count=0}
		for (var i = 0; i < aZh.length; i++) {
			aZh[i].style.background='#e8e8e8';
		}
		aZh[count].style.background='red';
	},100)
	oZh.onmouseover=function(){
		clearInterval(time);
	}
	oZh.onmouseout=function(){
		time=setInterval(function(){
			count++;
			if(count==aZh.length){count=0}
			for (var i = 0; i < aZh.length; i++) {
				aZh[i].style.background='#e8e8e8';
			}
			aZh[count].style.background='red';
		},100)
	}
}











// 传参和部分效果
window.onload=function(){
	nav('xg_b');
	nav('xg_b1');
	nav('xg_b2');
	nav('xg_b3');
	nav('xg_b4');
	nav('xg_b5');
	nav('xg_b6');
	nav('xg_b7');
	dl();
	xxk('ul1','div1');
	xxk('ul2','div2');

	xxk2('hd','bd');
	xxk2('hd2','bd2');
	xxk2('hd3','bd3');
	xxk2('hd4','bd4');
	xxk2('hd5','bd5');
	xxk2('hd6','bd6');
	xxk2('hd7','bd7');
	xxk2('hd8','bd8');
	xxk2('hd9','bd9');
	xxk2('hd10','bd10');
	xxk2('hd11','bd11');
	xxk2('hd12','bd12');
	xxk2('hd13','bd13');
	xxk2('hd14','bd14');
	xxk2('hd15','bd15');
	xxk2('hd16','bd16');
	xxk2('hd17','bd17');
	xxk2('hd18','bd18');
	xxk2('hd19','bd19');
	xxk2('hd20','bd20');
	xxk2('hd21','bd21');
	xxk2('hd22','bd22');
	xxk2('hd23','bd23');
	xxk2('hd24','bd24');
	xxk2('hd25','bd25');
	xxk2('hd26','bd26');
	xxk2('hd27','bd27');
	xxk2('hd28','bd28');
	xxk2('hd29','bd29');
	xxk2('hd30','bd30');
	xxk2('hd31','bd31');
	lbt();
	zh();
}