<%--
  Created by IntelliJ IDEA.
  User: WYC
  Date: 2019/9/25
  Time: 23:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>SpringMVC uploadfile</title>
</head>
<body>
<form action="/upload" method="post" enctype="multipart/form-data">
<p><label>选择文件：</label><input type="file" name="upload"></p>
    <p><input type="submit" value="上传"></p>
</form>

<br><br>

<form action="/upload2" method="post" enctype="multipart/form-data">
    <p><label>选择文件：</label><input type="file" name="file"></p>
    <p><input type="submit" value="上传"></p>
</form>

<br><br>

<form action="/upload3" method="post" enctype="multipart/form-data">
    <p><label>选择文件：</label><input type="file" name="file"></p>
    <p><input type="submit" value="上传"></p>
</form>
</body>
</html>
