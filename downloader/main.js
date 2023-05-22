// 您好，这是必应。我可以帮您在chrome控制台中添加jszip模块。根据网上搜索结果，您可以使用以下方法：

// - 使用Document的createElement()方法和appendChild()方法，动态地创建一个script标签，并将其添加到文档头部，指定其src属性为jszip模块的URL。例如，如果您想从官方网站加载jszip模块，您可以这样写：

// ```javascript
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js";
// document.head.appendChild(script);
// ```

// - 使用jQuery的getScript()方法，异步地加载jszip模块，并在回调函数中使用它。例如，如果您想从官方网站加载jszip模块，并在加载完成后创建一个zip对象，您可以这样写：

// ```javascript
// $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js", function() {
//   var zip = new JSZip();
//   // do something with zip
// });
// ```

// - 使用ES6的import语法，导入jszip模块，并在模块作用域中使用它。这种方法需要您的chrome浏览器支持ES6模块，并且您需要在manifest.json文件中声明content_scripts的type为"module"。例如，如果您想从官方网站导入jszip模块，并在当前脚本中创建一个zip对象，您可以这样写：

// ```javascript
// import JSZip from "https://cdnjs.cloudflare.com



// $i("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js")


// 创建一个zip对象
// var zip = new JSZip();

// 获取当前页面中的所有超链接元素
// var links = $('a.dimmed') // document.getElementsByTagName("a");

var links = $('a.aalink')

// 定义一个数组，用于存储所有的超链接地址
var urls = [];


// var elem = document.createElement('a');

// 遍历所有的超链接元素，将它们的href属性添加到urls数组中
for (var i = 0; i < links.length; i++) {
    var url = links[i].href;
    urls.push(url);
    // elem.href = url; 
    // elem.download = url; 
    // elem.id = "downloadAnchor"; 
    // document.body.appendChild(elem); 
    // $('#downloadAnchor').click();
}



// 定义一个函数，用于异步地下载一个文件，并返回一个Promise对象
function downloadFile(url) {
    return new Promise(function (resolve, reject) {
        // 创建一个XMLHttpRequest对象
        var xhr = new XMLHttpRequest();
        // 设置响应类型为blob
        xhr.responseType = "blob";
        // 当请求成功时，调用resolve函数，并传入xhr对象
        xhr.onload = function () {
            resolve(xhr);
        };
        // 当请求失败时，调用reject函数，并传入错误信息
        xhr.onerror = function () {
            reject(new Error("Download failed: " + url));
        };
        // 打开请求，使用GET方法和指定的url
        xhr.open("GET", url);
        // 发送请求
        xhr.send();
    }).then(function (xhr) {
        newurl = xhr.responseURL
        // 获取文件名，从url中截取最后一个/后面的部分
        var filename = newurl.substring(newurl.lastIndexOf("/") + 1);
        filename = decodeURIComponent(filename);
        // 创建一个a元素，用于触发下载操作
        var a = document.createElement("a");
        // 设置a元素的href属性为创建的blob对象的URL
        a.href = window.URL.createObjectURL(xhr.response);
        // 设置a元素的download属性为文件名，用于指定下载后的文件名
        a.download = filename;
        // 将a元素添加到zip对象中，作为一个文件
        // zip.file(filename, a.href);
        // 返回xhr对象，以便后续操作

        document.body.appendChild(a);
        //     // 触发a元素的点击事件，开始下载zip文件
        a.click();
        // return xhr;
    });
}
urls.map(downloadFile)

// // 定义一个函数，用于下载所有的超链接文件，并返回一个Promise对象
// function downloadAll(urls) {
//   // 使用Promise.all方法，等待所有的下载操作完成
//   return Promise.all(urls.map(downloadFile));
// }

// // 调用downloadAll函数，传入urls数组
// downloadAll(urls)
//   .then(function() {
//     // 当所有的下载操作完成后，生成zip文件的内容
//     var content = zip.generate();
//     // 创建一个a元素，用于触发下载操作
//     var a = document.createElement("a");
//     // 设置a元素的href属性为zip文件的内容，使用base64编码
//     a.href = "data:application/zip;base64," + content;
//     // 设置a元素的download属性为zip文件的名字
//     a.download = "download.zip";
//     // 将a元素添加到文档中
//     document.body.appendChild(a);
//     // 触发a元素的点击事件，开始下载zip文件
//     a.click();
//   })
//   .catch(function(error) {
//     // 当有任何错误发生时，打印错误信息到控制台
//     console.error(error);
// });