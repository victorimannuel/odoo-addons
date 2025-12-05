{
    "name": "POS Self Order Notify Cashier",
    "version": "19.0.1.0.0",
    "category": "Point of Sale",
    "summary": "Notify cashier when a self order is placed using audio and visual notification",
    "author": "Victor Imannuel",
    "license": "LGPL-3",
    "depends": [
        "point_of_sale",
        "pos_self_order",
        "pos_restaurant",
    ],
    "data": [
        "views/res_config_settings_views.xml",
    ],
    "assets": {
        "pos_self_order.assets": [
            "pos_self_order_notify_cashier/static/src/overrides/self_order_service.js",
        ],
        'point_of_sale._assets_pos': [
            "pos_self_order_notify_cashier/static/src/overrides/pos_store.js",
            "pos_self_order_notify_cashier/static/src/overrides/floor_screen.js",
        ],
    },
    "installable": True,
    "application": False,
    "auto_install": False,
}
