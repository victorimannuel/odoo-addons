from odoo import http
from odoo.http import request

class PosBusNotifyController(http.Controller):

    @http.route('/pos-self-order/play-sound-notification', type='jsonrpc', auth='public')
    def notify_new_order(self, access_token):
        try:
            # find related POS config
            pos_config = request.env['pos.config'].sudo().search(
                [('access_token', '=', access_token)], limit=1
            )
            if not pos_config:
                return {'error': 'POS config not found'}
            
            # send a bus message to the POS frontend
            pos_config._notify(
                'SYNCHRONIZATION',
                {'type': 'self_order', 'message': '🔔 New order received from self-order!'}
            )
            return {'status': 'ok'}
        except Exception as e:
            return {'error': str(e)}
        