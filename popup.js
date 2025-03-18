document.addEventListener("DOMContentLoaded", () => {
    const keystrokeDisplay = document.getElementById("keystrokes");

    // Function to update keystrokes display
    function updateKeystrokesDisplay() {
        chrome.storage.local.get(["keystrokes"], (result) => {
            keystrokeDisplay.textContent = result.keystrokes || "No keystrokes recorded yet.";
        });
    }

    // Initial load of keystrokes
    updateKeystrokesDisplay();

    // Listen for storage changes and update live
    chrome.storage.onChanged.addListener((changes, namespace) => {
        if (namespace === "local" && changes.keystrokes) {
            keystrokeDisplay.textContent = changes.keystrokes.newValue || "No keystrokes recorded yet.";
        }
    });

    // Button to clear keystrokes
    document.getElementById("clear").addEventListener("click", () => {
        chrome.storage.local.set({ keystrokes: "" }, () => {
            keystrokeDisplay.textContent = "Keystrokes cleared.";
        });
    });
});
