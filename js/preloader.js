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
    };
})();
