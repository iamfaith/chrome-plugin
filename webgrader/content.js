chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("score")
  if (message.action === "input-zero") {
    // var input = document.getElementById("input-id"); // replace with the id or name of the input element
    // input.value = "0";
    var input = document.getElementsByName('score')[0]  
    input.value = '0'
    // input.dispatchEvent(new KeyboardEvent("keydown", {key: "Enter"}));
    document.querySelector('input[type=\"submit\"]').click();
  } else if (message.action === "input-one") {
    var input = document.getElementsByName('score')[0]
    input.value = '1'
    // input.dispatchEvent(new KeyboardEvent("keydown", {key: "Enter"}));
    document.querySelector('input[type=\"submit\"]').click();
  }
});

// 您好，这是Bing。根据网络搜索结果，您可以通过以下方法在chrome js里面自动点击type=submit的button：

// - 如果您知道button的id属性，您可以使用document.getElementById方法获取button元素，然后调用click方法模拟点击。例如：document.getElementById('button-id').click();¹²⁴
// - 如果您知道button的name属性，您可以使用document.getElementsByName方法获取button元素的数组，然后根据索引选择一个元素，再调用click方法模拟点击。例如：document.getElementsByName('button-name')[0].click();²³
// - 如果您知道button的其他属性或特征，您可以使用document.querySelector或document.querySelectorAll方法获取button元素或元素的数组，然后根据需要选择一个元素，再调用click方法模拟点击。例如：document.querySelector('input[type=\"submit\"]').click();
