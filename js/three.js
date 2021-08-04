// 倒计时提醒框
let t = 4;
var dinshiqi = setInterval(function () {
    console.log(t);
    $("#tips span").text(t + "s")
    t--;
    if (t == -1) {
        clearInterval(dinshiqi);
        $("#big").fadeOut(500);
    }
}, 1000);
$("#cha").click(function () {
    $("#big").fadeOut(500);
})



// 左侧导航栏点击变色效果
$("#leftnav div").click(function () {
    $(this).css("background", "rgb(255,102,0)");
    $(this).children("a").css("color", "#fff");

    $(this).siblings("div").css("background", "#fff");
    $(this).siblings("div").children("a").css("color", "rgb(0,0,0)");
})

// 左侧导航栏跳转效果
$(".leftnav1").click(function () {
    $("html,body").scrollTop(0)
})
$(".leftnav2").click(function () {
    $("html,body").scrollTop(300)
})
$(".leftnav3").click(function () {
    $("html,body").scrollTop(700)
})
$(".leftnav4").click(function () {
    $("html,body").scrollTop(992)
})
$(".leftnav5").click(function () {
    $("html,body").scrollTop(1392)
})
$(".leftnav6").click(function () {
    $("html,body").scrollTop(1592)
})


$(document).scroll(function () {
    let x = $("html,body").scrollTop();

    if (x >= 0 & x < 300) {
        $(".leftnav1").css("background", "rgb(255,102,0)");
        $(".leftnav1").children("a").css("color", "#fff");

        $(".leftnav1").siblings("div").css("background", "#fff");
        $(".leftnav1").siblings("div").children("a").css("color", "rgb(0,0,0)");
    } else if (x >= 300 && x < 700) {
        $(".leftnav2").css("background", "rgb(255,102,0)");
        $(".leftnav2").children("a").css("color", "#fff");

        $(".leftnav2").siblings("div").css("background", "#fff");
        $(".leftnav2").siblings("div").children("a").css("color", "rgb(0,0,0)");
    } else if (x >= 700 && x < 992) {
        $(".leftnav3").css("background", "rgb(255,102,0)");
        $(".leftnav3").children("a").css("color", "#fff");

        $(".leftnav3").siblings("div").css("background", "#fff");
        $(".leftnav3").siblings("div").children("a").css("color", "rgb(0,0,0)");
    } else if (x >= 992 && x < 1392) {
        $(".leftnav4").css("background", "rgb(255,102,0)");
        $(".leftnav4").children("a").css("color", "#fff");

        $(".leftnav4").siblings("div").css("background", "#fff");
        $(".leftnav4").siblings("div").children("a").css("color", "rgb(0,0,0)");
    } else if (x >= 1392 && x < 1592) {
        $(".leftnav5").css("background", "rgb(255,102,0)");
        $(".leftnav5").children("a").css("color", "#fff");

        $(".leftnav5").siblings("div").css("background", "#fff");
        $(".leftnav5").siblings("div").children("a").css("color", "rgb(0,0,0)");
    } else {
        $(".leftnav6").css("background", "rgb(255,102,0)");
        $(".leftnav6").children("a").css("color", "#fff");

        $(".leftnav6").siblings("div").css("background", "#fff");
        $(".leftnav6").siblings("div").children("a").css("color", "rgb(0,0,0)");
    }
})


// 右侧导航栏回到顶部效果
$(".togotop").click(function () {
    $("html,body").animate(
        { scrollTop: 0 },
        {
            time: 500,
            easing: "swing"
        }
    )
})

// 保单以及发票的复选框
$(".baodanbtn").click(function () {
    if ($(".baodanbtn").prop("checked")) {
        $(".fapiao").slideDown(500);
    } else if ($(".baodanbtn").prop("checked") == false) {
        $(".fapiao").slideUp(500);
    }
})

// 授权扣费-------------------------------------------------
// 点击单选按钮,变色,取消另外一个,并且更改下面的阅读要求

$("#danxuan2").click(function () {
    $("#danxuan1").prop("checked", false)

    $("#danxuansp2").css("color", "rgb(64,158,255)");
    $("#danxuansp1").css("color", "rgb(96,98,102)");

    $(".danxuana2").css("display", "inline-block");
    $(".danxuana1").css("display", "none");
})
$("#danxuan1").click(function () {
    $("#danxuan2").prop("checked", false);

    $("#danxuansp1").css("color", "rgb(64,158,255)");
    $("#danxuansp2").css("color", "rgb(96,98,102)");

    $(".danxuana1").css("display", "inline-block");
    $(".danxuana2").css("display", "none");
})


// 保险期限--------------------------------------------------
let now = new Date();



// 获取今天的时间添加在开始日期栏,防止不符合格式,所以需要用三元来判断是否是两位数
let time = now.getFullYear() + "-" + ((now.getMonth() + 1) < 10 ? "0" : "") + (now.getMonth() + 1) + "-" + (now.getDate() < 10 ? "0" : "") + now.getDate();
$(".datestart").prop("value", time);
// 限制开始日期栏的最小选择min
$(".datestart").prop("min", time);

// 限制开始日期栏的最大选择max,最多60天,采用偏函数化的方式
let now2 = new Date(now);
now2.setDate(now.getDate() + 60);
let time2 = now2.getFullYear() + "-" + ((now2.getMonth() + 1) < 10 ? "0" : "") + (now2.getMonth() + 1) + "-" + (now2.getDate() < 10 ? "0" : "") + now2.getDate();
$(".datestart").prop("max", time2);


