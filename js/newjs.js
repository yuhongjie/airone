/**
 * Created by Administrator on 2014/11/19.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2'],
        anchors: ['part1', 'part2', 'part3', 'part4','part5'],
        //menu: '#menu',
        //easing: 'easeOutBack',
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function(anchorLink, index) {
            //console.log(anchorLink);
            var scrollFunc=function(e){
                e = e || window.event;
                if (e.wheelDelta) {//IE/Opera/Chrome
                    if (e.wheelDelta == 120 && index == 5) {
                        $("#fp-nav").show();
                        $("#section1_5").css("margin-top", "0");
                        $("#section4_5").css("margin-top", "0");
                        $("#section3_6").css("margin-top", "0");
                        $("#footer").css("margin-top", "0");
                    } else if (e.wheelDelta != 120 && index == 5) {
                        $("#fp-nav").hide();
                        $("#section1_5").css("margin-top", "-240px");
                        $("#section4_5").css("margin-top", "-240px");
                        $("#section3_6").css("margin-top", "-240px");
                        $("#footer").css("margin-top", "-190px");
                    } else if (e.wheelDelta == 120 && index != 5) {
                        $("#fp-nav").show();
                        $("#section1_5").css("margin-top", "0");
                        $("#section4_5").css("margin-top", "0");
                        $("#section3_6").css("margin-top", "0");
                        $("#footer").css("margin-top", "0");
                    } else {
                        $("#fp-nav").show();
                        $("#footer").css("margin-top", "0");
                    }

                } else if (e.detail) {//Firefox
                    if (e.detail == -3 && index == 5) { //向上滚动事件
                        $("#fp-nav").show();
                        $("#section1_5").css("margin-top", "0");
                        $("#section4_5").css("margin-top", "0");
                        $("#section3_6").css("margin-top", "0");
                        $("#footer").css("margin-top", "0");
                    } else if (e.detail == 3 && index == 5) {
                        $("#fp-nav").hide();
                        $("#section1_5").css("margin-top", "-240px");
                        $("#section4_5").css("margin-top", "-240px");
                        $("#section3_6").css("margin-top", "-240px");
                        $("#footer").css("margin-top", "-190px");
                    } else if (e.detail == -3 && index != 5) {
                        $("#fp-nav").show();
                        $("#section1_5").css("margin-top", "0");
                        $("#section4_5").css("margin-top", "0");
                        $("#section3_6").css("margin-top", "0");
                        $("#footer").css("margin-top", "0");
                    } else {
                        $("#fp-nav").show();
                        $("#footer").css("margin-top", "0");
                    }
                } //ScrollText(direct);
            }

            if(document.addEventListener){
                document.addEventListener('DOMMouseScroll',scrollFunc,false);
            }//W3C
            window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome

        }
    });

});