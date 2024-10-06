const root = document.documentElement;
const btnWildMode = document.getElementById("wild-mode");

function resetPropertyValues() {
  root.style.setProperty("--x", 0);
  root.style.setProperty("--y", 0);
}

Observer.create({
  preventDefault: true,
  onChangeX({ isDragging, deltaX }) {
    if (!isDragging) return;
    const x = root.style.getPropertyValue("--x");
    root.style.setProperty("--x", parseInt(x) - deltaX);
  },
  onChangeY({ isDragging, deltaY }) {
    if (!isDragging) return;
    const y = root.style.getPropertyValue("--y");
    root.style.setProperty("--y", parseInt(y) + deltaY);
  }
});

btnWildMode.addEventListener("click", () => resetPropertyValues());

resetPropertyValues();
