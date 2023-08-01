const toggleSwitch = document.querySelector('input[type="checkbox"]');
const navigation = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');

function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function setStyles(isDark) {
    const backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255/ 50%)';
    const textboxColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0/ 50%)';
    const iconText = isDark ? 'Dark mode' : 'Light mode';
  
    navigation.style.backgroundColor = backgroundColor;
    textBox.style.backgroundColor = textboxColor;
    toggleIcon.children[0].textContent = iconText;
    toggleIcon.children[1].classList.toggle('fa-sun');
    toggleIcon.children[1].classList.toggle('fa-moon');
    imageMode(isDark ? 'dark' : 'light');
}

function toggleDarkLightMode(isDark) {
    setStyles(isDark);
};

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
};

toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    } 
}