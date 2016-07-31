$(function(){
    $.ajax({
        type: 'get',
        url: 'product.txt',
        success: function (msg) {
            addCar(msg);
            addEvent();
            like(msg);
        }
    });
    $(".ssk_l").bind("focus", function () {
        if ($(".ssk_l").val() == "自营") {
            $(".ssk_l").val("");
        }
        $(".ssk_l").css('color', "black");
        $(".ssk_l").bind("blur", function () {
            if ($(".ssk_l").val() == "") {
                $(".ssk_l").val("自营");
                $(".ssk_l").css('color', "darkgray");
            }
        })
    });

    /*猜你喜欢 左右按键*/
    var _left = 0;
    $(".g-list-left").bind("click", function () {
        if (_left != 0) {
            _left += 875;
            $(".g-list-cont>ul").animate({
                left: _left
            }, 500)
        }
    });
    $(".g-list-right").bind("click", function () {
        if (_left != -875) {
            _left -= 875;
            $(".g-list-cont>ul").animate({
                left: _left
            }, 500)
        }
    });
    $(".c_item_oper").each(function () {
        $(this).children("span").bind("click", function () {
            if (confirm("确定删除该商品")) {
                $(this).parent().parent().remove();
            }
        });
    });
    $('.all').each(function () {
        $(this).bind("change", function () {
            s = 0;
            sp = 0;
            if ($(this).prop("checked")) {
                $('.all').prop("checked", true);
                $(".c_item_ck>input").prop("checked", true);
                $(".c_item_ck>input").parent().parent().css("background", "#f3f3f3");
                for (var i = 0; i < $(".c_item_ck>input").length; i++) {
                    if ($(".c_item_ck>input").eq(i).prop("checked")) {
                        c = parseInt($(".c_item_ck>input").eq(i).parent().parent().find("input[type=text]").val());
                        p = parseFloat($(".c_item_ck>input").eq(i).parent().parent().find(".c_item_sumCount").text());
                        s = s + c;
                        sp = sp + p;
                    }
                }
            } else {
                $('.all').prop("checked", false);
                $(".c_item_ck>input").prop("checked", false);
                $(".c_item_ck>input").parent().parent().css("background", "none");
            }
            $(".allGoods>span").text(s);
            $(".amount-sum>span").text(s);
            sp = sp.toFixed(2);
            $(".price-sum>span").text("￥" + sp);
        });
    });

    $(".del").bind("click",function(){
        for(var i=$(".c_item_ck>input").length-1;i>=0;i--){
            if($(".c_item_ck>input").eq(i).prop("checked")){
                $(".c_item_ck>input").eq(i).parent().parent().remove();
            }
        }
    });

    $(".addCare").bind("click",function(){
        $(".myCare").html("");
        for(var i=$(".c_item_ck>input").length-1;i>=0;i--){
            if($(".c_item_ck>input").eq(i).prop("checked")){
                var self=$(".c_item_ck>input").eq(i).parent().parent().clone(true);
                $(".myCare").append(self);
            }
        }
        $(".myCare>.c_item>.c_item_ck>input").remove();
    });
});
var s, c, p,sp;
function addCar(msg){
    msg=eval('('+msg+')');
    for(var i=0;i<2;i++){
        var content=$('<div class="c_item">' +
            '<div class="c_item_ck"><input type="checkbox"/></div>' +
            '<div class="c_item_goods">' +
            '<img src="images/'+msg[i].url+'" alt=""/>'+
            '<div class="c_item_msg">'+msg[i].desc+'</div>' +
            '<div class="c_item_col">颜色：'+msg[i].col+'<br/>尺码：'+msg[i].size+'</div></div>' +
            '<div class="c_item_price">'+msg[i].price+'</div>' +
            '<div class="c_item_count"><a href="javascript:void(0)">-</a><input type="text" value="'+msg[i].count+'"><a href="javascript:void(0)">+</a></div>'+
            '<div class="c_item_sumCount">'+(msg[i].price*msg[i].count).toFixed(2)+'</div>' +
            '<div class="c_item_oper"><span>删除</span></div></div>');
        $('.container').append(content);
        $('.c_item_count').children().css("float","left");
        $('.c_item_count>a:nth-child(1)').css("border-right",0);
        $('.c_item_count>a:nth-child(3)').css("border-left",0);
        $('.c_item_count').children("input").css({"width":"50px","height":"20px","text-align":"center","border":"1px solid #cacbcb"});
        $('.c_item_oper>span').css("cursor","pointer");
    }

    $(".c_item_ck>input").each(function() {
        $(this).bind("change", function () {
            changeSum();
            if ($(".c_item_ck>input:checked").length == $(".c_item_ck>input").length) {
                $(".c_item_ck>input:checked").parent().parent().css("background", "#f3f3f3");
                $('.all').prop("checked", true);
            } else {
                $(".c_item_ck>input").parent().parent().css("background", "none");
                $(".c_item_ck>input:checked").parent().parent().css("background", "#f3f3f3");
                $('.all').prop("checked", false);
            }
        });
    });
}

