/**
 * Created by User on 2016/1/5.
 */
$(function(){
    setTimeout(function(){
        var overBox=$("<div class='overBox'><div class='activeImg'>" +
            "<img src='images/145171567439765151.jpg'/>" +
            "<img src='images/close.png' class='close'/>" +
            "</div> </div>");
        $("body").append(overBox);
        $(".overBox").css("display","none").fadeIn("quick","linear");
        $(".close").bind("click",function(){
            $(".overBox").fadeOut(1000,"linear",function(){
                $(".overBox").css("display","none");
            });
            setTimeout(function(){
                $(".activity").slideDown(1000,"linear");
            },2000);
        })
    },1000);

    $(".closeActivity").bind("click",function(){
        $(".activity").slideUp(1000,"linear");
    });
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
    $(".ssk_l").bind("focus",function(){
        if($(".ssk_l").val()=="搜“新年礼物”，体验与众不同"){
            $(".ssk_l").val("");
        }
        $(".ssk_l").css('color',"black");
        $(".ssk_l").bind("blur",function(){
            if($(".ssk_l").val()==""){
                $(".ssk_l").val("搜“新年礼物”，体验与众不同");
                $(".ssk_l").css('color',"darkgray");
            }
        })
    });



    /*轮播 左按键*/
    $(".leftImg").bind("click",function(){
        $(".imgList>li").eq(n).css({"opacity":0,"z-index":0});
        $(".circleList>li").eq(n).css("background-color","black");
        n--;
        if(n==-1){
            n=5;
        }
        $(".imgList>li").eq(n).css({"opacity":1,"z-index":1});
        $(".circleList>li").eq(n).css("background-color","red");
    });
    /*轮播 右按键*/
    $(".rightImg").bind("click",function(){
        $(".imgList>li").eq(n).css({"opacity":0,"z-index":0});
        $(".circleList>li").eq(n).css("background-color","black");
        n++;
        if(n==6){
            n=0;
        }
        $(".imgList>li").eq(n).css({"opacity":1,"z-index":1});
        $(".circleList>li").eq(n).css("background-color","red");
    });
    /*轮播图 鼠标悬停*/
    $(".bigImg").bind("mouseover",function(){
        clearInterval(timer);
        clearInterval(timer2);
        $(".leftImg").css("display","block");
        $(".rightImg").css("display","block");
    });
    $(".bigImg").bind("mouseleave",function(){
        clearInterval(timer2);
        $(".leftImg").css("display","none");
        $(".rightImg").css("display","none");
        timer2=setInterval("changeImg()",3000);
    });


    var a=0;
    for(var i=0;i<8;i++){
        $(".re>ul>li").eq(i).find("i").css("background","url(images/55bf27beN7565bc0e.png) no-repeat 0 "+a+"px");
        a=a-25;
    }
    $(".re>ul>li:nth-child(4n)").css("border-right",0);


    var flag=0;
    for(var i=0;i<4;i++){
        $(".re>ul>li").eq(i).hover(
            function(){
                if(flag==0){
                    $(".re>ul").slideUp(1000);
                    $(this).parent().parent().find(".lifeBox").show();
                    $(this).parent().parent().find(".lifeBox").delay(200).animate({
                        top:0
                    },200)
                }
            },
            function(){
                flag=0;
            }
        );
    }
    $(".hiddenBox").bind("click",function(){
        flag=1;
        $(".re>ul").slideDown(600);
        $(".lifeBox").delay(200).animate({
            top:200
        },200,function(){
            $(".lifeBox").hide();
        });
    });

    /*生活服务*/
    $(".lifeContent>ul>li").each(function(){
        $(this).bind("mouseover",function(){
            $(".lifeContent>ul>li").find("a").css({"background":"none","color":"black"});
            $(this).find("a").css({"background":"red","color":"white"});
        })
    });
    $(".lifeList>li").each(function(){
        $(this).bind("mouseenter",function(){
            $(".lifeList>li").css("border-top","2px solid rgba(0,0,0,0)");
            $(".lifeList>li").css("border-bottom","1px solid #e4e4e4");
            $(this).css("border-bottom",0);
            $(this).css("border-top","2px solid red")
        })
    });

    /*今日推荐 四图切换*/
    /*左按钮*/
    $(".todaysLeft").bind("click",function(){
        $(".todaysList>li").eq(2).prependTo(".todaysList");
        $(".todaysList").css("left",-1000);
        $(".todaysList").animate({
            left:0
        },500)
    });
    /*右按钮*/
    $(".todaysRight").bind("click",function(){
        $(".todaysList").animate({
            left:-1000
        },500,function(){
            $(".todaysList>li").eq(0).appendTo(".todaysList");
            $(".todaysList").css("left",0);
        })
    });

    /*红线运动*/
    $(".gb").bind("mouseenter",function(){
        $(".spacer>i").animate({
            right:-6
        },800,function(){
            $(".spacer>i").css("right","101%");
            $(".spacer>i").animate({
                right:-6
            },800)
        })
    })
});
window.onload=function(){
    timer=setInterval("changeImg()",3000);
};
var n=0;
var timer=null;
var timer2=null;
function changeImg(){ /*轮播*/
    $(".imgList>li").eq(n).css({"opacity": 0, "z-index": 0});
    $(".circleList>li").eq(n).css("background-color", "black");
    n++;
    if (n == 6) {
        n = 0;
    }
    $(".imgList>li").eq(n).css({"opacity": 1, "z-index": 1});
    $(".circleList>li").eq(n).css("background-color", "red");
}
function circleStop(obj){ /*小圆圈鼠标悬停轮播停止函数*/
    clearInterval(timer);
    for(var i=0;i<6;i++){
        $(".imgList>li").eq(i).css({"opacity": 0, "z-index": 0});
        $(".circleList>li").eq(i).css("background-color", "black");
    }
    $(".imgList>li").eq(obj).css({"opacity": 1, "z-index": 1});
    $(".circleList>li").eq(obj).css("background-color", "red");
    n=obj;
}

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
    })
    $(".leftNav").bind("mouseleave",function(){
        $(".leftNav>ul>li").eq(x).css({"background":"none","color":"#f7f7f7"});
        $(".leftNav>ul>li").eq(x).find("a").css("color","#f7f7f7");
        $(".leftNav>ul>li").eq(x).find("span").css("display","block");
        $(".leftNavBox").hide();
    });
}
