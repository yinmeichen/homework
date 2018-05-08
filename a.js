function ajax(opt) {
    //默认参数
    var type = opt.type || "get";
 var asyns = typeof opt.asyns === "undefined " ? true : opt.asyns;
    //ajax四大部
    //创建核心对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
    var date = "";
    if (opt.date && type === "get") {
        date = "?" + encodeURI(opt.date);
    }
    xhr.open(type, opt.url + date, asyns)
 xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { //请求状态
            if (xhr.status === 200) { //通过请求结果判断是否为200 ，200位成功
                //成功之后回调函数     
                opt.success && opt.success(xhr.responseText);
            } else {
                opt.error && opt.error();
            }
        }
    };
    var posDate = null;
    if (opt.date && type === "post") {
        posDate = encodeURI(opt.date);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    }
    xhr.send(posDate);
}
