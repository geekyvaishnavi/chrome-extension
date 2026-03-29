chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GET_THEME") {
    chrome.storage.sync.get(["theme"], (res) => {
      sendResponse({ theme: res.theme || "light" });
    });
    return true;
  }

  if (req.type === "SET_THEME") {
    chrome.storage.sync.set({ theme: req.theme }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});
