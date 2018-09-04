window.onload=function() {
    var lis = document.getElementsByClassName("list1");
    var son = document.getElementsByClassName("cover");
    var item = document.getElementsByClassName("item-box");
    var link = document.getElementsByClassName("nav-item");
    console.log(lis);
    console.log(son);
    console.log(item);
//遍历每个li
    for (let i = 0; i < lis.length; i++) {
//当鼠标移入每个li的操作
        lis[i].onmouseover = function () {
            //其余子元素消失
            for (let j = 0; j < son.length; j++) {
                son[j].style.display = "none";
            }
            //当前子元素出现
            son[i].style.display = "block";
        }
        lis[i].onmouseout = function () {
            son[i].style.display = "none";
        }
    }
    for (let i = 0; i < link.length; i++) {
        link[i].onmouseover = function () {
            for (let j = 0; j < item.length; j++) {
                item[j].style.display = "none";
            }
            item[i].style.display = "block";
        }
        link[i].onmouseout = function () {
            item[i].style.display = "none";
        }
    }
    // 透明度轮播图
    let imgs = document.querySelectorAll(".imgss");
    let dots = document.querySelectorAll(".progress");
    let banner = document.querySelectorAll(".banner")[0];
    let leftBtn = document.querySelectorAll(".lfteBtn")[0];
    let rightBtn = document.querySelectorAll(".rightBtn")[0];
    let widths = parseInt(getComputedStyle(imgs[0], null).width);
    console.log(widths);
    imgs[0].style.opacity = 1;
    dots[0].classList.add("active");
    //鼠标移入轮播点
    for (let i = 0; i < dots.length; i++) {
        //鼠标移入
        dots[i].onclick = function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].classList.remove("active");
                //可以改为opacity透明度
                imgs[j].style.opacity = 0;
            }
            dots[i].classList.add("active");
            imgs[i].style.opacity = 1;
            num = i;
        }
    }
    //自动轮播 
    let t = setInterval(move, 2000);
    let num = 0;

    function move() {
        num++;
        if (num == 4) {
            num = 0;
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove("active");
            imgs[j].style.opacity = 0;
        }
        imgs[num].style.opacity = 1;
        dots[num].classList.add("active");
    }

    function moveL() {
        num--;
        if (num < 0) {
            num = 3;
        }
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove("active");
            imgs[j].style.opacity = 0;
        }
        imgs[num].style.opacity = 1;
        dots[num].classList.add("active");
    }

    leftBtn.onclick = function () {
        moveL();
    }
    rightBtn.onclick = function () {
        move();
    }
    banner.onmouseover = function () {
        clearInterval(t);
    }
    banner.onmouseout = function () {
        t = setInterval(move, 2000);
    }

    //双下标轮播图
    let imgs1 = document.querySelectorAll(".imges");
    let dots1 = document.querySelectorAll(".dot1");
    let banner1 = document.querySelectorAll(".list")[0];
    let leftBtn1 = document.querySelectorAll(".leftBtn")[0];
    let rightBtn1 = document.querySelectorAll(".rightBtn")[1];
    let widths1 = parseInt(getComputedStyle(imgs[0], null).width);
    let lie = document.querySelectorAll(".lie");
    console.log(rightBtn1);
    banner_dj(imgs1, dots1, banner1, leftBtn1, rightBtn1, widths1, "lie");
    let imgs2 = document.querySelectorAll(".two");
    let dots2 = document.querySelectorAll(".dot2");
    let banner2 = document.querySelectorAll(".lat1")[0];
    let leftBtn2 = document.querySelectorAll(".left1")[0];
    let rightBtn2 = document.querySelectorAll(".right1")[0];
    let widths2 = parseInt(getComputedStyle(imgs2[0], null).width);
    let lie1 = document.querySelectorAll(".lie");
    banner_dj(imgs2, dots2, banner2, leftBtn2, rightBtn2, widths2, "lie");
    let imgs3 = document.querySelectorAll(".sec");
    let dots3 = document.querySelectorAll(".dot3");
    let banner3 = document.querySelectorAll(".lat2")[0];
    let leftBtn3 = document.querySelectorAll(".left3")[0];
    let rightBtn3 = document.querySelectorAll(".right3")[0];
    let widths3 = parseInt(getComputedStyle(imgs3[0], null).width);
    let lie2 = document.querySelectorAll(".lie");
    banner_dj(imgs3, dots3, banner3, leftBtn3, rightBtn3, widths3, "lie");
    let imgs4 = document.querySelectorAll(".four");
    let dots4 = document.querySelectorAll(".dot4");
    let banner4 = document.querySelectorAll(".lat4")[0];
    let leftBtn4 = document.querySelectorAll(".left4")[0];
    let rightBtn4 = document.querySelectorAll(".right4")[0];
    let widths4 = parseInt(getComputedStyle(imgs4[0], null).width);
    let lie3 = document.querySelectorAll(".lie");
    console.log(banner4);
    banner_dj(imgs4, dots4, banner4, leftBtn4, rightBtn4, widths4, "lie");

    //为你推荐
    let button = document.querySelectorAll("button");
    let list = document.querySelector(".recommend");
    let w = parseInt(getComputedStyle(list, null).width) / 3;
    let times = 0;
    console.log(list);
    button[2].onclick = function () {
        times++;
        if (times == 3) {
            times = 2;
        }
        list.style.transform = `translate(${(-w * times)}px)`;
    }
    button[3].onclick = function () {
        times--;
        if (times == -1) {
            times = 0;
        }
        list.style.transform = `translate(${(-w * times)}px)`;
    }
    //小米闪购
    let list1 = document.querySelector(".box-sec");
    let wh = parseInt(getComputedStyle(list1, null).width) / 2;
    let times1 = 0;
    console.log(button);
    button[0].onclick = function () {
        times1++;
        if (times1 == 2) {
            times1 = 1;
        }
        list1.style.transform = `translate(${(-wh * times1)}px)`;
    }
    button[1].onclick = function () {
        times1--;
        if (times1 == -1) {
            times1 = 0;
        }
        list1.style.transform = `translate(${(-wh * times1)}px)`;
    }

    //购物车
    let head_buy = document.getElementsByClassName('cart')[0];
    let head_buy_box = document.getElementsByClassName('menu')[0];
    head_buy.onmouseenter = function () {
        head_buy_box.style.height = '100px';
        head_buy_box.style.boxShadow = '0 3px 4px 1px rgba(0,0,0,0.1)';
    }

    head_buy.onmouseleave = function () {
        head_buy_box.style.height = 0;
        head_buy_box.style.boxShadow = 'none';
    }
}
