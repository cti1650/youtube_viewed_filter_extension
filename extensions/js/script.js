console.log("script done");
window.addEventListener("load", function() {
  setInterval(() => {
    document.querySelectorAll("#playlist-items")?.forEach((item) => {
      if (item.querySelector("div#progress")?.style.width === "100%") {
        item.style.display = "none";
      }
    });
  }, 500);
})
