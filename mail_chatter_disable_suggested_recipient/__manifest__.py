# -*- coding: utf-8 -*-
#############################################################################
#
#    Victor Imannuel
#
#    Copyright (C) 2025-TODAY Victor Imannuel(<https://www.victorimannuel.com>)
#    Author: Victor Imannuel (victorimannuel.dev@gmail.com)
#
#    You can modify it under the terms of the GNU LESSER
#    GENERAL PUBLIC LICENSE (LGPL v3), Version 3.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU LESSER GENERAL PUBLIC LICENSE (LGPL v3) for more details.
#
#    You should have received a copy of the GNU LESSER GENERAL PUBLIC LICENSE
#    (LGPL v3) along with this program.
#    If not, see <http://www.gnu.org/licenses/>.
#
#############################################################################
{
    "name": "Mail Chatter - Disable Suggested Recipient",
    "version": "18.0.1.0.0",
    "category": "Web",
    "summary": "Disable Suggested Recipient",
    "description": """
        This module disables suggested recipient in the chatter.
    """,
    "author": "Victor Imannuel",
    "company": "",
    "maintainer": "Victor Imannuel",
    "website": "https://victor.imannuel.kartika.web.id",
    "depends": [
        "web",
        "mail"
    ],
    "data": [
    ],
    'assets': {
        'web.assets_backend': [
            'mail_chatter_disable_suggested_recipient/static/src/js/uncheck_suggested_recipient.js',
            
            # Uncomment one of below files to use (both JS and CSS are working fine)
            'mail_chatter_disable_suggested_recipient/static/src/js/disable_suggested_recipient.js',
            # 'mail_chatter_disable_suggested_recipient/static/src/css/disable_suggested_recipient.css',
        ],
    },
    'images': [
    ],
    'license': 'LGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
