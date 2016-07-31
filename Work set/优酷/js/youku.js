$( function(){
	var mysc=$('.shangchuan');
	var mysc_d=$('.shangchuan i');
	var mysc_m=$('.shangchuan_more');
	mysc.mouseover(function(){
		mysc_m.show();
		mysc_d.addClass('shangchuan_dian');
	})
	mysc.mouseout(function(){
		mysc_m.hide();
		mysc_d.removeClass('shangchuan_dian');
	})
	//我的上传
	var mysc1=$('.pindao');
	var mysc_m1=$('.pindao_more');
	mysc1.mouseover(function(){
		mysc_m1.show(); 
	})
	mysc1.mouseout(function(){
		mysc_m1.hide();
	})
	//频道
	var mynav=$('.nav_top a');
	var mynav_c=$('.nav_top .con');
	var mynav_m=$('.nav_more li');
	mynav.mouseover(function(){
		mynav_c.stop().animate({
			'left':$(this).index()*60+'px'
		},300)
		mynav_m.hide();
		mynav_m.eq($(this).index()).show();
	})
	//NAV导航
	var mymove=$('.list li');
	var mymove_i=$('.nav_bottom img');
	mymove.mouseover(function(){
		mymove.removeClass('on');
		mymove_i.stop().animate({
			'opacity':'0',
			'filter':'alpha(opacity=0)',
			'z-index':'0'
		},600)
		mymove_i.eq($(this).index()).stop().animate({
			'opacity':'1',
			'filter':'alpha(opacity=100)',
			'z-index':'1'
		},600)
		$(this).addClass('on');
	})
	//轮播图
	var yugao_li=$('.yugao_list li');
	var yugao_con=$('.yugao_con div');
	yugao_li.click( function(){
		yugao_li.removeClass('on');
		yugao_con.hide();
		yugao_con.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//电影预告
	var dfbz_li=$('.dfbz_list li');
	var dfbz_con=$('.dfbz_con div');
	dfbz_li.click( function(){
		dfbz_li.removeClass('on');
		dfbz_con.hide();
		dfbz_con.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//东风
	var dfbz_li1=$('.dfbz_list1 li');
	var dfbz_con1=$('.dfbz_con1 div');
	dfbz_li1.click( function(){
		dfbz_li1.removeClass('on');
		dfbz_con1.hide();
		dfbz_con1.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//TOP10
	var dfbz_li2=$('.dfbz_list2 li');
	var dfbz_con2=$('.dfbz_con2 div');
	dfbz_li2.click( function(){
		dfbz_li2.removeClass('on');
		dfbz_con2.hide();
		dfbz_con2.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//每周热门
	var dfbz_li3=$('.dfbz_list3 li');
	var dfbz_con3=$('.dfbz_con3 div');
	dfbz_li3.click( function(){
		dfbz_li3.removeClass('on');
		dfbz_con3.hide();
		dfbz_con3.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//院线精选
	var dfbz_li4=$('.dfbz_list4 li');
	var dfbz_con4=$('.dfbz_con4 div');
	dfbz_li4.click( function(){
		dfbz_li4.removeClass('on');
		dfbz_con4.hide();
		dfbz_con4.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//微电影
	var dfbz_li5=$('.dfbz_list5 li');
	var dfbz_con5=$('.dfbz_con5 div');
	dfbz_li5.click( function(){
		dfbz_li5.removeClass('on');
		dfbz_con5.hide();
		dfbz_con5.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//女性影院
	var dfbz_li6=$('.women_list li');
	var dfbz_con6=$('.women_r_con div');
	dfbz_li6.click( function(){
		dfbz_li6.removeClass('on');
		dfbz_con6.hide();
		dfbz_con6.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//当红女星
	var dfbz_li7=$('.dfbz_list6 li');
	var dfbz_con7=$('.dfbz_con6 div');
	dfbz_li7.click( function(){
		dfbz_li7.removeClass('on');
		dfbz_con7.hide();
		dfbz_con7.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//华语最好看
	var dfbz_li8=$('.gangtai_list i');
	var dfbz_con8=$('.gangtai_con ul');
	dfbz_li8.click( function(){
		dfbz_li8.removeClass('on');
		dfbz_con8.hide();
		dfbz_con8.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//港台经典
	var dfbz_li9=$('.mlj_list li');
	var dfbz_con9=$('.mlj_con div');
	dfbz_li9.click( function(){
		dfbz_li9.removeClass('on');
		dfbz_con9.hide();
		dfbz_con9.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//美利坚
	var dfbz_lia=$('.rty_list li');
	var dfbz_cona=$('.rty_con div');
	dfbz_lia.click( function(){
		dfbz_lia.removeClass('on');
		dfbz_cona.hide();
		dfbz_cona.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//日韩亚
	var dfbz_lib=$('.ozf_list li');
	var dfbz_conb=$('.ozf_con div');
	dfbz_lib.click( function(){
		dfbz_lib.removeClass('on');
		dfbz_conb.hide();
		dfbz_conb.eq($(this).index()).show();
		$(this).addClass('on');
	})
	//欧洲风
	var dfbz_lic=$('.yiyuan_list li');
	var dfbz_conc=$('.yiyuan_con div');
	dfbz_lic.click( function(){
		dfbz_lic.removeClass('on');
		dfbz_conc.hide();
		dfbz_conc.eq($(this).index()).show();
		$(this).addClass('on');
	})

	var guanggao=$('.qiangpiao');
	var guanbi=$('.guanbi');
	guanbi.click(function(){
		guanggao.hide();
		guanbi.hide();
	})
})