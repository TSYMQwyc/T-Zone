$(document).ready(function () {
    var timer = null;   //计时器
    var index = 0;      //轮播图片索引
    var orderList = $("#order_list li");
    
    if(timer){
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(auto, 3000);

    function auto() {
        index++;
        if(index >= orderList.length){
            index = 0;
        }
        changeImg(index);
    }
    
    function changeImg(orderIndex) {
        // console.log(orderIndex);
        for(var i = 0; i < orderList.length; i++){
            orderList[i].className = "";
        }
        orderList[orderIndex].className = "active";
        $("#img_list").animate({marginLeft: -960 * orderIndex + 'px'}, 750);
        index = orderIndex;
    }

    $("#order_list li").click(function () {
        index = $(this).index();
        changeImg(index);
    });

    $(".frame").mouseenter(function () { 
        clearInterval(timer);
        $("#previous").fadeIn("slow");
        $("#next").fadeIn("slow");
    });
    $(".frame").mouseleave(function () { 
        timer = setInterval(auto, 3000);
        $("#previous").fadeOut("slow");
        $("#next").fadeOut("slow");
    });

    $("#previous").click(function () { 
        if(index == 0){
            index = 3;
            changeImg(index);
        }
        else{
            changeImg(index-1);
        }
    });

    $("#next").click(function () { 
        if(index == 3){
            index = 0;
            changeImg(index);
        }
        else{
            changeImg(index+1);
        }
    });
});
