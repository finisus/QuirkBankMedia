// Content Page Functions
const aboutUsBtn = document.getElementById("about-button");
const whatBtn = document.getElementById("what-button");
const testimonyBtn = document.getElementById("testimony-button");
const contactBtn = document.getElementById("contact-button");
const aboutPage = document.getElementById("about-page");
const whatPage = document.getElementById("what-page");
const testimonyPage = document.getElementById("testimony-page");
const contactPage = document.getElementById("contact-page");

const pages = [aboutPage, whatPage, testimonyPage, contactPage];
const buttons = [aboutUsBtn, whatBtn, testimonyBtn, contactBtn];

// Function to reset the pages and buttons
function resetAll() {
    pages.forEach(page => page.style.display = "none");
    buttons.forEach(btn => btn.classList.remove("button-overlay"));
}

// Default: Show What page
whatPage.style.display = "block";
allOtherButtonsOverlay(whatBtn);

// Event listeners
aboutUsBtn.addEventListener('click', () => {
    resetAll();
    aboutPage.style.display = "block";
    allOtherButtonsOverlay(aboutUsBtn);
});
whatBtn.addEventListener('click', () => {
    resetAll();
    whatPage.style.display = "block";
    allOtherButtonsOverlay(whatBtn);
});
testimonyBtn.addEventListener('click', () => {
    resetAll();
    testimonyPage.style.display = "block";
    allOtherButtonsOverlay(testimonyBtn);
});
contactBtn.addEventListener('click', () => {
    resetAll();
    contactPage.style.display = "block";
    allOtherButtonsOverlay(contactBtn);
});

// Apply overlay to all buttons except the active one
function allOtherButtonsOverlay(activeBtn) {
    buttons.forEach(btn => {
        if(btn !== activeBtn) {
            btn.classList.add("button-overlay");
        }
    });
}

// Social Buttons
const instagramBtn = document.getElementById('instagramBtn');
const whatsappBtn = document.getElementById('whatsappBtn');
const mailBtn = document.getElementById('mailBtn');
instagramBtn.addEventListener('click', function () {
    window.open('http://www.instagram.com/quirkbank/', '_blank');
});
whatsappBtn.addEventListener('click', function () {
    window.open('https://wa.me/917483779517', '_blank');
});
mailBtn.addEventListener('click', function () {
    const recipientEmail = 'contact@quirkbankmedia.com';
    const subject = encodeURIComponent('');
    const body = encodeURIComponent('Hello, my name is \n\nI need:');
    const mailToLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailToLink;
});

// Scrollbar
document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement("style");
    style.textContent = `
        ::-webkit-scrollbar {
            width: 20px;
            background: #EFE7DC;
            border-left: 4px solid black;
            border-right: 4px solid black;
        }

        ::-webkit-scrollbar-thumb {
            background: #F88379;
            border: 4px solid black;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #6FD9CC;
            border-color: black;
        }
    `;
    document.head.appendChild(style);
});

// Portfolio Folder Page

document.getElementById("folder-1").addEventListener("click", () => showFolioCard(1));
document.getElementById("folder-2").addEventListener("click", () => showFolioCard(2));
document.getElementById("folder-3").addEventListener("click", () => showFolioCard(3));
document.getElementById("home-button").addEventListener("click", () => {
    document.querySelectorAll(".folio-card").forEach(card => card.classList.remove("active"));
    document.getElementById("folio-folders").style.display = "flex";
    document.getElementById("home-button").style.display = "none";
});

function showFolioCard(cardNumber) {
    const folioCards = document.querySelectorAll(".folio-card");
    const activeFolioCard = document.getElementById(`folio-card-${cardNumber}`);

    folioCards.forEach(card => card.classList.remove("active"));
    activeFolioCard.classList.add("active");

    // Hide folio-folders when a folio-card is shown
    document.getElementById("folio-folders").style.display = "none";
    document.getElementById("home-button").style.display = "block"; // Show the home button
}

document.querySelectorAll(".back-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".folio-card").forEach(card => card.classList.remove("active"));
        document.getElementById("folio-folders").style.display = "flex";
        document.getElementById("home-button").style.display = "none";
    });
});
