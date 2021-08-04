
// nav下拉菜单
$(".nav-yiwai").click(function () {
    $(".nav-list2").fadeToggle(500);
})

// 右导航和左导航的显示
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

// 实现点击锚链接,平滑滚动到指定位置
$(".leftnav1 a").click(function () {
    //给文档设施animate方法
    $("html, body").animate(
        //加以谋私的获取到指定元素的scrollTop值赋值给页面
        { scrollTop: $($(this).attr("name")).offset().top + "px" },
        {
            //设置时间,速度函数
            time: 500,
            easing: "swing"
        }
    );

});
$(".leftnav2 a").click(function () {

    $("html, body").animate(
        { scrollTop: $($(this).attr("name")).offset().top + "px" },
        {
            time: 500,
            easing: "swing"
        }
    );

})

// 轮播图区域
let $lis = $("#lunbo ul li");
let $dians = $(".lunbodian div")
var i = 0;
// 封装按照i值切换图片和轮播点的函数
var autoimg = function () {
    if (i == 7) {
        i = 0;
        $($lis[6]).css("opacity", "0");
        $($dians[6]).css("background-color", "#fff");
    } else if (i == -1) {
        i = 6;
        $($lis[0]).css("opacity", "0");
        $($dians[0]).css("background-color", "#fff");
    }
    $($lis[i]).css("opacity", "1");
    $($dians[i]).css("background-color", "rgb(245,149,6)");
    // 前后都要消除,防止点击前后切换图片出现BUG
    // $($lis[i - 1]).css("opacity", "0");
    // $($dians[i - 1]).css("background-color", "#fff");
    // $($lis[i + 1]).css("opacity", "0");
    // $($dians[i + 1]).css("background-color", "#fff");
    // 使用前后兄弟选择器
    $($($lis[i])).siblings("li").css("opacity", "0");
    $($($dians[i])).siblings("div").css("background-color", "#fff");
}


// 图片,轮播点自动播放
var autoplay = setInterval(function () {
    i++;
    // console.log(i)
    autoimg();
}, 5000)


// 鼠标移入,停止自动播放移出恢复播放,即停止定时器
$("#lunbo").hover(function () {
    clearInterval(autoplay)
}, function () {
    autoplay = setInterval(function () {
        i++;
        autoimg();
    }, 5000)
})

// 点击箭头分别加减i,达到箭头点击切换图片效果
$(".lunboleft").click(function () {
    i = i - 1;
    autoimg();
})
$(".lunboright").click(function () {
    i = i + 1;
    autoimg();
})

// 点击轮播点,控制i的值
for (let a = 0; a < 7; a++) {
    $($(".lunbodian div")[a]).click(function(){
        i = $(this).attr("name");
        autoimg();
    })
}


//模拟获取Index数据,并且插入页面中
// 通过Object.values(要转换的东西),将其转为数组
$.get("http://mock-api.com/NnXejvKy.mock/getindex", function (datas) {
    console.log(datas); 
    let arryimg = Object.values(datas.imgs);
    let arrytext = Object.values(datas.texts);
    let arrya = Object.values(datas.as);
    let arrycookie = Object.values(datas.cookies);
    //   图片部分
    $(".healthimg").each(function(index,element){
        $(element).attr("src",arryimg[index]);
    })
    //   a文本部分
    $(".healtha").each(function(index,element){
        $(element).text(arrya[index]);
    })
    //   文字描述部分
    $(".healthtext").each(function(index,element){
        $(element).append(arrytext[index]);
    })
    //   获取传回的cookies值
    $(".go").each(function(index,element){
        let b = $(element).children("a").attr("href");
        let c = b+"?cookie="+arrycookie[index];
        $(element).children("a").attr("href",c);
        console.log($(element).children("a").attr("href"));
    })
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