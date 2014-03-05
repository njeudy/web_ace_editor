# -*- coding: utf-8 -*-

{
    "name": 'Web',
    "description": u"""
OpenERP Web ACE Editor Widget.
==============================

This module provides the ace editor widget for textfield.
        """,
    "version": "1.0",
    "depends": [
        'web',
    ],
    "author": "Tuxservices - 0k.io",
    "category": "Hidden",
    "installable" : True,
    "active" : True,
    "data": [
        'ir_ui_view_record.xml',
    ],
    "qweb": [
        'static/src/xml/*.xml',
    ],
    "js": [
        'static/lib/ace/ace.js',
        'static/src/js/ace.js',
    ],
}

