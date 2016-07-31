/**
 * Created by 磊 on 2016/1/13.
 */


$(function(){
    var s;
    var addressArr=["北京","天津","上海","广州","成都","黑龙江","天津","上海","广州",
        "成都","北京","天津","上海","广州","成都","北京","天津","上海","广州","成都","北京","天津","上海","成都","钓鱼岛"];
    $(".changeAddress").append("<ul></ul>");
    for(var i=0;i<addressArr.length;i++){
        $(".changeAddress>ul").append($("<li><a href='javascript:void(0)'>"+addressArr[i]+"</a></li>"));
        s=$(".changeAddress>ul>li>a").eq(0);
        if(i==0){
            $(".changeAddress>ul>li>a").eq(0).css({"background-color":"red","color":"white"})
        }
        $(".changeAddress>ul>li:nth-child(5n+1)").css("margin-left","10px")
    }
    $(".changeAddress>ul>li>a").bind("click",function(){
        s=$(this);
        $(".changeAddress>ul>li>a").not($(this)).css({"background":"none","color":"gray"});
        $(this).css({"background-color":"red","color":"white"});
        $(".here").text($(this).text());
    });
    $(".changeAddress>ul>li>a").bind("mouseover",function(){
        $(".changeAddress>ul>li>a").not($(this)).css({"background":"none","color":"gray"});
        $(this).css({"background-color":"darkgray","color":"white"});
        s.css({"background-color":"red","color":"white"});
        $(".changeAddress>ul>li>a").bind("mouseout",function(){
            $(".changeAddress>ul>li>a").not(s).css({"background":"none","color":"gray"});
        });
    });

    /*手机品牌logo*/
    var u1=$("<ul></ul>");
    for(var i=0;i<18;i++){
        var l1=$('<li><a href="#"><img src="images/5631ccb3N34db53b3.jpg" alt=""/>华为（HUAWEI）</a></li>');
        u1.append(l1);
    }
    $('.slm').append(u1);

    var u2=$("<ul></ul>");
    for(var i=0;i<7;i++){
        var l2=$('<li><div class="p-img"><a href="#"><img src="images/569895a9N81094f6e.jpg" alt=""/></a></div>' +
            '<div class="p-price"><em>￥</em><i>2988.00</i></div>' +
            '<div class="p-name"><a href="#">vivo X6Plus 移动联通双4G<span>手机</span> 4GB+64GB 双卡</a></div>' +
            '<div class="p-comm">已有<span>3342</span>人评价</div></li>');
        u2.append(l2);
    }
    $('.smlc').append(u2);

    var u3=$("<ul></ul>");
    for(var i=0;i<20;i++){
        var l3=$('<li><div class="gl-i-wrap">' +
            '<div class="p-img"><a href="#"><img src="images/55f0e80aN532efcae.jpg" alt=""/></a></div>' +
            '<div class="p-scroll"><ul><li class="simgSelected"><a href="javasript:;"><img src="images/55f0e80aN532efcae-s.jpg" alt=""/></a>' +
            '</li><li><a href="javasript:;"><img src="images/55f0e80aN532efcae-s.jpg" alt=""/></a></li>' +
            '<li><a href="javasript:;"><img src="images/55f0e80aN532efcae-s.jpg" alt=""/></a></li>' +
            '<li><a href="javasript:;"><img src="images/55f0e80aN532efcae-s.jpg" alt=""/></a></li></ul>' +
            '</div><div class="p-price"><span>￥</span><span class="pp-text">5686</span></div>' +
            '<div class="p-name"><a href="#">Apple iPhone 6s (A1700) 64G 玫瑰金色 移动联通电信4G<span>手机</span></a></div>' +
            '<div class="p-commit">已有<a href="#" class="commitSum">3342</a>人评价</div>' +
            '<div class="p-shop"><a href="#">iphone专区</a></div>' +
            '<div class="p-focus"><a href="javascript:;"><i></i>关注</a></div></div></li>')
        u3.append(l3);
    }
    $('.goods-list-v1').append(u3);
    /*var flag1=0;
    $('.more').bind("click",function(){
        if(flag1==0){
            $(this).html("收起<i></i>");
            $(this).find("i").css("background","url(images/search.ele.png) no-repeat 4px -45px");
            flag1=1;
        }else{
            $(this).html("更多<i></i>");
            $(this).find("i").css("background","url(images/search.ele.png) no-repeat 4px 7px");
            flag1=0;
        }
    });*/

    $('.more').bind("click",function(){
        $(this).toggleClass("show");
        $(this).html("更多<i></i>");
        $(this).find("i").css("background","url(images/search.ele.png) no-repeat 4px 7px");
        $(".show").html("收起<i></i>");
        $(".show").find("i").css("background","url(images/search.ele.png) no-repeat 4px -45px");

    });

    $(".feature ul li a").each(function(){
        $(this).bind("click",function(){
            $(this).toggleClass("select-a");
            $(this).children("i").css("background-position","1000px 1000px");
            $(".select-a").children("i").css("background-position","-1px -107px");
        })
    })
});

function showNav(x){
    $(".leftNav>ul>li").eq(x).css({"background":"#f7f7f7","color":"#B71A21"});
    $(".leftNav>ul>li").eq(x).find("a").css("color","#B71A21");
    $(".leftNav>ul>li").eq(x).find("span").css("display","none");
    $(".leftNavBox").show();
    $(".leftNavBox>div").hide();
    $(".leftNavBox>div").eq(x).show();

    $(".leftNav>ul>li").eq(x).bind("mouseleave",function(){
        $(".leftNav>ul>li").eq(x).css({"background":"none","color":"#f7f7f7"});
        $(".leftNav>ul>li").eq(x).find("a").css("color","#f7f7f7");
        $(".leftNav>ul>li").eq(x).find("span").css("display","block");
    });
    $(".leftNav").bind("mouseleave",function(){
        $(".leftNav>ul>li").eq(x).css({"background":"none","color":"#f7f7f7"});
        $(".leftNav>ul>li").eq(x).find("a").css("color","#f7f7f7");
        $(".leftNav>ul>li").eq(x).find("span").css("display","block");
        $(".leftNavBox").hide();
    });
}
