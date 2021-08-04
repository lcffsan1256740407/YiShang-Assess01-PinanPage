
// 获取首页跳转传来的cookie值
var cookie = window.location.href.split("?")[1].split("=")[1];
console.log(cookie);

$.get(
    "http://mock-api.com/NnXejvKy.mock/getsecond?cookie="+cookie,
    function(datas){
        console.log(datas.data);
        $(".name").text(datas.data.name);
        $(".people").text(datas.data.people);
        $(".time").text(datas.data.time);
        $(".region").text(datas.data.region);
        $(".baodan").text(datas.data.baodan);
        $(".book").text(datas.data.book);
        $(".money").text(datas.data.money);
    }
)

// nav下拉菜单
$(".nav-yiwai").click(function () {
    $(".nav-list2").fadeToggle(500);
})

// 右导航和坐导航的显示
$(document).scroll(function () {
    // console.log($(document).scrollTop())

    //右导航栏最后一个元素展示
    if ($(document).scrollTop() > 1000) {
        $(".toTop").fadeIn(300);
    } else {
        $(".toTop").fadeOut(300);
    }

    //左导航栏展示
    if ($(document).scrollTop() > 984) {
        $("#leftnav").show(0);
    } else {
        $("#leftnav").hide(0);
    }

    //左导航栏元素对应颜色变化
    if ($(document).scrollTop() > 984 && $(document).scrollTop() < 2236) {
        $(".leftnav1").css("background-color", "rgb(255,102,0)");
    } else {
        $(".leftnav1").css("background-color", "");
    }

    if ($(document).scrollTop() >= 2236) {
        $(".leftnav2").css("background-color", "rgb(255,102,0)");
    } else {
        $(".leftnav2").css("background-color", "");
    }
})

// 右导航最后一个元素点击TP到顶部
$(".toTop").click(function(){

    $("html").animate(
        {
            scrollTop:0
        },
        {
            time:500,
            easing:"swing"
        }
    )

})

//  pagelist1中的表格切换
$(".list1").click(function () {
    $(".table1").css("display", "table");
    $(".table2").css("display", "none");

    $(" .list1").css("background-color", "rgb(96,198,198)");
    $(" .list1").css("color", "#fff");
    $(" .list2").css("background-color", "rgb(207,227,227)");
    $(" .list2").css("color", "rgb(102,102,102)");
})
$(".list2").click(function () {
    $(".table1").css("display", "none");
    $(".table2").css("display", "table");

    $(" .list2").css("background-color", "rgb(96,198,198)");
    $(" .list2").css("color", "#fff");
    $(" .list1").css("background-color", "rgb(207,227,227)");
    $(" .list1").css("color", "rgb(102,102,102)");
})


//  页面切换介绍区域
$("#pageul li").click(function () {
    $(this).css("background-color", "rgb(255,98,0)");
    $(this).css("color", "#fff");

    $(this).siblings("li").css("background-color", "#fff");
    $(this).siblings("li").css("color", "rgb(102,102,102)");
})

$(".pageli1").click(function () {
    $("#pagelist1").css("display", "table");
    $("#pagelist1").siblings("div").css("display", "none")
})
$(".pageli2").click(function () {
    $("#pagelist2").css("display", "table");
    $("#pagelist2").siblings("div").css("display", "none")
})
$(".pageli3").click(function () {
    $("#pagelist3").css("display", "table");
    $("#pagelist3").siblings("div").css("display", "none")
})
$(".pageli4").click(function () {
    $("#pagelist4").css("display", "table");
    $("#pagelist4").siblings("div").css("display", "none")
})


// 设置监控页面的滚动条高度
$(document).scroll(function () {

    console.log($(document).scrollTop())
    if ($(document).scrollTop() >= 850){
        $("#fixednav").css("display","block");
    }else{
        $("#fixednav").css("display","none");
    }

})

// 点击固定导航栏,下面导航栏也变,然后自动滚动到固定位置800
$(".fixed1").click(function () {
    $(".pageli1").css("background-color", "rgb(255,98,0)");
    $(".pageli1").css("color", "#fff");

    $(".pageli1").siblings("li").css("background-color", "#fff");
    $(".pageli1").siblings("li").css("color", "rgb(102,102,102)");
})
$(".fixed2").click(function () {
    $(".pageli2").css("background-color", "rgb(255,98,0)");
    $(".pageli2").css("color", "#fff");

    $(".pageli2").siblings("li").css("background-color", "#fff");
    $(".pageli2").siblings("li").css("color", "rgb(102,102,102)");
})
$(".fixed3").click(function () {
    $(".pageli3").css("background-color", "rgb(255,98,0)");
    $(".pageli3").css("color", "#fff");

    $(".pageli3").siblings("li").css("background-color", "#fff");
    $(".pageli3").siblings("li").css("color", "rgb(102,102,102)");
})
$(".fixed4").click(function () {
    $(".pageli4").css("background-color", "rgb(255,98,0)");
    $(".pageli4").css("color", "#fff");

    $(".pageli4").siblings("li").css("background-color", "#fff");
    $(".pageli4").siblings("li").css("color", "rgb(102,102,102)");
})
$(".go").click(function(){

    $("html,body").animate(
        { scrollTop:800 },
        {
            time:500,
            easing:"swing"
        }
    )


})

// 点击固定导航栏,自身的变化
$("#fixednav li").click(function(){
    $(this).css("background-color", "rgb(246,246,246)");
    $(this).css("color", "rgb(255,98,0)");

    $(this).siblings("li").css("background-color", "#fff");
    $(this).siblings("li").css("color", "rgb(102,102,102)");
})


