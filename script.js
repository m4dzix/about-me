let fontColor = document.querySelector(".js-fontColor");
let backgroundColor = document.querySelector(".js-backgroundColor");
let border = document.querySelector(".js-border");
let changeFontSize = document.querySelector(".js-fontSize");
let main = document.querySelector("main");
let body = document.querySelector("body");
let mode = document.querySelector('.js-mode');

let initialFontSize = 20;

console.log("Witaj developerze(-rko), miłego code review ;)")

fontColor.addEventListener('click', () => {
  body.style.color = "indigo";
});
backgroundColor.addEventListener('click', () => {
  body.style.backgroundColor = "#bbb";
});
border.addEventListener('click', () => {
  main.style.border = "5px magenta dashed ";
});

changeFontSize.addEventListener("click", () => {
  if (initialFontSize < 35) {
    main.style.fontSize = ++initialFontSize + 'px'
    changeFontSize.innerText = "zwiększ czcionkę"
  } else {
    initialFontSize = 20
    changeFontSize.innerText = "wróć do domyślnego rozmiaru czcionki"
  };
});


mode.addEventListener("click", () => {
  if (mode.innerText === 'CIEMNY MOTYW') {
    mode.innerText = "jasny motyw"
  } else {
    mode.innerText = 'ciemny motyw'
  };
  main.classList.toggle('active');

})