alert("Bienvenidos,lo ayudaremos en su consulta.");

const productos = [
    { nombre: "The Last Of As", precioProducto: 2500 },
    { nombre: "Diablo 4", precioProducto: 3500 },
    { nombre: "apex Legend", precioProducto: 1800 },
    { nombre: "Metal Gear Solid", precioProducto: 4000 },

];
let carrito = []
let seleccion = prompt("Desea comprar algun juego si o no");

while (seleccion != "si" && seleccion != "no") {
    alert("Ingrese si o no")
    seleccion = prompt("desea comprar un juego si o no")
}

if (seleccion == "si") {
    alert("Lista de nuestros juegos")
    let todosLosProductos = productos.map((productos) => productos.nombre + "" + productos.precioProducto + "$");
}
console.log(productos);

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
calcularCostoTotal("productos+precioProducto");











