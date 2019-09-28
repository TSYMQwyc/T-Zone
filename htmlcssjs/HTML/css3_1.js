$(document).ready(function(){
    $("#ww").click(function(){                   //@1 等效于@2
        $(this).css({
            "transform" : "rotate(360deg)"
        });
    });
    $("#mxd").click(function(){                            //@2 等效于@1
        $(this).css({
            "transform" : "rotate(360deg)"
        });
    });
});

