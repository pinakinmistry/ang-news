'use strict';

app.filter('hostnameFromUrl', function() {
	return function (href) {
		var url = document.createElement('a');
		url.href = href;
		return url.hostname;
	};
});