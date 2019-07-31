//functon constructor
// constructor can not return any value


function Circle (radius) {   //this constructor will create getArea function with every object creation
	console.log(this);
	this.radius = radius;

	this.getArea = 
		function () {
			return Math.PI * Math.pow(this.radius, 2);
		}
}



function Circle (radius) {
	console.log(this);
	this.radius = radius;
}

Circle.prototype.getArea = function() {
	return Math.PI * Math.pow(this.radius, 2);		
};



var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());


