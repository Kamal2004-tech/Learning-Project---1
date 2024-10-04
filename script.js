// Theme switching functionality
const themeButtons = document.querySelectorAll('.theme-btn');
themeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        document.body.className = theme;  // Apply the theme to the body
    });
});

// Font size adjustment functionality
const fontSizeButtons = document.querySelectorAll('.font-size-btn');
fontSizeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const size = this.getAttribute('data-size');
        switch(size) {
            case 'small':
                document.body.style.fontSize = '14px';
                break;
            case 'medium':
                document.body.style.fontSize = '18px';
                break;
            case 'large':
                document.body.style.fontSize = '22px';
                break;
            default:
                document.body.style.fontSize = '16px';
        }
    });
});

// Hide sidebars functionality
document.querySelector('.hide-btn-left').addEventListener('click', () => {
    document.querySelector('.sidebar-left').style.display = 'none';
    // Adjust main content to center
    document.querySelector('main').style.marginLeft = 'auto';
    document.querySelector('main').style.marginRight = 'auto';
});

document.querySelector('.hide-btn-right').addEventListener('click', () => {
    document.querySelector('.sidebar-right').style.display = 'none';
    // Adjust main content to center
    document.querySelector('main').style.marginLeft = 'auto';
    document.querySelector('main').style.marginRight = 'auto';
});
