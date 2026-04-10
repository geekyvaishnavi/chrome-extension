// Message Handling
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

// Badge Logic
const getColor = (length) =>
  length <= 4 ? "#28a745" : length <= 7 ? "#ffc107" : "#dc3545";

const setBadge = (value) => {
  const num = Number(value);

  chrome.action.setBadgeText({ text: value }, () => {
    chrome.action.setBadgeBackgroundColor({
      color: getColor(num)
    });
  });
};

// Event Listeners 
chrome.windows.onCreated.addListener(() => {
  chrome.storage.sync.get(["tasks"], (res) => {
    setBadge(res.tasks?.length ? res.tasks.length.toString() : "");
  });
});

chrome.storage.onChanged.addListener((changes) => {
  const tasksChange = changes.tasks;
  if (!tasksChange) return;

  const length = tasksChange.newValue?.length || 0;
  setBadge(length ? length.toString() : "");
});