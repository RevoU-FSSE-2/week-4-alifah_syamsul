/* Hamburger menu */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

/* Activate the .hamburger and .nav-menu when the hamburger button is clicked */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle ("active");
    navMenu.classList.toggle("active");
})

/* Remove the active class after the /hamburger or .nav-menu is clicked */
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/* Display age text beside the age range selector */
function displayAgeValue(age) {
    document.getElementById("age-display").textContent = age;
}

/* Make the dark mode toggle interactive */
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    var body = document.body;
    if(body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
});

/* Update the text next to the toggle depending on the state of the switch */
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch = document.querySelector('#dark-mode-toggle');
    const toggleText = document.querySelector('#toggle-text');
    let isDarkMode = localStorage.getItem('isDarkMode');
    
    // If the user has previously chosen a theme, apply it:
    if (isDarkMode) {
        isDarkMode = JSON.parse(isDarkMode);
        toggleSwitch.checked = isDarkMode;
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        toggleText.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
    }

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            trans()
            document.body.setAttribute('data-theme', 'dark')
            toggleText.textContent = 'Dark Mode';
            localStorage.setItem('isDarkMode', true);
        } else {
            trans()
            document.body.setAttribute('data-theme', 'light')
            toggleText.textContent = 'Light Mode';
            localStorage.setItem('isDarkMode', false);
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition')
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }
})