// 获取开始日期栏的日期,计算后,放入结束日期栏(初始化),采用偏拆解字符串拼接的方式
let start = $(".datestart").prop("value");
let dateyear = +start.substring(0, 4) + 1
let datemonth = start.substring(4, 8)
let dateri = +start.substring(8, 10) - 1
let dateend = dateyear + (datemonth < 10 ? "0" : "") + datemonth + (dateri < 10 ? "0" : "") + dateri;
$(".dateend").prop("value", dateend);

$(".datestart").on("change", function () {
    // 获取开始日期栏的日期,计算后,放入结束日期栏(重复化)
    let start = $(".datestart").prop("value");
    let dateyear = +start.substring(0, 4) + 1
    let datemonth = start.substring(4, 8)
    let dateri = +start.substring(8, 10) - 1
    let dateend = dateyear + (datemonth < 10 ? "0" : "") + datemonth + (dateri < 10 ? "0" : "") + dateri;

    $(".dateend").prop("value", dateend);
})


// ===============================================================================
// 开始校验表格,制定电话号码和身份证的规则

// 总计11位,1开头,第二个位置3~8,其他随意
$.validator.addMethod("isphone", function (value, element, params) {
    let reg = /^1[34578]\d{9}$/;
    return reg.test(value);
})

// 身份证,纯数字15位,18位,或者18位末位带X
$.validator.addMethod("iszhengjian", function (value, element, params) {
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(value);

})

var fm = 0;

// 表单校验成功后======================================================
$.validator.setDefaults({
    submitHandler: function (form) { 
        form.submit()
        fm++;
        if(fm==1){
            alert("提交成功")
        }
    }
});

// 表单校验
$("form").validate({
    //规则

    rules: {
        //  真实姓名,不能为空
        name: "required",
        // 手机号码
        phone: {
            required: true,
            isphone: true
        },
        // 电子邮箱
        email: {
            email: true,
            required: true
        },
        // 身份证
        zhengjian: {
            required: true,
            iszhengjian: true
        },
        city: {
            required: true
        }
    },
    //错误提示信息
    messages: {
        name: "姓名不能为空",
        phone: {
            required: "手机号不能为空",
            isphone: "电话号码填写格式错误"
        },
        email: "请填写正确的电子邮箱",
        zhengjian: {
            required: "身份证号不能为空",
            iszhengjian: "身份证填写格式错误"
        },
        city: "请选择城市"
    }
})

// 表单校验
$("#form2").validate({
    //规则

    rules: {
        //  真实姓名,不能为空
        bename: "required",
        name2: "required",
        // 手机号码
        phone2: {
            required: true,
            isphone: true
        },
        // 身份证
        zhengjian2: {
            required: true,
            iszhengjian: true
        }
    },
    //错误提示信息
    messages: {
        bename: "姓名不能为空",
        name2: "姓名不能为空",
        phone2: {
            required: "手机号不能为空",
            isphone: "电话号码填写格式错误"
        },
        zhengjian2: {
            required: "身份证号不能为空",
            iszhengjian: "身份证填写格式错误"
        }
    }
})


// 提交表单
$(".makesure").click(function () {
    $("form").submit();
})


// 提交表单
$(".makesuresure").click(function () {
    if ($(".bookname").prop("checked") == false) {
        alert("请阅读各项条款");
        return;
    }
    $("form").submit();

})

// 款式选择 根据身份证出生日期计算岁数获得不同区间的岁数钱
var selname = '';
var selmoney = 61;
var agemoney = 0;
var nowyear = new Date().getFullYear();
$(".selectul").click(function () {
    $(this).css("background-color", "rgb(255,134,55)");
    $(this).css("color", "#fff");
    $(this).children("li").css("border-bottom", "1px solid rgb(241,241,241,0.2)");
    $(this).find("span").css("border-bottom", "3px solid #fff");

    $(this).siblings(".selectul").css("background-color", "rgb(255,255,255)");
    $(this).siblings(".selectul").css("color", "rgb(44,62,80)");
    $(this).siblings(".selectul").children("li").css("border-bottom", "1px solid #eee");
    $(this).siblings(".selectul").find("span").css("border-bottom", "3px solid rgb(204,204,204)");
})
// 选择不同款式,底部显示的名字
$(".ul2").click(function () {
    selname = "少儿款";
    selmoney = 61;
    $(".kuanshi").text(selname);
    $(".kuanshiq").text(selmoney + agemoney);
})
$(".ul3").click(function () {
    selname = "基础款";
    selmoney = 131;
    $(".kuanshi").text(selname);
    $(".kuanshiq").text(selmoney + agemoney);
})
$(".ul4").click(function () {
    selname = "常规款";
    selmoney = 197;
    $(".kuanshi").text(selname);
    $(".kuanshiq").text(selmoney + agemoney);
})
$(".ul5").click(function () {
    selname = "高端款";
    selmoney = 327;
    $(".kuanshi").text(selname);
    $(".kuanshiq").text(selmoney + agemoney);
})

$("#zhengjian2").on("blur", function () {
    let am = nowyear - $("#zhengjian2").val().substring(6, 10);
    console.log(am);
    if (am > 0 && am <= 18) {
        agemoney = 0;
        $(".kuanshiq").text(selmoney + agemoney);
    } else if (am > 18 && am <= 50) {
        agemoney = 100;
        $(".kuanshiq").text(selmoney + agemoney);
    } else if (am > 50) {
        agemoney = 300;
        $(".kuanshiq").text(selmoney + agemoney);
    }
})

