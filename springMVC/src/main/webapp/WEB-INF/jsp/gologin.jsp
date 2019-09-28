<%--
  Created by IntelliJ IDEA.
  User: WYC
  Date: 2019/9/24
  Time: 13:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<html>
<head>
    <title>success</title>
    <script src="/static/js/jquery-3.4.1.min.js"></script>
    <script src="/static/js/dist/jquery.validate.min.js"></script>
    <script src="/static/js/messages_zh.js"></script>
    <link rel="stylesheet" href="/static/css/test.css">
</head>
<body>
    <h3>Success</h3>

<h4>${un}</h4>
<h4>${id}</h4>
<div class="test">123</div>
<a href="/hello/static">重定向，静态资源</a>
<form onsubmit="return false" id="loginform">
    <fieldset >
        <legend>登录</legend>
        <p><label>账&nbsp;&nbsp;号：</label><input type="text" name="account" id="account"></p>
        <p><label>密&nbsp;&nbsp;码：</label><input type="password" name="password" id="password">  </p>
        <p><label>验证码：</label><input type="text" name="vcode" id="vcode" maxlength="4"></p>
        <img style="display: none" src="/getImage.do" id="codeImage"/>
        <p><button type="button" id="login">登录</button></p>
    </fieldset>
</form>

</body>
<script>
    $(document).ready(function () {
        $("#vcode").focus(function () {
            $("#codeImage").show();
        });

        $("#codeImage").click(function () {
            var v = new Date().getTime();
            $(this).attr("src", "/getImage.do?"+v);
        });

        $(form_validate());

        $("#login").click(function () {
                var account = $("#account").val();
                var password = $("#password").val();
                var vcode = $("#vcode").val();
                // console.log(account+" -- "+password+" -- "+vcode);
                $.ajax({
                    type: "POST",
                    url: "/verifyInfo" ,
                    data: {
                        "account": account,
                        "password": password,
                        "vcode": vcode
                    } ,
                    success: function (result) {
                        alert(result);
                    },
                    dataType: "text"
                });
            // }
        });
    });

    function form_validate() {
        $("#loginform").validate({
            rules:{
                account: "required",
                password: {
                    required: true,
                    minlength: 5
                },
                vcode: "required"
            },
            messages:{
                account: "请输入账号",
                password: {
                    required: "请输入密码",
                    minlength: "密码至少为5位"
                },
                vcode: "请输入验证码"
            },
            success: "验证成功"
        });
    }
</script>
</html>
