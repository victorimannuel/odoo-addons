from odoo import models, fields

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    self_ordering_sound = fields.Binary(related="pos_config_id.self_ordering_sound", readonly=False)
    self_ordering_sound_filename = fields.Char(related="pos_config_id.self_ordering_sound_filename", readonly=False)
