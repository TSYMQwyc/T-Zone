var ani1, ani2;
var btnArray = [];

$(document).ready(function(){
    content = 0;
    $("#b1").click(function(){
        if(content == 0){
            $(this).text("Has Changed.");
            content = 1;
        }
        else if(content == 1){
            $(this).text("jQ改变文本");
            content = 0;
        }
    });
    
    $("#p3").click(function () { 
        $("#p2").text("已选择工具1");
    });

    //淡入淡出登录框
    //显示
    $("#login").click(function(){
        $("#frame").fadeIn("slow");
        $("#cover").fadeIn("fast");
    });

    //关闭
    $("#frame_close").click(function(){
        $("#frame").fadeOut("fast");
        $("#cover").fadeOut("slow");
    })


    //滑动出现、隐藏下拉菜单
    $("#slideHead").click(function(){
        $("#slideBox").slideToggle("fast", $.mf.change());
    });

    $("#animate").click(function () { 
        var slide = $("#animateBox");
        slide.animate({marginLeft: '200px'}, "slow");
        slide.animate({marginTop: '100px'}, "slow");
        slide.animate({marginLeft: '0px'}, "slow");
        slide.animate({marginTop: '0px'}, "slow");
    });

    $("#animate2").click(function (){
        ani1 = setInterval(function () {
            $("#animateBox").animate({
                    marginLeft: '+=50px',
                    width: '+=50px',
                    height: '+=50px'
                }, 1000);
            }, 1000);
    });

    $("#stop2").click(function () { 
        clearInterval(ani1);
        clearInterval(ani2);
    });

    $("#animate3").click(function ( ) {
        ani2 = setInterval(function () {
            $("#animateBox").toggle();
        }, 1000);
    });

    $("#animate4").click(function () { 
 //       $("#animateBox").addClass("color");
        $("#animateBox").addClass("box");
    });

    $("#ajaxTest").click(function () { 
        $("#div1").load("test.txt", function (response, status, request) {
            if(status == "success"){
                alert("success");
            }            
            if(status == "error"){
                alert("Error:" + request.status + ":" + request.statuText);
            }
        });
    });

    $("#ajaxTest2").click(function(){
        $.get("test.txt", function (data, status) {
            console.log("数据：" + data + " 状态：" + status);
        },
            "text"
        );
    });
    
    $("#ajaxTest3").click(function(){
        $.post("ajax.html", 
        {
            id: "101",
            name: "tsymq"
        },
            function (data, textStatus) {
                console.log("数据：" + data + " 状态：" + textStatus);
            },
            "json"
        );
    });

    $("#each").click(function ( ){ 
        $("button").each(function () {
            btnArray.push($(this).text());
        });
        //console.log(btnArray);
        $("#div1").text(btnArray);
    });

});

//jq自定义函数（集）
$.mf = {
    suc : function (s) {
        alert(s); 
    },

    fal : function(){
        alert("falled!");
    },

    change: function(){
        $("#p1").text("回调函数");
    }
    
};

