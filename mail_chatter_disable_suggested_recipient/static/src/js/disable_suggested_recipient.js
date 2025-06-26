/** @odoo-module **/

// To disable all suggested recipient checkbox elements
document.addEventListener("DOMContentLoaded", () => {
    const disableSuggestedRecipientCheckboxes = () => {
        document.querySelectorAll(".o-mail-SuggestedRecipient input[type='checkbox']")
        .forEach(cb => {
                cb.disabled = true;
            });
    };

    // Call function everytime there are DOM changes
    const observer = new MutationObserver(() => {
        disableSuggestedRecipientCheckboxes();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    // Run once initially
    disableSuggestedRecipientCheckboxes();
});