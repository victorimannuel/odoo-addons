/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { PosStore } from "@point_of_sale/app/services/pos_store";

patch(PosStore.prototype, {

    // Override setup to subscribe to bus channel for self order sound notifications
    async setup() {
        await super.setup(...arguments);

        const bus = this.env.services.bus_service;
        const channel = `${this.config.access_token}-SYNCHRONIZATION`; // define channel using access token

        // subscribe to the channel from backend
        bus.subscribe(channel, (payload) => {
            if (payload.type == "self_order") {
                // get sound from configuration and play it
                if (this.config.self_ordering_sound) {
                    const src = `data:audio/ogg;base64,${this.config.self_ordering_sound}`;
                    const audio = new Audio(src);
                    audio.play().catch(err => console.warn("🔇 Sound blocked:", err));
                } else {
                    // fallback to default POS sound
                    const audio = new Audio("/point_of_sale/static/src/sounds/order-receive-tone.ogg");
                    audio.play().catch(err => console.warn("🔇 Sound blocked:", err));
                }
            }
        });
        
        // to download logs for debugging bus service issues
        // this.env.services.bus_service.downloadLogs();
    },

});
