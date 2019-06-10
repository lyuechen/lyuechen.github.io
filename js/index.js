function refresh_clock() {
    var refresh = 1000; // Refresh rate in milli seconds
    setTimeout('display_clock()', refresh);
    window.setTimeout('display_status_message()', 100);
    setTimeout('display_weather()', 600000);
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

function display_weather() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://www.tianqiapi.com/api/?version=v1&cityid=101010100', true);
    request.onload = function () {

        var update_time = "";
        var weather_detail = "";

        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            update_time = " 天气信息更新于 " + data.update_time.substring(11) + ' !';

            weather_detail = data.city + " " + '<img height="30" src="../images/weather/' + data.data[0].wea_img + '.png">' + data.data[0].wea + " " + data.data[0].tem;
        } else {
            weather_detail = "Opps! The weather information can't be got!";
        }

        document.getElementById("weather_detail").innerHTML = weather_detail;
        document.getElementById("update_time").innerHTML = update_time;
    };

    request.send();
}

var statusPos = 0;
var welcomeMessage = "Welcome to My Website!"//"欢迎来到 我的小小世界！";
function display_status_message() {
    window.status = welcomeMessage.substring(statusPos, welcomeMessage.length) + "                   ";
    welcomeMessage.substring(0, statusPos);
    statusPos++;

    if (statusPos > welcomeMessage.length) statusPos = 0;
}

window.onload = function () {
    var body = document.body;
    body.style.background = 'url(../images/3.jpg)';

    display_weather();
    display_status_message();

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
