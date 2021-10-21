 
var cesar = cesar || (function(){

	var doStaff = function(txt, desp, action){

		var replace = (function(){
			var abc = ['a','b','c','d','e','f','g','h','i',
			'j','k','l','m','n','ñ','o','p','q','r','s','t',
			'u','v','w','x','y','z'];
		
			var l = abc.lenght;

			return function(c){
				var i = abc.indexOf(c.toLowerCase());
				
				if (i != -1) {
					var pos = i; 
					if (action) {
						//pos += desp;
						//if ((pos+desp)>27) 
						//} 
						//pos = pos + desp;

						//pos += ((pos+desp)%27);
						//alert(pos,desp)
						//pos -= ((pos+desp)%28>=1)?1:0;
						//alert(Number(pos)+1);
						//alert(pos+desp%27)
						if ((pos+desp%27)>= 27) {
							//alert("andamos en el if")
							pos = (pos+desp)%27;
							//alert (pos) 
						} else {
							//alert("andamos en el 1er else")
							pos = (pos+desp)%27;
						}
						//alert(pos)
					} else {
						//alert("andamos en el 2o else")
						
						if ((pos-desp%27)<= 27) {
							//alert("andamos en el if")
							//alert(pos)
							//alert(desp)
							pos = (pos-desp)%27;
							//alert(pos)
							if (pos<0) {
								pos = 27+pos;
							}
							/*
							if (pos>=27) {
			
							}
							pos = 27+pos;
							alert (pos) */
						} else {
							alert("andamos en el 1er else")
							pos = (pos-desp)%27;
							pos = 27 + pos;
						}
						//alert(pos)
						
						/*
						alert("primerpos"+pos)
						alert("primerdesp"+desp)
						pos -= desp;
						alert("segpos"+pos)
						alert("segdesp"+desp)
						pos += (pos<0)?1:0;
						alert("terpos"+pos)
						alert("terdesp"+desp)
						*/
					}
					return abc[pos];
				}
				return c;
			};

		})();

		var re = (/[a-z\u00f1]/ig);
		return String(txt).replace(re, function(match){
			return replace(match);
		});
	};

	return {
		encode : function(text, desp){
			return doStaff(text, desp, true)
		}, 
		decode : function(text, desp){
			return doStaff(text, desp, false)
		}
	};

})();

function codificar(){
	var cadetext = String(document.getElementById("Cadena").value)
	if (cadetext==' ') {
		alert("Ingresa un texto a codificar");
		location.reload();
	}
	var incremento = Number(document.getElementById("incremento").value)
	var incrementof = Number(incremento /*+ 1*/);
	if (Number.isInteger(incrementof)) {
		if (incrementof>=0) {
			document.getElementById("CadenaRes").innerHTML =
			cesar.encode(document.getElementById("Cadena").value, incrementof)	
		} else {
			alert("Ingresa un número positivo en el campo de incremento");
			location.reload();
		}
	} else {
		alert("Ingresa un número entero positivo en el campo de incremento");
		location.reload();
	}
	
	



}

function decodificar(){
	var cadetext2 = String(document.getElementById("Cadena").value)
	if (cadetext2==' ') {
		alert("Ingresa un texto a decodificar");
		location.reload();
	}/*
	var decremento = Number(document.getElementById("incremento").value)
	//var decrementof = Number(-incremento - 1);
	alert(decremento);
*/
	var decremento = Number(document.getElementById("incremento").value)
	var decrementof = Number(decremento);
	if (Number.isInteger(decrementof)) {
		if (decrementof>=0) {
			document.getElementById("CadenaRes").innerHTML =
			cesar.decode(document.getElementById("Cadena").value, decrementof)	
		} else {
			alert("Ingresa un número positivo en el campo de incremento");
			location.reload();
		}
	} else {
		alert("Ingresa un número entero positivo en el campo de incremento");
		location.reload();
	}
 	
}

