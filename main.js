/* 
  В ТЗ явно не было указанно, нужно было ли закрывать кнопки
  при открытии другой кнопки, поэтому я решил оставить возможность
  открывать их все и закрывать все при нажатии на окно. Надеюсь, это не ошибка :)
*/

/* 
  Еще фон стремно растягивается на разрешениях, но судя по ТЗ так и должно быть,
  если он занимает всю ширину и всю высоту всегда, по крайней мере я это так понял.
*/

const toolTips = document.querySelectorAll(".main-content__tooltip");

window.addEventListener("click", activeToggle);

function activeToggle(event) {
  if (!event.target.closest(".main-content__tooltip")) {
    const toolTipsActive = document.querySelectorAll(".main-content__tooltip--active");
    toolTipsActive.forEach((toolTipActive) => {
      toolTipActive.classList.remove("main-content__tooltip--active");
    });
  } else {
    event.target.classList.toggle("main-content__tooltip--active");
  }
}