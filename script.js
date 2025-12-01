const tabsBut = document.querySelectorAll(".tab-button button");
// console.log(tabsBut)
const tabsItems = document.querySelectorAll(".tabs-items");
// console.log(tabsItems)

// Задаем переменную HIDE

function hideTabs() {
  tabsItems.forEach((item) => item.classList.add("hide"));
}

// Переключение между кнопок

function showTab(index) {
  tabsItems[index].classList.remove("hide");
}

tabsBut.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
  })
);

hideTabs();
showTab(0);

// Икори, плавно перемещался сайт

const ancors = document.querySelectorAll(".header_nav a");
console.log(ancors);

ancors.forEach((anc) => {
  anc.addEventListener("click", function (event) {
    event.preventDefault();
    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 74,
      behavior: "smooth",
    });
  });
});
