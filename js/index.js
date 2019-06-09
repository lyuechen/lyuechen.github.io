function refresh_clock() {
    var refresh = 1000; // Refresh rate in milli seconds
    setTimeout('display_clock()', refresh)
}

function display_clock() {
    var x = new Date();

    // date part ///
    var month = x.getMonth() + 1;
    var day = x.getDate();
    var year = x.getFullYear();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    var x3 = year + '-' + month + '-' + day;

    // time part //
    var hour = x.getHours();
    var minute = x.getMinutes();
    var second = x.getSeconds();
    var daymessage = 'Good ';
    if (hour < 10) {
        hour = '0' + hour;
    }
    // greet message
    if (hour >= 5 && hour <= 11) {
        daymessage += 'Morning!';
    } else if (hour == 12) {
        daymessage += 'Noon!';
    } else if (hour > 12 && hour <= 17) {
        daymessage += 'Afternoon!';
    } else {
        daymessage += 'Evening!';
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    x3 = x3 + ' ' + hour + ':' + minute + ':' + second;

    document.getElementById("clock").innerHTML = x3;
    document.getElementById("day_message").innerHTML = daymessage + " Welcome to My Website!";
    refresh_clock();
}

window.onload = function () {
    var body = document.body;
    body.style.background = 'url(../images/3.jpg)';

    var change_btn = document.getElementById("change_btn");
    change_btn.onclick = function ()/*点击事件*/ {
        var image_url = function () {//获取随机图片的路径方法
            var image_path = "../images/";//定义背景图片的路径常量部分；
            var image_index = parseInt(Math.floor(Math.random() * 3));//用random函数获取范围在0-2的随机数字并向下取整
            //转化成int数值类型 //利用字符串拼接返回图片路径
            return image_path + image_index + '.jpg';
        };
        body.style.background = 'url(' + image_url() + ')';
    };

    var clock = document.getElementById("clock");
    clock.onload = display_clock();
};