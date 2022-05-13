let icon = document.getElementById("icon");
let input = document.getElementById("search");

icon.addEventListener("click", () => {
  if (input.className != "show-input") {
    input.classList.add("show-input");
  } else {
    input.classList.remove("show-input");
  }
});
