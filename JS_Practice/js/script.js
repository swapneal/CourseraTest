
document.addEventListener("DOMContentLoaded",
	function (event) {
		function sayHello (event) {
			this.textContent = "Said it";
			var name = document.getElementById("name").value;
			var message = //"Hello " + name + " :)";
							"<h2>Hello " + name + "</h2>";
			document.getElementById("content").innerHTML = message;

			if (name === "student") {
				var title = document.querySelector("#title").textContent;
				title += " & Studying"
				document.querySelector("#title").textContent = title;
	}
};


//unobstructive event binding
document.querySelector("button").addEventListener("click", sayHello);

//another way to define unobstructive event binging
// document.querySelector("button").onClick = sayHello;

document.querySelector("body").addEventListener("mousemove",
		function (event) {
			// body...
			if (event.shiftKey === true) {
				console.log("X: " + event.clientX);
				console.log("Y: " + event.clientY);
			}
		}
	);

	} 
);

