/** @odoo-module **/

import { rpc } from '@web/core/network/rpc';
import { patch } from "@web/core/utils/patch";
import { SelfOrder } from "@pos_self_order/app/services/self_order_service";

patch(SelfOrder.prototype, {

    // Override to send a notification to play sound when order is sent
    async sendDraftOrderToServer() {
        const result = await super.sendDraftOrderToServer();
        if (result) {
            try {
                // Call the bus notification endpoint to play sound
                await rpc("/pos-self-order/play-sound-notification", {
                    access_token: this.access_token,
                    table_identifier:
                        this.currentOrder?.self_ordering_table_id?.identifier ||
                        this.router.getTableIdentifier([]),
                });
            } catch (err) {
                console.warn("Failed to send bus notification:", err);
            }
        }
        return result;
    },
    
});
