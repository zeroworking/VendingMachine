// Declaración de constantes. Almacenan información de la máquina vending
const CODVENDINGMACHINE = "XYZ12031982";
const DIRVENDINGMACHINE = "Los Pajaritos 2756";
const COMVENDINGMACHINE = "Maipú";

// Declaración de Variables
let mensajeMonedero = "";                                           // Variable para el manejo de mensajes en el DOM.
let cambiaImagenEnDom, cambioStockEnDom = "";                       // Varibles que manejan cambio de imagen y stock en DOM.
let totalVentas = 0;                                                // Variable que maneja total recaudacion ventas.
let contenedor = "";                                                // Variable para el objeto en DOM que muestra los productos.
let ubicacion, ubicacion2 = "";                                     // Variables utilizadas para almacenar la ubicación del producto buscado.
let saldo, nuevoSaldo = 0;                                          // Variables utilizadas para el manejo del monedero. 
let parProductoNombre,parProductoPrecio,parProductoStock = "";      // Variables utilizadas como parámetros.

// Muestra en Input el total recaudacion de ventas acumulado en pesos obtenido desde el sessionStorage.
totalVentas = Number(sessionStorage.getItem("totalVentas"));
document.querySelector("#sessionStorage").value = totalVentas;

// Define la clase producto
class Producto {
  constructor(nombre, precio, stock, imagen, ubicacion) {
  this.nombre = nombre;      
  this.precio = precio;
  this.stock = stock;
  this.imagen = imagen;
  this.ubicacion = ubicacion;
  } 
}

// Crea los productos
const p1 = new Producto('Bebida Coca Cola', 1200, 5, './images/A1.jpg','A1');
const p2 = new Producto('Bebida Fanta', 1200, 5, './images/A2.jpg','A2');
const p3 = new Producto('Bebida Sprite', 1200, 5, './images/A3.jpg','A3');
const p4 = new Producto('Bebida Coca Cola Zero', 1200, 5, './images/A4.jpg','A4');
const p5 = new Producto('Bebida Fanta Zero', 1200, 5, './images/A5.jpg','A5');
const p6 = new Producto('Bebida Sprite Zero', 1200, 5, './images/A6.jpg','A6');
const p7 = new Producto('Galleta Mini Vino', 700, 5, './images/B1.jpg','B1');
const p8 = new Producto('Galleta Mini Kuky', 700, 5, './images/B2.jpg','B2');
const p9 = new Producto('Galleta Mini Morocha', 700, 5, './images/B3.jpg','B3');
const p10 = new Producto('Galleta Mini Triton', 700, 5, './images/B4.jpg','B4');
const p11 = new Producto('Galleta Mini Limon', 700, 5, './images/B5.jpg','B5');
const p12 = new Producto('Galleta Mini Mantequilla', 700, 5, './images/B6.jpg','B6');
const p13 = new Producto('Snack Papas Fritas', 500, 5, './images/C1.jpg','C1');
const p14 = new Producto('Snack Ramitas', 500, 5, './images/C2.jpg','C2');
const p15 = new Producto('Snack Mani Salado', 500, 5, './images/C3.jpg','C3');
const p16 = new Producto('Jugo de Naranja', 500, 5, './images/C4.jpg','C4');
const p17 = new Producto('Jugo de Manzana', 500, 5, './images/C5.jpg','C5');
const p18 = new Producto('Jugo de Piña', 500, 5, './images/C6.jpg','C6');

// Crear un arreglo de los productos.
const productos = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18];


// Recorrer el arreglo de productos y crear elementos en el DOM.
contenedor = document.getElementById('contenedor-navidad');

productos.forEach(producto => {
  const divProducto = document.createElement('div');
  divProducto.innerHTML = `    
    <div class="marco">
    <img class="${producto.ubicacion}" src="${producto.imagen}" style="width: 80px;">      
    <div id="${producto.ubicacion}">$${producto.precio}    [${producto.stock}]</div>
    <button onclick="realizarCompra('${producto.ubicacion}')" type="button" class="btn btn-primary">Comprar</button>
    </div>
    `;
  contenedor.appendChild(divProducto);
  }
);

// Código que muestra por consola el stock inicial de productos en la máquina.
console.log("[INICIALIZACION DE VENDING MACHINE]");
for (let i = 0; i < productos.length; i++)
  {
    console.log(productos[i]);
  }
console.log("*************************");

// Inicializa saldo monedero en DOM en 0 
document.querySelector("#saldoMonedero").value = nuevoSaldo;

// Setea en 0 el input de agregar dinero
document.querySelector("#inputAgregaDinero").value = 0;

function agregaDinero() {  
  // Almacena el valor actual del monedero en el DOM.
  nuevosaldotemporal = Number(document.querySelector("#saldoMonedero").value);

  // Suma valor actual del monedero en el DOM con el dinero agregado por input.
  nuevoSaldo = Number(document.querySelector("#inputAgregaDinero").value) + nuevosaldotemporal;
 
  // Actualiza el saldo del monedero en el DOM.
  document.querySelector("#saldoMonedero").value = nuevoSaldo;

  // Setea en 0 el input de agregar dinero
  document.querySelector("#inputAgregaDinero").value = 0;

  // Setea mensaje en el DOM
  mensajeMonedero = document.querySelector("#mensajeMonedero")
                              mensajeMonedero.innerHTML = `
                              
                              <div class="negrita">CENTRO DE MENSAJES</div>
                              <div class="separador"><hr></div>
                              <div class="negrita2">MONEDERO</div>
                              <div class="negrita2">CON SALDO</div>
                              <div class="separador"><hr></div>
                              <div class="negrita2 transparente">.</div>
                              <div class="negrita2 transparente">.</div>
                              `;
  return
}

