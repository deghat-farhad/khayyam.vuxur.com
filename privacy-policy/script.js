// Function to toggle dark mode based on the user's OS preference
function setDarkModePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Call the function on page load
setDarkModePreference();

// Listen for changes in the user's OS preference
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    setDarkModePreference();
});
