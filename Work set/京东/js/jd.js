function header(more){
	var News=document.getElementById(more);
	var I=News.getElementsByTagName('i');
	var Div4=News.getElementsByTagName('div');
	for(var i=0;i<I.length;i++){
		I[i].index=i;
		I[i].onmouseover=function(){
			 for(var a=0; a<I.length;a++){
				I[a].className='';
				Div4[a].style.display='none';	 
			}
			this.className='yue';
			Div4[this.index].style.display='block';	
		}	
	}
	//个护美妆  结束
}


window.onload=function(){
	header('ghmz_num');
	header('tel_num');
	header('dianqi_num');
	header('shuma_num');
	header('yundong_num');
	header('jujia_num');
	header('muying_num');
	header('shipin_num');
	header('tushu_num');
	
	
	var Wo_jd=document.getElementById('kuang1');
	var wo_a=document.getElementById('wo_a');
	var Wo_jd1=document.getElementById('wdjd_b');
	Wo_jd.onmouseover=function(){
		Wo_jd1.style.display='block';
		wo_a.style.width='48px';
		wo_a.style.height='30px';
		wo_a.style.backgroundColor='#fff';
		wo_a.style.borderBottom='1px solid #fff';
		wo_a.style.display='block';
		wo_a.style.borderLeft='1px solid #ddd';
		wo_a.style.borderRight='1px solid #ddd';
		wo_a.style.color='red';
		
	}
	Wo_jd.onmouseout=function(){
		Wo_jd1.style.display='none';
		wo_a.style.backgroundColor='#f1f1f1';
		wo_a.style.borderBottom='1px solid #fff';
		wo_a.style.display='block';
		wo_a.style.borderLeft='none';
		wo_a.style.borderRight='none';
		wo_a.style.color='#666';
	}
	var Wo_jd=document.getElementById('kuang2');
	var Wo_c=document.getElementById('wo_c');
	var Wo_jdc=document.getElementById('wdjd_c');
	Wo_jd.onmouseover=function(){
		Wo_jdc.style.display='block';
		wo_c.style.width='48px';
		wo_c.style.height='30px';
		wo_c.style.backgroundColor='#fff';
		wo_c.style.borderBottom='1px solid #fff';
		wo_c.style.display='block';
		wo_c.style.borderLeft='1px solid #ddd';
		wo_c.style.borderRight='1px solid #ddd';
		wo_c.style.color='red';
		
	}
	Wo_jd.onmouseout=function(){
		Wo_jdc.style.display='none';
		wo_c.style.backgroundColor='#f1f1f1';
		wo_c.style.borderBottom='1px solid #fff';
		wo_c.style.display='block';
		wo_c.style.borderLeft='none';
		wo_c.style.borderRight='none';
		wo_c.style.color='#666';
	}
	var Wo_jd=document.getElementById('kuang3');
	var Wo_d=document.getElementById('wo_d');
	var Wo_jdd=document.getElementById('wdjd_d');
	Wo_jd.onmouseover=function(){
		Wo_jdd.style.display='block';
		wo_d.style.width='48px';
		wo_d.style.height='30px';
		wo_d.style.backgroundColor='#fff';
		wo_d.style.borderBottom='1px solid #fff';
		wo_d.style.display='block';
		wo_d.style.borderLeft='1px solid #ddd';
		wo_d.style.borderRight='1px solid #ddd';
		wo_d.style.color='red';
		
	}
	Wo_jd.onmouseout=function(){
		Wo_jdd.style.display='none';
		wo_d.style.backgroundColor='#f1f1f1';
		wo_d.style.borderBottom='1px solid #fff';
		wo_d.style.display='block';
		wo_d.style.borderLeft='none';
		wo_d.style.borderRight='none';
		wo_d.style.color='#666';
	}
	var Wo_jd=document.getElementById('kuang4');
	var Wo_e=document.getElementById('wo_e');
	var Wo_jde=document.getElementById('wdjd_e');
	Wo_jd.onmouseover=function(){
		Wo_jde.style.display='block';
		wo_e.style.width='48px';
		wo_e.style.height='30px';
		wo_e.style.backgroundColor='#fff';
		wo_e.style.borderBottom='1px solid #fff';
		wo_e.style.display='block';
		wo_e.style.borderLeft='1px solid #ddd';
		wo_e.style.borderRight='1px solid #ddd';
		wo_e.style.color='red';
		
	}
	Wo_jd.onmouseout=function(){
		Wo_jde.style.display='none';
		wo_e.style.backgroundColor='#f1f1f1';
		wo_e.style.borderBottom='1px solid #fff';
		wo_e.style.display='block';
		wo_e.style.borderLeft='none';
		wo_e.style.borderRight='none';
		wo_e.style.color='#666';
	}
	var Wo_jd=document.getElementById('kuang5');
	var Wo_f=document.getElementById('wo_f');
	var Wo_jdf=document.getElementById('wdjd_f');
	Wo_jd.onmouseover=function(){
		Wo_jdf.style.display='block';
		wo_f.style.width='48px';
		wo_f.style.height='30px';
		wo_f.style.backgroundColor='#fff';
		wo_f.style.borderBottom='1px solid #fff';
		wo_f.style.display='block';
		wo_f.style.borderLeft='1px solid #ddd';
		wo_f.style.borderRight='1px solid #ddd';
		wo_f.style.color='red';
		
	}
	Wo_jd.onmouseout=function(){
		Wo_jdf.style.display='none';
		wo_f.style.backgroundColor='#f1f1f1';
		wo_f.style.borderBottom='1px solid #fff';
		wo_f.style.display='block';
		wo_f.style.borderLeft='none';
		wo_f.style.borderRight='none';
		wo_f.style.color='#666';
	}
	//上 导航
	var City=document.getElementById('city');
	var Span=document.getElementById('songzhi');
	var Song=document.getElementById('kuang');
	var CM=document.getElementById('city_more');
	var CMA=CM.getElementsByTagName('a');
	Span.onmouseover=function(){
		CM.style.display='block';
		Song.style.width='70px';
		Song.style.height='30px';
		Song.style.backgroundColor='#fff';
		Song.style.borderBottom='1px solid #fff';
		Song.style.display='block';
		
	}
	
	for(var i=0; i<CMA.length;i++){
		CMA[i].onclick=function(){
			Span.innerHTML=this.innerHTML;
			CM.style.display='none';
			Song.style.backgroundColor='#f1f1f1';		
		}	
	}
  //地址
   var Logo=document.getElementById('logo_r');
   var Logo_1=document.getElementById('logo_shop');
   var Logo_2=document.getElementById('logo_car');
   Logo.onmouseover=function(){
	  	Logo_1.style.display='block';
		Logo_2.style.backgroundColor='#fff';
		Logo_2.style.color='red';
		Logo_2.style.borderBottom='1px solid #fff';
	  }
	   Logo.onmouseout=function(){
	  	Logo_1.style.display='none';
		Logo_2.style.backgroundColor='#f9f9f9';
		Logo_2.style.color='#666';
		Logo_2.style.borderBottom='1px solid #ddd';
	  }
	 //购物车
	
	var NAV=document.getElementById('nav_a');
	var Li=NAV.getElementsByTagName('li');
	var Div=NAV.getElementsByTagName('div');
	for(var i=0; i<Li.length;i++){
		Li[i].index=i;
		Li[i].onmouseover=function(){
			for(var a=0;a<Li.length;a++){
				Li[a].className='';
				Div[a].style.display='none';	
			}
			this.className='og';
			Div[this.index].style.display='block';	
		}
		Li[i].onmouseout=function(){
			for(var a=0;a<Li.length;a++){
				Li[a].className='';
				Div[a].style.display='none';	
			}
			this.className='';
			Div[this.index].style.display='none';	
		}		
	}
		//导航
    var News=document.getElementById('nav_news_bottom');
	var Li2=News.getElementsByTagName('li');
	var Div2=News.getElementsByTagName('div');
	for(var i=0;i<Li2.length;i++){
		Li2[i].index=i;
		Li2[i].onmouseover=function(){
			 for(var a=0; a<Li2.length;a++){
				Li2[a].className='';
				Div2[a].style.display='none';	 
			}
			this.className='om';
			Div2[this.index].style.display='block';	
		}	
	}
	
	//生活服务
	var nav_hot=document.getElementById('nav_r_b_hot');
	var Li=nav_hot.getElementsByTagName('li');
	var Img=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Li.length;i++){
		Li[i].index=i;
		Li[i].onmouseover=function(){
			 for(var a=0; a<Li.length;a++){
				Li[a].className='';
				Img[a].style.display='none';	 
			}
			this.className='action';
			Img[this.index].style.display='block';	
		}	
	}
	//nav  轮廓图
	var nav_hot=document.getElementById('fzxb_dapai_cen');
	var Li1=nav_hot.getElementsByTagName('i');
	var Img1=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Li1.length;i++){
		Li1[i].index=i;
		Li1[i].onmouseover=function(){
			 for(var a=0; a<Li1.length;a++){
				Li1[a].className='';
				Img1[a].style.display='none';	 
			}
			this.className='yue';
			Img1[this.index].style.display='block';	
		}	
	}
	//服装  轮廓
	var News=document.getElementById('fzxb_right');
	var Li3=News.getElementsByTagName('li');
	var Div3=News.getElementsByTagName('div');
	for(var i=0;i<Li3.length;i++){
		Li3[i].index=i;
		Li3[i].onmouseover=function(){
			 for(var a=0; a<Li3.length;a++){
				Li3[a].className='';
				Div3[a].style.display='none';	 
			}
			this.className='active';
			Div3[this.index].style.display='block';	
		}	
	}
	//服装鞋
	var nav_hot=document.getElementById('tel_con_lun');
	var Li5=nav_hot.getElementsByTagName('b');
	var Img5=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Li5.length;i++){
		Li5[i].index=i;
		Li5[i].onmouseover=function(){
			 for(var a=0; a<Li5.length;a++){
				Li5[a].className='';
				Img5[a].style.display='none';	 
			}
			this.className='yue';
			Img5[this.index].style.display='block';	
		}	
	}
	 //手机 结束  轮廓
	var nav_hot=document.getElementById('dianqi_con_lun');
	var Li6=nav_hot.getElementsByTagName('b');
	var Img6=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Li6.length;i++){
		Li6[i].index=i;
		Li6[i].onmouseover=function(){
			 for(var a=0; a<Li6.length;a++){
				Li6[a].className='';
				Img6[a].style.display='none';	 
			}
			this.className='yue';
			Img6[this.index].style.display='block';	
		}	
	}
	//家用电器  结束  轮廓
	var nav_hot=document.getElementById('shuma_con_lun');
	var Li7=nav_hot.getElementsByTagName('b');
	var Img7=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Li7.length;i++){
		Li7[i].index=i;
		Li7[i].onmouseover=function(){
			 for(var a=0; a<Li7.length;a++){
				Li7[a].className='';
				Img7[a].style.display='none';	 
			}
			this.className='yue';
			Img7[this.index].style.display='block';	
		}	
	}
	 //数码  轮廓
	 var nav_hot=document.getElementById('yd_con_bot');
	var Li8=nav_hot.getElementsByTagName('b');
	var Img8=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Li8.length;i++){
		Li8[i].index=i;
		Li8[i].onmouseover=function(){
			 for(var a=0; a<Li8.length;a++){
				Li8[a].className='';
				Img8[a].style.display='none';	 
			}
			this.className='yue';
			Img8[this.index].style.display='block';	
		}	
	}
	//运动  轮廓
	var nav_hot=document.getElementById('jujia_con_bot');
	var Li9=nav_hot.getElementsByTagName('b');
	var Img9=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Li9.length;i++){
		Li9[i].index=i;
		Li9[i].onmouseover=function(){
			 for(var a=0; a<Li9.length;a++){
				Li9[a].className='';
				Img9[a].style.display='none';	 
			}
			this.className='yue';
			Img9[this.index].style.display='block';	
		}	
	}
	 //居 家生活  轮廓
	var nav_hot=document.getElementById('muying_con_bot');
	var Li0=nav_hot.getElementsByTagName('b');
	var Img0=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Li0.length;i++){
		Li0[i].index=i;
		Li0[i].onmouseover=function(){
			 for(var a=0; a<Li0.length;a++){
				Li0[a].className='';
				Img0[a].style.display='none';	 
			}
			this.className='yue';
			Img0[this.index].style.display='block';	
		}	
	}
	//母婴  轮廓
	var nav_hot=document.getElementById('shipin_con_bot');
	var Lia=nav_hot.getElementsByTagName('b');
	var Imga=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Lia.length;i++){
		Lia[i].index=i;
		Lia[i].onmouseover=function(){
			 for(var a=0; a<Lia.length;a++){
				Lia[a].className='';
				Imga[a].style.display='none';	 
			}
			this.className='yue';
			Imga[this.index].style.display='block';	
		}	
	}
	//食品  轮廓
	var nav_hot=document.getElementById('tushu_left_lun');
	var Lib=nav_hot.getElementsByTagName('b');
	var Imgb=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Lib.length;i++){
		Lib[i].index=i;
		Lib[i].onmouseover=function(){
			 for(var a=0; a<Lib.length;a++){
				Lib[a].className='';
				Imgb[a].style.display='none';	 
			}
			this.className='yue';
			Imgb[this.index].style.display='block';	
		}	
	}
	//图书 轮廓
	var nav_hot=document.getElementById('shfw_cen_top');
	var Lic=nav_hot.getElementsByTagName('b');
	var Imgc=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Lic.length;i++){
		Lic[i].index=i;
		Lic[i].onmouseover=function(){
			 for(var a=0; a<Lic.length;a++){
				Lic[a].className='';
				Imgc[a].style.display='none';	 
			}
			this.className='yue';
			Imgc[this.index].style.display='block';	
		}	
	}
	var nav_hot=document.getElementById('shfw_cen_bot');
	var Lid=nav_hot.getElementsByTagName('b');
	var Imgd=nav_hot.getElementsByTagName('img');
	for(var i=0;i<Lid.length;i++){
		Lid[i].index=i;
		Lid[i].onmouseover=function(){
			 for(var a=0; a<Lid.length;a++){
				Lid[a].className='';
				Imgd[a].style.display='none';	 
			}
			this.className='yue';
			Imgd[this.index].style.display='block';	
		}	
	}
}
function Wopen(){
	 window.open('file:///F:/%E4%BD%9C%E4%B8%9A/4.8/%E4%BA%AC%E4%B8%9C%E7%99%BB%E5%BD%95%E7%AA%97%E5%8F%A3.html','_blank')
	
}




























