const name = document.querySelector(".name"),
  personImg = document.querySelector(".person-img"),
  img1 = document.querySelector(".img1"),
  effet1 = document.querySelector(".effet-img1"),
  img2 = document.querySelector(".img2"),
  effet2 = document.querySelector(".effet-img2"),
  img3 = document.querySelector(".img3"),
  effet3 = document.querySelector(".effet-img3"),
  img4 = document.querySelector(".img4");
  effet4 = document.querySelector(".effet-img4"),


window.addEventListener("mousemove", (e) => {
  let x = e.offsetX,
    y = e.offsetY;

  if (e.target.classList.contains("name")) {
    personImg.style.left = `${x}px`;
    personImg.style.top = `${y}px`;
  }
  else if (e.target.classList.contains("img1")) {
    effet1.style.left = `${x}px`;
    effet1.style.top = `${y}px`;
  }
  else if (e.target.classList.contains("img2")) {
    effet2.style.left = `${x}px`;
    effet2.style.top = `${y}px`;
  }
  else if (e.target.classList.contains("img3")) {
    effet3.style.left = `${x}px`;
    effet3.style.top = `${y}px`;
  }
  else if (e.target.classList.contains("img4")) {
    effet4.style.left = `${x}px`;
    effet4.style.top = `${y}px`;
  }
});

name.addEventListener("mouseover", () => {
  personImg.style.display = "block";
});

name.addEventListener("mouseleave", () => {
  personImg.style.display = "";
});

img1.addEventListener("mouseover", () => {
  effet1.style.display = "block";
});

img1.addEventListener("mouseleave", () => {
  effet1.style.display = "";
});

img2.addEventListener("mouseover", () => {
  effet2.style.display = "block";
});

img2.addEventListener("mouseleave", () => {
  effet2.style.display = "";
});

img3.addEventListener("mouseover", () => {
  effet3.style.display = "block";
});

img3.addEventListener("mouseleave", () => {
  effet3.style.display = "";
});

img4.addEventListener("mouseover", () => {
  effet4.style.display = "block";
});

img4.addEventListener("mouseleave", () => {
  effet4.style.display = "";
});

 
