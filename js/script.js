function toggleCard(button) {
    const card = button.closest('.message-card');
    card.classList.toggle('is-expanded');
}

function copyContent(button) {
    const card = button.closest('.message-card');
    const textToCopy = card.querySelector('.body-content').innerText;
    const icon = button.querySelector('i');

    navigator.clipboard.writeText(textToCopy).then(() => {
        icon.className = "fa-solid fa-check";
        button.style.color = "#16a34a";

        setTimeout(() => {
            icon.className = "fa-regular fa-copy";
            button.style.color = "";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}