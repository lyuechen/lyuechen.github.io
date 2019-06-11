/* 站点数据库db.js开始 */
function initArray() { /* 定义数组初始化函数 */
    this.length = initArray.arguments.length;
    for (var i = 0; i < this.length; i++) this[i] = initArray.arguments[i];
}

/* 定义待搜索的页面的标题，没有先后顺序，应将待搜索的页面都列出 */
var search_titles = new initArray('Procrastination', 'suppression', '海街日记');
/* 这些页面的详细说明，位置应该与它们的标题一致 */
var search_descriptions = new initArray('Procrastination is the thief of time.', 'The suppression of liberty is always likely to be irrational', '临海古都镰仓，顺山而成的小镇，不起眼的角落里生活着香田家四姐妹。她们的父亲早年和情人离家出走，母亲则干脆将女儿们抛给了外婆照顾。外婆去世后，外孙女们继承了这栋有着悠久历史的大房子。过早担负起家庭重任的大姐香田幸（绫濑遥 饰），尽心尽力照顾着两个妹妹佳乃（长泽雅美 饰）、千佳（夏帆 饰）健康成长。这一天，父亲去世的消息传到姐妹手中。她们结伴而行参加了父亲的葬礼，并且结识了从未谋面的异母妹妹浅野铃（广濑丝丝 饰）。许是血缘中的亲近之感，幸在临行前邀请铃搬来镰仓同住。未过多久，抱着对姐姐们的憧憬，铃迈入了父亲曾经生活过的房子。四季流转，姐妹们的故事悄然上演…… 本片根据吉田秋生的同名漫画改编。');
/* 待搜索页面的地址，建议使用在你站点上的相对地址，位置也应与标题、说明相一致 */
var search_URLs = new initArray('sentence/procrastination.html', 'sentence/suppression.html', 'movie/movie1.html');
/* 站点数据库db.js结束 */