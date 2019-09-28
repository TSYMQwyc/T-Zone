$(document).ready(function () {
    var R = 0;
    var G = 0;
    var B = 0;
    // var c = Math.floor(255 * Math.random());         //取得0-255之间的随机整数

    var bgChange = setInterval(function () {
        R = Math.floor(255 * Math.random());
        G = Math.floor(255 * Math.random());
        B = Math.floor(255 * Math.random());
        // console.log(R+' '+G+' '+B);
        $("#d3").animate({ backgroundColor: 'rgb(' + R + ',' + G + ',' + B + ')' });
    }, 400);

    $("#n5").gradientify({
        gradients: [
            { start: [255, 0, 0], stop: [255, 248, 0] },
            { start: [255, 248, 0], stop: [5, 255, 0] },
            { start: [5, 255, 0], stop: [0, 255, 251] },
            { start: [0, 255, 251], stop: [0, 3, 255] },
            { start: [0, 3, 255], stop: [253, 0, 255] },
            { start: [0, 3, 255], stop: [255, 0, 0] }

        ],
        transition_time: 0.2
    });
    $("#n4").gradientify({
        gradients: [
            { start: [255, 248, 0], stop: [5, 255, 0] },
            { start: [5, 255, 0], stop: [0, 255, 251] },
            { start: [0, 255, 251], stop: [0, 3, 255] },
            { start: [0, 3, 255], stop: [253, 0, 255] },
            { start: [253, 0, 255], stop: [255, 0, 0] },
            { start: [255, 0, 0], stop: [255, 248, 0] }
        ],
        transition_time: 0.2
    });
    $("#n3").gradientify({
        gradients: [
            { start: [5, 255, 0], stop: [0, 255, 251] },
            { start: [0, 255, 251], stop: [0, 3, 255] },
            { start: [0, 3, 255], stop: [253, 0, 255] },
            { start: [253, 0, 255], stop: [255, 0, 0] },
            { start: [255, 0, 0], stop: [255, 248, 0] },
            { start: [255, 248, 0], stop: [5, 255, 0] }
        ],
        transition_time: 0.2
    });
    $("#n2").gradientify({
        gradients: [
            { start: [0, 255, 251], stop: [0, 3, 255] },
            { start: [0, 3, 255], stop: [253, 0, 255] },
            { start: [253, 0, 255], stop: [255, 0, 0] },
            { start: [255, 0, 0], stop: [255, 248, 0] },
            { start: [255, 248, 0], stop: [5, 255, 0] },
            { start: [5, 255, 0], stop: [0, 255, 251] }
        ],
        transition_time: 0.2
    });
    $("#n1").gradientify({
        gradients: [
            { start: [0, 3, 255], stop: [253, 0, 255] },
            { start: [253, 0, 255], stop: [255, 0, 0] },
            { start: [255, 0, 0], stop: [255, 248, 0] },
            { start: [255, 248, 0], stop: [5, 255, 0] },
            { start: [5, 255, 0], stop: [0, 255, 251] },
            { start: [0, 255, 251], stop: [0, 3, 255] }
        ],
        transition_time: 0.2
    });
    $("#n0").gradientify({
        gradients: [
            { start: [253, 0, 255], stop: [255, 0, 0] },
            { start: [253, 0, 255], stop: [255, 248, 0] },
            { start: [255, 248, 0], stop: [5, 255, 0] },
            { start: [5, 255, 0], stop: [0, 255, 251] },
            { start: [0, 255, 251], stop: [0, 3, 255] },
            { start: [0, 3, 255], stop: [253, 0, 255] }
        ],
        transition_time: 0.2
    });

    //动态七彩边框特效
    var fps = 0;
    var preName = "td";
    var className;
    var afterClassName;
    var borderbg = setInterval(function () {
        if (fps <= 38) {
            className = preName + fps;
            afterClassName = preName + (fps + 1);
            $("#td").removeClass(className).addClass(afterClassName);
            fps += 1;
        }
        else if (fps == 39) {
            $("#td").removeClass("td39").addClass("td0");   //回到头部，循环动画
            fps = 0;        //帧序数清零
        }
    }, 13);

});