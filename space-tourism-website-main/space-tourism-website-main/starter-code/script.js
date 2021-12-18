const selectee = document.getElementById("selectee");
const select = document.getElementById("select");

select.addEventListener("mouseenter", (e) => {
  selectee.classList.add("hover");
});
select.addEventListener("mouseleave", (e) => {
  selectee.classList.remove("hover");
});
