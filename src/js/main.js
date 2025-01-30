var articles = document.querySelectorAll(".articles-item");
var inputText = document.querySelector(".form-input");
var button = document.querySelector(".form-button");

function inputValue() {
  var text = inputText.value;

  articles.forEach(function (article) {
    if (article.innerText.includes(text)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}

button.addEventListener("click", inputValue);
