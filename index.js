const stars = document.querySelectorAll(".fa-star");

const emojis = document.querySelectorAll(".fa-regular");
const coloursArray = ["Red","Orange","lightblue","lightgreen","green"];

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateRating(index);
  });
});

updateRating(0);

function updateRating(index) {
  stars.forEach((star, idx) => {
    if (idx < index + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });

  emojis.forEach(emoji => {
    console.log("clicked");
    emoji.style.transform = `translateX(-${index*50}px)`;
    emoji.style.color = coloursArray[index];
  }); 
}
