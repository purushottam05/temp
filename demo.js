const inputText = document.querySelector("#input");
const clickBtn = document.querySelector("#clickbtn");
const outputText = document.querySelector("#output");


clickBtn.addEventListener("click", function demo() {
     var value = inputText.value.toUpperCase();
     console.log(value);
     outputText.innerText = value;
})


