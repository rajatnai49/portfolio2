document.querySelector(".container").addEventListener("click", () => {
  document.querySelector(".sun-logo").classList.toggle("animate-sun");
  document.querySelector(".moon-logo").classList.toggle("animate-moon");
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".stage").classList.toggle("stage-dark");
  document.querySelector(".ps-timeline-sec").classList.toggle("ps-timeline-sec-dark");
})