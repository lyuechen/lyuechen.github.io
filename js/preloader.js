(function()
{
    var tId = setInterval(function()
    {
        if (document.readyState == "complete") onComplete()
    }, 11);

    function onComplete()
    {
        clearInterval(tId);
        var body = document.body;
        body.classList.add("loaded");

        // Get the input field and button
        var search_text = document.getElementById("search_text");
        var search_btn = document.getElementById("search_btn");
        var search_type = document.getElementById("search_type");
        // Execute a function when the user releases a key on the keyboard
        search_text.addEventListener("keyup", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                search_btn.click();
            }
        });
        search_btn.onclick = function () {
            var searchStr = search_text.value; /* 取得表单中的用户输入的搜索字符 */

            if (search_type.value == "google") {
                location.href = "https://www.google.com/search?ie=UTF-8&q=" + searchStr;
            } else if (search_type.value == "baidu") {
                location.href = "http://www.baidu.com/s?wd=" + searchStr;
            } else {
                var string1 = searchStr.toLowerCase();
                /* 转换为小写，避免大小写敏感 */
                var length1 = string1.length;
                var string2 = '';

                if (length1 != 0 && string1 != ' ' && string1 != '　') {
                    /* 滤掉"空"关键字 */
                    for (i = 0; i < length1; i++) {
                        /* 将表单中的用户输入的搜索字符串的空格转换为"+"号 */
                        if (string1.charAt(i) == ' ')
                            string2 += '+';
                        else
                            string2 += string1.charAt(i);
                    }
                    var search = string2.split('+');
                    /* 将转换过的搜索字符串以"+"为分割符分割为一个字符串数组 */
                    uptodataSearch(search);
                    outWin = window.open('', '', '');
                    doc = outWin.document;
                    if (hitCount != 0) {
                        /* 如果检索到符合要求的页面 */
                        doc.write('<p>检索结果：共有' + hitCount + '个页面符合字符串："<b><font color="ff0000">' + string2 + '</font></b>"：</p><ul>');
                        for (i = 0; i < hitCount; i++) {
                            doc.write('<li>');
                            doc.write('<a href="' + search_URLs[index[i]] + '">' + search_titles[index[i]] + '</a> ');
                            doc.write('<p>' + search_descriptions[index[i]] + '</p>');
                            /* 把检索到的数据一一列出 */
                            doc.write('</li>');
                        }
                        doc.write('</ul>');

                        hitCount = 0;
                    } else
                        doc.write('<p>很抱歉，本站没有关于"<b><font color="ff0000">' + string2 + '</font></b>"的内容！</p>');
                } else
                    alert('请输入要搜索的关键字!');

            }
        };
    }

    var hitCount = 0;
    /* 全局变量hitCount，用于记录符合搜索要求的页数 */
    var index = new Array();
    /* 全局变量数组，用于保存符合搜索要求的的页面在"数据库"db.js中的位置 */
    function uptodataSearch(searchStr) {
        /* 以经过处理的用户输入的搜索字符串为参数的搜索函数 */
        var tmpCount1 = 0
            , tmpCount2 = 0;
        var tmpStr = ''
            , des = '';
        var length1 = searchStr.length
            , length2 = search_titles.length;
        for (var i = 0; i < length2; i++) {
            /* 检索整个站点资料 */
            tmpStr = search_titles[i] + search_descriptions[i];
            /* 将本次循环的站点数据的标题与详细内容合并，作为本次检索的范围*/
            des = tmpStr.toLowerCase();
            /* 同样将它转化为小写 */
            tmpCount1 = tmpCount2;
            if (2 == 2) {
                /* 如果逻辑关系是"不包括(not，!)" */
                if (des.indexOf(searchStr[0]) != -1) {
                    //首先必须满足第一个关键字要求
                    for (j = 1; j < length1; j++) {
                        //检索其它关键字
                        if (des.indexOf(searchStr[j]) == -1)
                            tmpCount2++;
                    }
                    if (tmpCount1 == tmpCount2 - length1 + 1) {
                        /* 只有满足第一个关键字要求但不满足其它任何一个关键字的才算符合检索要求 */
                        index[hitCount] = i;
                        hitCount++;
                    }
                }
            }
        }
    }
})();
