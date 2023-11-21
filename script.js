// Function to set the theme based on user preference
function setTheme(isDarkMode) {
    document.documentElement.style.setProperty('--background-color', isDarkMode ? 'black' : 'white');
    document.documentElement.style.setProperty('--text-color', isDarkMode ? 'white' : 'black');
    document.documentElement.style.setProperty('--navbar-color', isDarkMode ? 'black' : 'white');
    document.documentElement.style.setProperty('--button-color', isDarkMode ? 'white' : 'black');
    document.documentElement.style.setProperty('--button-text', isDarkMode ? 'black' : 'white');
    document.getElementById('darkModeToggle').checked =isDarkMode;

}

// Function to toggle between dark mode and light mode
function toggleDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setTheme(isDarkMode);
}

// Event listener for the dark mode toggle switch
document.getElementById('darkModeToggle').addEventListener('change', function () {
    const isDarkMode = this.checked;
    localStorage.setItem('darkMode', isDarkMode);
    setTheme(isDarkMode);
});

// Apply the theme on page load
toggleDarkMode();



function showPopup(contentId) {
    var popupOverlay = document.getElementById('popupOverlay');
    var popupContent = document.getElementById('popupContent');
    var popupDetails = document.getElementById('popupDetails');

    // Set the content based on the card clicked
    if (contentId === 'testing') {
        popupDetails.innerHTML = '<p><b>Details for Testing Engineer:</b></p>' +
            '<p><b>Company:</b> Global networks, HYD IND</p>' +
            '<p><b>Time Worked:</b> 6 Months</p>' +
            '<p><b>Start-Date: 02-02-2022</b></p>' +
            '<p><b>End-Date: 31-06-2022</b></p>';
    } else if (contentId === 'volunteer') {
        popupDetails.innerHTML = '<p><b>Details for Volunteer:</b></p>' +
            '<p><b>Company:</b> Seva Bharathi (NGO), HYD IND</p>' +
            '<p><b>Time Worked:</b> 1 Month</p>' +
            '<p><b>Start-Date: 14-05-2020</b></p>' +
            '<p><b>End-Date: 15-06-2020</b></p>';
    }
    
    popupOverlay.style.display = 'flex';
}

function closePopup() {
    var popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none';
}

