var adminName = "TSYMQ";

//函数定义：静态方法
function valueTest(){
    var x = "我是";
    var y = "大沙雕";
    var z = x + y;
    alert(z);
}

function listTest(){
    var list = ["small", "medium", "big"];
    list[3] = "immense";
    alert(list);
    document.getElementById("temp").innerHTML = list[0] + "&nbsp;" + list[1] + "&nbsp;" + list[2] + "&nbsp;" + list[3];
}

function objTest(){
    var student = {id:10001, name:"tsymq", age:18, sex:"male"};
    alert(Object.keys(student));
    student["name"] = "TSYMQ";
    document.getElementById("temp").innerHTML = "id : " + student.id + " name : " + student.name + " age : " + student.age + " sex : " + student.sex;
}

//函数定义的另一种方式：直接量方法
funcTest = function(){
    console.log("xxx");
}

//第三种方式：动态匿名法
var thirdMethod = new Function("", "console.log('zzxxcc')");

stringTest = function(){
    var str = "I am String \"str1\".";
    console.log(str);
}

function hoistingTest(){
    a = "tsymq";
    var a;
    console.log(a);
    console.log(typeof stringTest);
    console.log(stringTest.toString);
}

function objectArray(){
    var xa = {"name" : "小A", "age" : 20, "sex" : "female"};
    var xb = {"name" : "小B", "age" : 22, "sex" : "male"};
    var xc = {"name" : "小C", "age" : 21, "sex" : "female"};
    var person = [xa, xb, xc];
    document.getElementById("person").innerHTML = person[1].age;
}