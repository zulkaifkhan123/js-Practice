

function setTheme(theme) {

    // Remove existing themes
    document.body.classList.remove("light", "dark");

    if (theme === "light") {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
    }

    else if (theme === "dark") {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }

    else if (theme === "system") {
        localStorage.setItem("theme", "system");
        applySystemTheme();
    }
}

// Apply system theme
function applySystemTheme() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.body.classList.remove("light", "dark");

    if (prefersDark) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.add("light");
    }
}

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light" || savedTheme === "dark") {
    document.body.classList.add(savedTheme);
} else {
    applySystemTheme();
}
