{
  const hallo = () => {
    console.log("Witaj developerze(-rko), miłego code review ;)")
  }
} {
  let body = document.querySelector("body");
  let fontColor = document.querySelector(".js-fontColor");
  let backgroundColor = document.querySelector(".js-backgroundColor");

  fontColor.addEventListener('click', () => {
    body.style.color = "indigo";
  });
  backgroundColor.addEventListener('click', () => {
    body.style.backgroundColor = "#bbb";
  });
}
let border = document.querySelector(".js-border");
let changeFontSize = document.querySelector(".js-fontSize");
let main = document.querySelector("main");
let mode = document.querySelector('.js-mode');

let initialFontSize = 20;



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