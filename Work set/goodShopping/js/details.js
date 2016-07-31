/**
 * Created by ÀÚ on 2016/1/20.
 */



$(function(){
    $('.color ul li a').each(function(){
        $(this).bind('click',function(){
            $('.color ul li>a').css({'border':'1px solid #ddd','padding':'1px'});
            $('.color ul li>i').css("display","none");
            $(this).css({'border':'2px solid #e4393c','padding':0});
            $(this).prev().css("display","block");
        });
    });
    $('.size ul li a').each(function(){
        $(this).bind('click',function(){
            $('.size ul li>a').css({'border':'1px solid #ddd','padding':'3px 5px'});
            $('.size ul li>i').css("display","none");
            $(this).css({'border':'2px solid #e4393c','padding':"2px 4px"});
            $(this).prev().css("display","block");
        });
    });

    $('.btn-add').bind('click',function(){
        var amount=parseInt($("input[name=amount]").val());
        amount++;
        $("input[name=amount]").val(amount);
    });
    $('.btn-reduce').bind('click',function(){
        var amount=parseInt($("input[name=amount]").val());
        if(amount==1){
            amount=2;
        }
        amount--;

        $("input[name=amount]").val(amount);
    })
})