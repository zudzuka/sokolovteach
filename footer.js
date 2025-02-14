// Determine the correct image folder based on the current folder
// var imgFolder = window.location.pathname === '/' ? 'img/' : '../img/';

// Inject Footer using insertAdjacentHTML
const footerHTML = `
    <footer class="footer">
        <ul class="social">
            <li class="social">
                <a class="social" href="mailto:sokolov.teach@gmail.com">
                    <img class="social" src="img/email.png">sokolov.teach@gmail.com
                </a>
            </li>
            <li class="social">
                <a class="social" href="impressum">
                    Impressum
                </a>
            </li>
            <li class="social">
                <img class="social" src="img/location.png">
                <div data-i18n="footer.location">Berlin, Germany</div>
            </li>
        </ul>
    </footer>
`;

// Insert footer at the bottom of the body
document.body.insertAdjacentHTML('beforeend', footerHTML);
