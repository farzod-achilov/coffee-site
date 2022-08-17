var elTextToggle1 = document.querySelector("[data-toggle-text-1]");
var elTextToggle2 = document.querySelector("[data-toggle-text-2]");
var elTextToggle3 = document.querySelector("[data-toggle-text-3]");
var elTextToggle4 = document.querySelector("[data-toggle-text-4]");
var elTextToggle5 = document.querySelector("[data-toggle-text-5]");

var elContentToggle1 = document.querySelector("[data-toggle-content-1]");
var elContentToggle2 = document.querySelector("[data-toggle-content-2]");
var elContentToggle3 = document.querySelector("[data-toggle-content-3]");
var elContentToggle4 = document.querySelector("[data-toggle-content-4]");
var elContentToggle5 = document.querySelector("[data-toggle-content-5]");

toggle(elTextToggle1, elContentToggle1);
toggle(elTextToggle2, elContentToggle2);
toggle(elTextToggle3, elContentToggle3);
toggle(elTextToggle4, elContentToggle4);
toggle(elTextToggle5, elContentToggle5);

function toggle(text, content) {
  text.addEventListener("click", function (evt) {
    content.classList.toggle("visually-hidden");
  });
}
