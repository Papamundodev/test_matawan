document.addEventListener("DOMContentLoaded", () => {
  const thermometer = document.querySelector(".thermometer");
  const thermometerLine = document.querySelector(".thermometer ul");
  const thermometerStops = thermometer.querySelectorAll("li");
  const thermometerStopsArray = Array.from(thermometerStops);

  //Add current-stop class to each stop with a delay
  function line(line) {
    const stops = thermometer.querySelectorAll(`li[data-line-${line}="true"]`);
    const stopsArray = Array.from(stops);

    // Calculate accumulated Y differences for each stop
    const accumulatedYDiffs = stopsArray.reduce((acc, stop, index) => {
      if (index < stopsArray.length - 1) {
        const currentY = stop.getBoundingClientRect().top;
        const nextY = stopsArray[index + 1].getBoundingClientRect().top;
        const yDiff = nextY - currentY;

        // Check if the next stop is the first child of a .switch-lane UL
        const isNextStopFirstInSwitchLane =
          stopsArray[index + 1].parentElement.classList.contains(
            "switch-lane"
          ) &&
          stopsArray[index + 1] ===
            stopsArray[index + 1].parentElement.firstElementChild;

        // If next stop is first in switch-lane, reset accumulation
        if (isNextStopFirstInSwitchLane) {
          acc.push(0);
        } else {
          acc.push((acc[acc.length - 1] || 0) + Math.round(yDiff));
        }
      }
      return acc;
    }, []);

    stopsArray.forEach((stop, index) => {
      const stopNumber = stop.getAttribute("data-stop-number");
      if (stop.parentElement.tagName === "UL") {
        setTimeout(() => {
          // Remove current-stop from all stops
          const previousStop = thermometer.querySelector(".current-stop");
          if (previousStop) {
            previousStop.classList.remove("current-stop");
          }
          if (stopsArray[index + 1]) {
            stop.parentElement.style.boxShadow = `-5px calc(${accumulatedYDiffs[index]}px + 14px) 0 0 #6f007d, -5px 0 0 0 #000`;
            stop.classList.add("current-stop");
          }
        }, index * 1000); // 1000ms = 1 second
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
