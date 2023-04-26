chrome.commands.onCommand.addListener(function(command) {
  console.log("in command", command)
  if (command === "input-zero") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "input-zero"});
    });
  } else if (command === "input-one") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "input-one"});
    });
  }
});
