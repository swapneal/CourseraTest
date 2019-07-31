(function (global) {
		var ajaxUtlis = {};

		//returns an HTTP request object
		function getRequestObject() {
			// body...
			if (window.XMLHttpRequest) {
				return (new XMLHttpRequest());
			}
			else if (window.ActiveXObject) {
				return (new ActiveXObject("Microsoft.XMLHTTP"));
			}
			else {
				global.alert("AJAX is not supported");
				return(null);
			}
		}


		//makes and AJAX GET request to requesturl
		ajaxUtlis.sendGetRequest = function(requestUrl, responseHandler) {
			var request = getRequestObject();
			request.onreadystatechange = function () {
				handleResponse(request, responseHandler);
			};
			request.open("GET",requestUrl, true);
			request.send(null);
		};

		//only calls user provided responseHandler function if response is ready
		//and not an error

		function handleResponse(request, responseHandler) {
			// body...
			if ((request.readyState == 4) && (request.status == 200)) {
				responseHandler(request);
			}
		}

		global.$ajaxUtlis = ajaxUtlis;
})(window);