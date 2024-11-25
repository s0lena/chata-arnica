const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.querySelector("#mode").textContent = "Light mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.querySelector("#mode").textContent = "Dark mode";
  }
  console.log(
    "Current data-theme:",
    document.documentElement.getAttribute("data-theme")
  );
};

toggleSwitch.addEventListener("change", switchTheme, false);
