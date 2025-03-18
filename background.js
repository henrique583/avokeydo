console.log("Background script is running.");
chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.set({ showWPMOverlay: false });
});
