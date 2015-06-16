var SOCIALBC = (function(<%= componentName %>, $) {

	<%= componentName %>.<%= functionName %> = function(options, cb) {
		var locale = WCMAPI.getLocale(), i18n;

		i18n = {
			'pt_BR' : {
				'label.sociableId.code.error' : 'É obrigatório enviar o parâmetro sociableId.',
			},
			'en_US' : {
				'label.sociableId.code.error' : 'É obrigatório enviar o parâmetro sociableId.',
			},
			'es' : {
				'label.sociableId.code.error' : 'É obrigatório enviar o parâmetro sociableId.',
			}
		}[locale];

		if (!options || typeof options !== 'object' || !options.sociableId) {
			return alert(i18n['label.sociableId.code.error']);
		}
		
		if (!options.instanceId) {
			options.title = Date.now();
		}

		function initComponent() {
			//init component
		}

		initComponent();
	};

	return <%= componentName %>;

})(window.SOCIALBC || {}, jQuery);
