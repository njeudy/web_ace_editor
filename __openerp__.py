{
    'name': 'Web',
    'category': 'Hidden',
    'version': '1.0',
    'description':
        """
OpenERP Web ACE Editor Widget.
==============================

This module provides the ace editor widget for textfield.
        """,
    'depends': ['base'],
    'auto_install': False,
    'js' : [
	"static/lib/ace/ace.js",
        "static/src/js/ace.js",
    ],
    'css' : [
    ],
    'qweb' : [
	"static/src/xml/*.xml",
    ],
    'test': [
    ],
}
