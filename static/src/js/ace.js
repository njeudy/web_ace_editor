openerp.web_ace_editor = function (oe) {

    var QWeb = oe.web.qweb,
    _t  = oe.web._t,
    _lt = oe.web._lt;

    oe.web.form.widgets.add('ace_editor', 'openerp.web_ace_editor.FieldTextAceEditor');


    oe.web_ace_editor.FieldTextAceEditor = oe.web.form.FieldText.extend(oe.web.form.ReinitializeFieldMixin, {
	template: 'FieldTextAceEditor',
	init: function(field_manager, node) {
            var self = this;
	    this.editorDivName = 'ace_editor_' + node.attrs.name
            this._super(field_manager, node);
            this.mode = node.attrs['data-editor-mode'] !== undefined ? node.attrs['data-editor-mode'] : "xml";
            this.theme = node.attrs['data-editor-theme'] !== undefined ? node.attrs['data-editor-theme'] : "chrome";

	},
        initialize_content: function() {
            var self = this;
            if (! this.get("effective_readonly")) {
                this.$textarea = this.$el.find('textarea');
		this.auto_sized = false;
                this.default_height = this.$textarea.css('height');
                if (this.get("effective_readonly")) {
                    this.$textarea.attr('disabled', 'disabled');
                }
            } else {
                this.$textarea = undefined;
            }
        },
        commit_value: function () {
            if (! this.get("effective_readonly") && this.$textarea) {
                this.store_dom_value();
            }
            return this._super();
        },
        store_dom_value: function () {
	    this.$textarea.val(this.$editor.getSession().getValue());
            this.internal_set_value(oe.web.parse_value(this.$textarea.val(), this));
        },
        render_value: function() {
            if (! this.get("effective_readonly")) {
		if (this.$editor === undefined) {
                    this.$editor = ace.edit($('#' + this.editorDivName)[0]);
                    this.$editor.setTheme("ace/theme/" + this.theme);
                    this.$editor.getSession().setMode("ace/mode/" + this.mode);

                    this.$textarea.css('visibility', 'hidden');
                    this.$textarea.css('display', 'none');
                }

                var show_value = oe.web.format_value(this.get('value'), this, '');
                if (show_value === '') {
                    this.$textarea.css('height', parseInt(this.default_height, 10)+"px");
                }
                this.$textarea.val(show_value);
                this.$editor.getSession().setValue(show_value);
                if (! this.auto_sized) {
                    this.auto_sized = true;
                    this.$textarea.autosize();
                } else {
                    this.$textarea.trigger("autosize");
                }
            } else {
                var txt = this.get("value") || '';
                this.$(".oe_form_text_content").text(txt);
            }
        },
    });
}

