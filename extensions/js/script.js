console.log("script done");
window.addEventListener("load", function () {
  setInterval(() => {
    // chrome.runtime.sendMessage('yvfe_filter', (response) => {
      document.querySelectorAll("#playlist-items")?.forEach((item) => {
        if (item.querySelector("div#progress")?.style.width === "100%") {
          item.style.display = true ? "none" : null;
        }
      });
    // });
  }, 500);
});
