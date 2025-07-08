let painoContainer = document.getElementsByClassName("paino_container") // FIXED

const base = "./audio";

window.onload = () => {
  for (let index = 1; index <= 24; index++) {  // FIXED: `i` → `index`
    let div = document.createElement("div");

    // Choose class based on index: first 9 = black, rest = white
    div.classList.add("key", index <= 10 ? "black-key" : "white-key");
    const number=index<=9?"0"+index:index;
    div.addEventListener("click",()=>
{
  new Audio(`${base}/key${number}.mp3`).play();

})
  painoContainer[0].appendChild(div);
  }
};
