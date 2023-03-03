const names = ["name", "img1", "img2", "img3", "img4"]
const effects = ["person-img", "effet-img1", "effet-img2", "effet-img3", "effet-img4"]

var actualEffect = ""

window.addEventListener("mousemove", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    actualEffect.style.left = `${x}px`;
    actualEffect.style.top = `${y}px`;
});

for(var i=0; i<names.length; i++){
    let effect = document.querySelector("." + effects[i])
    document.querySelector("." + names[i]).addEventListener("mouseover", () => {
        effect.style.display = "block";
        actualEffect = effect;
    });

    document.querySelector("." + names[i]).addEventListener("mouseleave", () => {
        effect.style.display = "";
        actualEffect = effect;
    });
}