// Función que envía mensaje a proveedor informando quiebre de stock de producto.  
function quiebreStock(parProductoStock)
{
  console.log("[QUIEBRE DE STOCK]");
  console.log("IOT ACTIVO. Enviando mensaje a proveedor.");
  console.log("Vending Machine Serie : " + CODVENDINGMACHINE + ", " + DIRVENDINGMACHINE + ", " + COMVENDINGMACHINE + ".");
  console.log("Reporta quiebre de stock del producto : " + parProductoStock);
  console.log("*************************");
};

// Función que muestra por consola actualización del stock de productos cada vez que se realiza una compra.
function actualizaStock()
{
  console.log("[ACTUALIZACION DE STOCK]");
  for (let i = 0; i < productos.length; i++)
    {
      console.log(productos[i]);
    }
  console.log("*************************");
};

// Función para buscar el producto por su ubicación.
const buscarProductoPorUbicacion = (ubicacion) => productos.find((producto) => producto.ubicacion === ubicacion);

// Función para realizar la compra.
const realizarCompra = (direccion) =>
{
  ubicacion2 = direccion
  const productoSeleccionado = buscarProductoPorUbicacion(ubicacion2);
  if (productoSeleccionado) 
    {   
      // alert("el producto existe");
      if (productoSeleccionado.stock > 0)
        {
          // alert("el producto tiene stock");                    
          if (nuevoSaldo < productoSeleccionado.precio)
            {
              mensajeMonedero = document.querySelector("#mensajeMonedero")
              mensajeMonedero.innerHTML = `
                <div class="negrita">CENTRO DE MENSAJES</div>
                <div class="separador"><hr></div>
                <div class="negrita2">SALDO INSUFICIENTE</div>
                <div class="negrita2">AGREGUE DINERO</div>
                <div class="separador"><hr></div>
                <div class="negrita2"></div>
                <div class="negrita2"></div>
                `;
            }
          else
            {
              // Rebajando el stock del producto.
              productoSeleccionado.stock--;
                
              // Actualizando el saldo del monedero.                                        
              nuevoSaldo = nuevoSaldo - productoSeleccionado.precio;
                
              // Cambiando stock del producto en el DOM.               
              cambioStockEnDom = document.querySelector("#" + productoSeleccionado.ubicacion);
              cambioStockEnDom.textContent = "$" + productoSeleccionado.precio + "[" + productoSeleccionado.stock + "]";
      
              // Actualizando el saldo del monedero en el DOM.
              document.querySelector("#saldoMonedero").value = nuevoSaldo;

              // Venta realizada. Setea mensaje en el DOM.
              mensajeMonedero = document.querySelector("#mensajeMonedero")
              mensajeMonedero.innerHTML = `
                <div class="negrita">COMPRA REALIZADA</div>
                <div class="separador"><hr></div>
                <div class="">${productoSeleccionado.nombre}</div>
                <div class="">$${productoSeleccionado.precio}</div>
                <div class="separador"><hr></div>
                <div class="negrita2">RETIRE SU PRODUCTO</div>
                <div class="negrita2">GRACIAS POR SU COMPRA</div>
                `;
                  
              // Actualiza el total de ventas en el DOM.               
              totalVentas = Number(sessionStorage.getItem("totalVentas"));
              totalVentas = totalVentas + productoSeleccionado.precio;
              sessionStorage.setItem("totalVentas",totalVentas);
              document.querySelector("#sessionStorage").value = totalVentas;
                
              // Actualizando stock por consola. 
              actualizaStock();
            }                    
                              

          // Notifica a proveedor el quiebre de stock de un producto.             
          if (productoSeleccionado.stock == 0) 
            {
              quiebreStock(productoSeleccionado.nombre);
          
              // Cambia imagen del producto en el DOM cuando el stock es 0.            
              cambiaImagenEnDom = document.querySelector("." + productoSeleccionado.ubicacion);
              rutaImagen = "./images/" + productoSeleccionado.ubicacion + "ND.jpg";
              cambiaImagenEnDom.setAttribute("src",rutaImagen);
            }    
        }
      else
        {
          mensajeMonedero = document.querySelector("#mensajeMonedero")
          mensajeMonedero.innerHTML = `
            <div class="negrita">CENTRO DE MENSAJES</div>
            <div class="separador"><hr></div>
            <div class="negrita2">PRODUCTO</div>
            <div class="negrita2">SIN STOCK</div>
            <div class="separador"><hr></div>
            <div class="negrita2"></div>
            <div class="negrita2"></div>
          `;
        }
    }
}

// Funcion que realiza la devolucion del saldo en monedero.
function devuelveDinero()
{
  mensajeMonedero = document.querySelector("#mensajeMonedero")
  mensajeMonedero.innerHTML = `
    <div class="negrita">DEVOLUCION DE SALDO</div>
    <div class="separador"><hr></div>
    <div class="">Entregando</div>
    <div class="">$${nuevoSaldo}</div>
    <div class="separador"><hr></div>
    <div class="negrita2">GRACIAS POR SU COMPRA</div>
    <div class="negrita2">VUELVA PRONTO</div>
    `;

  // Actualiza en cero el saldo en monedero dando paso a una nueva venta.
  nuevoSaldo = 0;

   // Actualiza en cero el saldo en monedero en el DOM.
  document.querySelector("#saldoMonedero").value = nuevoSaldo;
}

// Asigna funciones al evento de clic de los botones en el DOM.
document.getElementById('botonDevolucion').addEventListener('click', devuelveDinero);
document.getElementById('botonAgregaDinero').addEventListener('click', agregaDinero);



                     
                              
                      
                      
        