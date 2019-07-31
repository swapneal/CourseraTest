
document.addEventListener("DOMContentLoaded",
	function (event) {
		//unobstructive event binding
		document.querySelector("button").addEventListener("click", function(){
			
			//call server to get the name
			$ajaxUtlis.sendGetRequest("/data/name.txt", function(request){
				var name = request.responseText;
				console.log(name);

				document.querySelector("#content").innerHTML = 
					"<h2>Hello " + name + "</h2>";
			});
		});

});




