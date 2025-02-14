// Inject Header with Language Switcher as Text Links

const headerHTML = `
    <nav class="navbar">
        <div class="navbar-logo">
            <a href="index">SOKOLOV TEACH</a>
        </div>
        <div class="navbar-links">
            <a href="#pricing">ЦЕНЫ</a>
            <a href="#services">УСЛУГИ</a>
            <a href="#contacts">КОНТАКТЫ</a>
        </div>
    </nav>
`;
document.body.insertAdjacentHTML('afterbegin', headerHTML); // Insert header at the top of the body
