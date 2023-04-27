var words = ["apple", "banana", "carrot", "date", "eggplant", "fig", "grape"];

// Listen for the input event on all input elements
document.addEventListener("input", function(event) {
  // Get the target element and its value
  var target = event.target;
  var value = target.value;

  // Check if the target is an input element and the value is not empty
  if (target.tagName === "INPUT" && value) {
    // Find the matching words that start with the value
    var matches = words.filter(function(word) {
      return word.startsWith(value);
    });

    // If there is only one match, complete the value with the match
    if (matches.length === 1) {
      target.value = matches[0];
    }
  }
});
