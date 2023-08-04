/*let edad, numeroHijos, antiguedad, premios, salario;

edad= parseInt(prompt("ingresar edad:"));
numeroHijos= parseInt(prompt("\n ingresar numero de hijos:"));
antiguedad= parseInt(prompt("\n ingresar antiguedad:"));
salario= parseInt(prompt("\n ingresar salario actual:"));
premios= parseInt(prompt("\n ingresar numeros de premios"));


if(premios > 3 && antiguedad > 5 ){
    salario = salario + ( salario * 0.18 );
    

}else if(numeroHijos > 3 && edad > 45){
    salario = salario + ( salario * 0.14 );
   
}else if(salario < 650000){
    salario = salario + ( salario * 0.1 );
    
}
console.log ("\n El nuevo salario es de:" + salario);*/

/*let i = 0;

let n = 0;
while (i < 5) {
    i++
    if (i === 3) { continue; }
    n += i;
    console.log(n);
}*/
// 1,3,7,12

function calcularCostoTotal() {
    const cantidadDeProductos = parseInt(prompt("Ingrese la cantidad de productos:"));

    let costoTotal = 0;

    for (let i = 1; i <= cantidadDeProductos; i++) {
        const precioProducto = parseFloat(
            prompt("Ingrese el precio del producto ${i}:")
        );

        if (!isNaN(precioProducto) && precioProducto > 0) {
            costoTotal += precioProducto;
        } else {
            alert("El precio ingresado es invalido. Intente nuevamente.");
            i--;
        }

    }
    alert("El costo total es de: $${costoTotal.toFixed (2)}");
}
calcularCostoTotal();










