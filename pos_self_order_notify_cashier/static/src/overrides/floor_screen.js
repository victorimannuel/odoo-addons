/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { getOrderChanges } from "@point_of_sale/app/models/utils/order_change";
import { FloorScreen } from "@pos_restaurant/app/screens/floor_screen/floor_screen";

patch(FloorScreen.prototype, {  
    getChangeCount(table) {
        const result = super.getChangeCount(table);

        let changeCount = 0;
        // Filter for self-ordering tables as well
        const tableOrders = this.pos.models["pos.order"].filter(
            (o) => 
                (o.table_id?.id === table.id || o.self_ordering_table_id?.id === table.id)
                && !o.finalized
        );

        for (const order of tableOrders) {
            const changes = getOrderChanges(order, this.pos.config.preparationCategories);
            changeCount += changes.nbrOfChanges;
        }
        result.changes = changeCount

        return result;
    },
});
