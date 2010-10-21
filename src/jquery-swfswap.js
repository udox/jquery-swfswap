(function( $ ){

	$.fn.contentSwap = function(url, alt) {
		
		var OSName="Unknown OS";
		var osArr = ['Win', 'Mac', 'X11', 'Linux', 'Android','iPad', 'iPhone', 'iPod'];
		
		for (var i = 0; i < osArr.length; i++) { if(navigator.appVersion.indexOf(osArr[i]) != -1) OSName = osArr[i]; }
		
		if ( OSName == "iPad" || OSName == "iPhone" || OSName == "iPod") {
			if(this[0].tagName == 'IMG')
				$(this).attr("src", url);
			else if(this[0].tagName == 'DIV' && (url.lastIndexOf(".jpg")!=-1 || url.lastIndexOf(".png")!=-1 || url.lastIndexOf(".gif")!=-1))
				$(this).html("<img src=\"" + url + "\" alt=\"" + alt + "\"    \/>");
			else {
				var div = this;
				$.get(url, function(data) {
					$(div).html(data);
				});
			}
		}
	};
	
})( jQuery );