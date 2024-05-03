

let a, b, c, delta, x1, x2;
a = prompt("A=");
b = prompt("B=");
c = prompt("C=");
console.log(a, b, c);
delta = b**2 - 4*a*c;
if(delta < 0 ){
	console.log("Aucune solution entiere")
} else {
	// delta >=0
	if(delta == 0){
		x1 = -1*b*b/(2*a);
		console.log("Solution double = ", x1)
	} else {
		x1 = (-1*b + Math.sqrt(delta)  ) / (2*a);
		x2 = (-1*b - Math.sqrt(delta)  ) / (2*a);
		console.log("Solutions = ", x1, " ", x2)
	}
}