/*猜你喜欢 列表*/
function like(msg){
    msg=eval('('+msg+')');
    for(var i=2;i<msg.length;i++){
        var content=$("<li><img src='images/"+msg[i].url+"'/>" +
        "<a href='#'>"+msg[i].desc+"</a>" +
        "<p>￥"+msg[i].price+"</p>" +
        "<button>加入购物车</button></li>");
        $('.g-list-cont>ul').append(content);
    }
}


var n;
function addEvent(){
      $(".c_item_count").each(function(){
          jianShao($(this).children("a:first"));
          if($(this).children("input").val()==1){
              $(this).children("a:first").text(" ");
              $(this).children("a:first").unbind();
              $(this).children("a:first").css("cursor","auto")
          }
          $(this).children("a:last").bind("click",function(){
              $(this).prev().prev().css("cursor", "pointer");
              n=$(this).prev().val();
              n++;
              $(this).prev().prev().text("-");
              $(this).prev().val(n);
              sumChange($(this).prev());
              jianShao($(this).prev().prev());
              changeSum(); /*点击"-"号改变选择的商品总数和 结算总价*/
          });
          $(this).children("input").bind("change",function(){
              sumChange($(this));
              changeSum();

          });
      });
      function jianShao(obj1){
          obj1.unbind();
          obj1.bind("click", function () {
              n=obj1.next().val();
              obj1.css("cursor", "pointer");
              n--;
              obj1.next().val(n);
              sumChange(obj1.next());
              if (n == 1) {
                  obj1.text(" ");
                  obj1.unbind();
                  obj1.css("cursor", "auto");
              }
              changeSum(); /*点击"-"号改变选择的商品总数和 结算总价*/
          });
      }
      function sumChange(obj){
          var m=obj.val();
          if(m<1){
              alert("商品数量至少为1");
              obj.val("1");
              m=1;
          }
          var pc=parseFloat(obj.parent().prev().text());
          var sum=pc*m;
          sum=sum.toFixed(2);
          obj.parent().next().text(sum);
      }
  }

    function showYouBox(a){
        $(".tab-nav>ul>li").css({"border":"1px solid #ddd","color":"black","height":"24px","top":"2px"});
        $(".tab-nav>ul>li>p").css({"padding":"2px 22px 8px","background":"none","font-weight": "normal"});
        $(".tab-nav>ul>li").eq(a).css({"border-bottom": 0,"color":"red","font-weight": "bold","height":"27px","top":0});
        $(".tab-nav>ul>li").eq(a).find("p").css({"font-weight": "bold","padding":"5px 22px","line-height":"18px","background":"white"});
        $(".c-tabs>div").css("display","none");
        $(".tab-nav").css("display","block");
        $(".c-tabs>div").eq(a+1).css("display","block");
    }

/*改选择的商品数 和 结算总价*/
function changeSum(){
    s = 0;
    sp = 0;
    for (var i = 0; i < $(".c_item_ck>input").length; i++) {
        if ($(".c_item_ck>input").eq(i).prop("checked")) {
            c=parseInt($(".c_item_ck>input").eq(i).parent().parent().find("input[type=text]").val());
            p = parseFloat($(".c_item_ck>input").eq(i).parent().parent().find(".c_item_sumCount").text());
            s = s + c;
            sp = sp + p;
        }
    }
    $(".allGoods>span").text(s);
    $(".amount-sum>span").text(s);
    sp = sp.toFixed(2);
    $(".price-sum>span").text("￥" + sp);
}
