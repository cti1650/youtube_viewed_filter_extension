chrome.action.onClicked.addListener(function (tab) {
  chrome.storage.local.get(["yvfe_filter"], function (items) {
    chrome.storage.local.set({ yvfe_filter: !items.yvfe_filter });
  });
});

// chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
//   if (message === "yvfe_filter") {
//     await new Promise((resolve, reject) => {
//       chrome.storage.local.get("yvfe_filter", function (items) {
//         resolve(sendResponse(items.yvfe_filter));
//       });
//       reject(sendResponse(null))
//     });
//   }
// });
