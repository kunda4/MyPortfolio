const likeBtn = document.querySelector(".likeonly");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    // likeIcon.innerHTML = `<img src="/images/uiw_like-o.png" alt="">`;
    count.textContent++;
  } else {
    clicked = false;
    // likeIcon.innerHTML = `<img src="/images/uiw_like-o.png" alt="">`;
     count.textContent--;
  }
});
