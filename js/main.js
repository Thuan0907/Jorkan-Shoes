
function getId(id) {
  return document.getElementById(id);
}

var navContent = getId("navContent");
function showNavContent() {
  navContent.classList.add("active");
  document.body.style.overflow='hidden'
}
function closePanel() {
    navContent.classList.remove("active");
    document.body.style.overflow='auto'
}