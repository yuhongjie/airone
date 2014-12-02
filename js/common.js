/**
 * Created by Administrator on 2014/11/19.
 */
// JavaScript Document
function autoSize(){
    var vw = $(window).width();
    var vh = $(window).height();
    //console.log(vw+"a");
    console.log(vh+"b");
    function percent(originalWidth, originalHeight, stageWidth) {

        var stageHeight = vh,
            percentW = stageWidth / originalWidth,
            percentH = stageHeight / originalHeight,
            rectWidth = originalWidth * percentH;
        //console.log(percentW);
        //console.log(percentH);
        //console.log(rectWidth);
        return (rectWidth >= stageWidth) ? percentH: percentW;
    }
    imagePercent = percent(1920, 1080, vw);

    if(vw<1920&&vh<1080){
        //$('.sence').css({'width':'1920px','height':'1080px','margin-left':'-640px'});
    }else{
        //$('.sence').css({'width':imagePercent * 1920,'height':imagePercent * 1080,'margin-left':-imagePercent * 640});
    }

    //$('.footer_w').css({"top":vh});
    if(vw>1550 && vw<1920 && vh>621){
        $("#fullpage").addClass("screen1");
        $("#fullpage").removeClass("screen2");
        $("#fullpage").removeClass("screen3");
        $("#fullpage").removeClass("screen4");
        //$('.part_d').css({"margin-top":"80px"});
        return false;
    }else if(vw>1350 && vw<1550 && vh>621){
        $("#fullpage").addClass("screen2");
        $("#fullpage").removeClass("screen1");
        $("#fullpage").removeClass("screen3");
        $("#fullpage").removeClass("screen4");
        //$('.part_d').css({"margin-top":"120px"});
        return false;
    }else if(vh<621){
        $("#fullpage").addClass("screen3");
        $("#fullpage").removeClass("screen1");
        $("#fullpage").removeClass("screen4");
        $("#fullpage").removeClass("screen2");
        //$('.part_d').css({"margin-top":"120px"});
        return false;
    }else if(vw==1280&&vh<800){
        $("#fullpage").addClass("screen4");
        $("#fullpage").removeClass("screen1");
        $("#fullpage").removeClass("screen3");
        $("#fullpage").removeClass("screen2");
    }
    else{
        $("body").removeClass("screen1");
        $("body").removeClass("screen2");
        $("body").removeClass("screen3");
        $("body").removeClass("screen4");
        //$('.part_d').css({"margin-top":"0"});
        return false;
    }

}

$(function(){
    autoSize();
    $(window).resize(function(){
        autoSize();
    });
    $(".serviceRight p.link a.weixin").mouseover(function(){
        $(".serviceRight .weixintu").show();
    }).mouseout(function(){
        $(".serviceRight .weixintu").hide();
    });


    $(".intelligence5_a1").mouseenter(function(){
        val =$(this).attr("title");
        $(".title").html(val).css("left","200px").show();
    }).mouseleave(function(){
        $(".title").html("").hide();
    })
    $(".intelligence5_a2").mouseenter(function(){
        val =$(this).attr("title");
        $(".title").html(val).css("left","346px").show();
    }).mouseleave(function(){
        $(".title").html("").hide();
    })
    $(".intelligence5_a3").mouseenter(function(){
        val =$(this).attr("title");
        $(".title").html(val).css("left","462px").show();
    }).mouseleave(function(){
        $(".title").html("").hide();
    })
    $(".intelligence5_a4").mouseenter(function(){
        val =$(this).attr("title");
        $(".title").html(val).css("left","240px").show();
    }).mouseleave(function(){
        $(".title").html("").hide();
    })
    $(".intelligence5_a5").mouseenter(function(){
        val =$(this).attr("title");
        $(".title").html(val).css("left","346px").show();
    }).mouseleave(function(){
        $(".title").html("").hide();
    })


    $(".intelligence5_a6").mouseenter(function(){
        val =$(this).attr("title");
        $(".title1").html(val).css("left","200px").show();
    }).mouseleave(function(){
        $(".title1").html("").hide();
    })
    $(".intelligence5_a7").mouseenter(function(){
        val =$(this).attr("title");
        $(".title1").html(val).css("left","346px").show();
    }).mouseleave(function(){
        $(".title1").html("").hide();
    })
    $(".intelligence5_a8").mouseenter(function(){
        val =$(this).attr("title");
        $(".title1").html(val).css("left","462px").show();
    }).mouseleave(function(){
        $(".title1").html("").hide();
    })
    $(".intelligence5_a9").mouseenter(function(){
        val =$(this).attr("title");
        $(".title1").html(val).css("left","240px").show();
    }).mouseleave(function(){
        $(".title1").html("").hide();
    })
    $(".intelligence5_a10").mouseenter(function(){
        val =$(this).attr("title");
        $(".title1").html(val).css("left","346px").show();
    }).mouseleave(function(){
        $(".title1").html("").hide();
    })

})