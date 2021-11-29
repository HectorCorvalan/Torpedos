-----------------------------------------------
funcion declarativa
-----------------------------------------------
function sumar(a,b) {
	var resultado = a + b;
	return resultado
}

sumar(1,2);
3
-----------------------------------------------
funcion de expresión
-----------------------------------------------
var miFuncion = function(a,b) {
	var resultado = a + b;
	return resultado
}

miFuncion(1,3);
-----------------------------------------------
-----------------------------------------------
SCOPE
-----------------------------------------------
-----------------------------------------------
Scope alcances de las variables,depende donde declare 
la variables si tienes acceso a ella o no

scope global = cuando se inicializa el codigo en js, se genera scopa global.
scope local = cuando se inicializa una funcion se genera scope local.
-----------------------------------------------
var miNombre = "Diego"  ---> var en scope global

function nombre() {
	var miApellido = "De Granda"; ---> var en scope local
	console.log(miNombre + "" + miApellido);
}
nombre();

* A las varibales locales no se puede acceder desde un scope global 
-----------------------------------------------
-----------------------------------------------
HOISING ecmascript 5 o menor
-----------------------------------------------
-----------------------------------------------
cuando las variables y las funciones se procesen antes
que se declare el codigo
-----------------------------------------------
var miNombre = undefined; -> eso pasa cuando no se inicializa la variable
****
console.log(miNombre); 
miNombre = "Diego";
****
undefined -> imprime primero esto
"DIEGO"  -> luego esto
-----------------------------------------------
hey();

function hey() {
	console.log("hola " + miNombre);
}

var miNombre = "Diego";

hola undefined -> esto se imprime
-----------------------------------------------
-----------------------------------------------
COERCION 
-----------------------------------------------
-----------------------------------------------
es la forma en la que podemos cambiar un tipo de valor a otro
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
-----------------------------------------------
 4 + "7" = "47" ejemplos implícita
 4 + "7" = 28
-----------------------------------------------
var = 20;			ejemplos explicita
var c = String(a);
console.log(c);
"20"
-----------------------------------------------
-----------------------------------------------
Operadores: Asignación, Comparación y Aritméticos.
-----------------------------------------------
-----------------------------------------------
3 = "3" Asignación
3 == "3" Comparación solo valor
3 === "3" Comparación tipo y valor

 a && b validar dos variables son verdad
 a || b valirdar que una de las dos sea verdad

var edad = 40
edad++ (se incrementa en 1)
edad += X ( se incrementaen X numero)
-----------------------------------------------
-----------------------------------------------
IF
-----------------------------------------------
-----------------------------------------------
if (true) {
	console.log("hola");
} else {
	console.log("chao");
}
-----------------------------------------------
var edad = 18;

if (edad === 18) {
	console.log("tienes 18 años");
} 	else if (edad > 18) {
	console.log("tienes mas de 18");
}	else {
	console.log("tienes menos de 18");
}
-----------------------------------------------
OPERADOR TERNARIO
-----------------------------------------------
condition ? true: false;

var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : "no soy un uno";
-------------------------------------------------
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```

-----------------------------------------------
-----------------------------------------------
SWITCH
-----------------------------------------------
-----------------------------------------------
var numero = 1;

switch (numero) {
	case 1:
		console.log("soy uno");
		break;
	case 10:
		console.log("soy diez");
		break;
	case 100:
		console.log("soy diez");
		break;
	default:
		console.log("no soy nada")
}

-----------------------------------------------
-----------------------------------------------
ARRAYS
-----------------------------------------------
-----------------------------------------------
var frutas = ["manzana", "platano","cereza", "fresa"];

var agregarFrutaFinal = frutas.push("uvas");
var quitarFrutaFinal = frutas.pop("uvas");
var agregarFrutaInicio = frutas.unshift("uvas");
var quitarFrutaInicio = frutas.shift("uvas");
var posicionFruta = frutas.shift("uvas");

console.log(frutas);
console.log(frutas[1]);
console.log(frutas.length); 
-----------------------------------------------
-----------------------------------------------
Loops: For y For...of
-----------------------------------------------
-----------------------------------------------
var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante){
	console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
	saludarEstudiantes(estudiantes[i]);
}
-----------------------------------------------
var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante){
	console.log(`Hola, ${estudiante}`);
}

for(var i of estudiantes){
	saludarEstudiantes(i);
}
-----------------------------------------------
-----------------------------------------------
Loops: While
-----------------------------------------------
-----------------------------------------------
var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante){
	console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
	var i = estudiantes.shift();
	saludarEstudiantes(i);
}
-----------------------------------------------
-----------------------------------------------
Objects
-----------------------------------------------
-----------------------------------------------
var miAuto = {
	marca: "Toyota",
	modelo: "corolla",
	annio: 2020,
	detalleDelAuto: function() {
		console.log(`Auto ${this.modelo} ${this.annio}`);
	}
};

miAuto.modelo;
miAuto.detalleDelAuto();

this = miAuto.modelo y miAuto.annio 
(es una variable que hace referencia al objeto, a su padre)
-----------------------------------------------
-----------------------------------------------
Objects: Función constructora
-----------------------------------------------
-----------------------------------------------
generar template de un objeto, con parametos o propiedades
para crear objetos automatizados

(*this = funcion auto)

function auto(marca, modelo, annio) {
	this.marca = marca;
	this.modelo = modelo;
	this.annio = annio;
};

var autoNuevo = new auto("tesla","model 3", "2020")  
var autoNuevo2 = new auto("tesla","model x", "2018")
var autoNuevo2 = new auto("toyota","corolla x", "2020")

-> crear objeto nuevo
-----------------------------------------------
-----------------------------------------------

-----------------------------------------------
-----------------------------------------------