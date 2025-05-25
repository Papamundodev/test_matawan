document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("color-picker");
  colorPicker.addEventListener("change", () => {
    document.documentElement.style.setProperty(
      "--accent-color",
      colorPicker.value
    );
  });
});
