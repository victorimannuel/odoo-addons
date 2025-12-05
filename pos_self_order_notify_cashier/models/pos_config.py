from odoo import models, fields

class PosConfig(models.Model):
    _inherit = 'pos.config'

    self_ordering_sound = fields.Binary("Self Ordering Sound")
    self_ordering_sound_filename = fields.Char("Sound Filename")
