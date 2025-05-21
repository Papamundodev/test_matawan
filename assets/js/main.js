document.addEventListener("DOMContentLoaded", () => {
  const thermometer = document.querySelector(".thermometer");
  document.querySelector(".thermometer ul");
  const thermometerStops = thermometer.querySelectorAll("li");
  Array.from(thermometerStops);
  function line(line2) {
    const stops = thermometer.querySelectorAll(`li[data-line-${line2}="true"]`);
    const stopsArray = Array.from(stops);
    const accumulatedYDiffs = stopsArray.reduce((acc, stop, index) => {
      if (index < stopsArray.length - 1) {
        const currentY = stop.getBoundingClientRect().top;
        const nextY = stopsArray[index + 1].getBoundingClientRect().top;
        const yDiff = nextY - currentY;
        const isNextStopFirstInSwitchLane = stopsArray[index + 1].parentElement.classList.contains(
          "switch-lane"
        ) && stopsArray[index + 1] === stopsArray[index + 1].parentElement.firstElementChild;
        if (isNextStopFirstInSwitchLane) {
          acc.push(0);
        } else {
          acc.push((acc[acc.length - 1] || 0) + Math.round(yDiff));
        }
      }
      return acc;
    }, []);
    stopsArray.forEach((stop, index) => {
      stop.getAttribute("data-stop-number");
      if (stop.parentElement.tagName === "UL") {
        setTimeout(() => {
          const previousStop = thermometer.querySelector(".current-stop");
          if (previousStop) {
            previousStop.classList.remove("current-stop");
          }
          if (stopsArray[index + 1]) {
            stop.parentElement.style.boxShadow = `-5px calc(${accumulatedYDiffs[index]}px + 14px) 0 0 #6f007d, -5px 0 0 0 #000`;
            stop.classList.add("current-stop");
          }
        }, index * 1e3);
      }
    });
  }
  const buttons = document.querySelectorAll(".line-selector button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      line(button.getAttribute("data-line"));
    });
  });
});
//# sourceMappingURL=main.js.map
