/** @odoo-module **/

import { registry } from "@web/core/registry";
import { patch } from "@web/core/utils/patch";
import { SuggestedRecipient } from "@mail/core/web/suggested_recipient";


// Two method patch and extends
// 1. Patch
patch(SuggestedRecipient.prototype, {
    setup() {
        console.log('setup!!');
        // Set to initially unchecked
        this.props.recipient.checked = false;
    },
});

// 2. Extends (not working)
// class CustomSuggestedRecipient extends SuggestedRecipient {
//     setup() {
//         super.setup();
//         // Set to initially unchecked
//         this.props.recipient.checked = false;
//     }
// }
// registry.category("components").add(
//     "mail.SuggestedRecipients", // must match original template name
//     CustomSuggestedRecipient,
//     { force: true } // <-- this is key
// );