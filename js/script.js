// TOGGLE BUTTON
function toggleCard(button) {
    const card = button.closest('.message-card');
    card.classList.toggle('is-expanded');
}

// COPY BUTTON
function copyContent(button) {
    const card = button.closest('.message-card');
    const textToCopy = card.querySelector('.body-content').innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerText;

        button.innerText = "Copied!";
        button.style.color = "#16a34a";

        setTimeout(() => {
            button.innerText = originalText;
            button.style.color = "";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// MAIL TEMPLATE
const emailTemplates = {
    // Make sure this exact spelling matches the HTML string string above
    palestineAwareness: {
        recipient: "recipient@example.com",
        subject: "Urgent Concern Regarding Human Rights in Palestine",
        body: `Dear Sir/Madam,

I am writing to express my deep concern regarding the situation in Palestine, where reports indicate that around 11,000 innocent people are at serious risk.

This is not just a number, but thousands of human lives that deserve protection, dignity, and justice. I humbly urge your organization to take immediate notice of this situation and use all possible means to raise this issue at international platforms.

We request urgent intervention to prevent any further loss of innocent lives and to ensure that justice and human rights are upheld.

Even as individuals, we believe our collective voices can create awareness and push for meaningful action.

Thank you for your time and attention.`
    }
};

function launchEmailTemplate(templateKey) {
    const template = emailTemplates[templateKey];

    if (!template) {
        console.error(`Template key "${templateKey}" not found. Check your spelling in the HTML onclick attribute.`);
        return;
    }

    const encodedSubject = encodeURIComponent(template.subject);
    const encodedBody = encodeURIComponent(template.body);

    window.location.href = `mailto:${template.recipient}?subject=${encodedSubject}&body=${encodedBody}`;
}