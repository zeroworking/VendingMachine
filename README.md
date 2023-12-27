CODERHOUSE

Curso       : JavaScript.

Comisión    : 49805.

Alumno      : Jorge Jara.

Entrega     : Tercera Entrega.

Proyecto    : Vending Machine.

Versión     : 3.0.0.

Github      : https://github.com/zeroworking/VendingMachine

Github Page : https://zeroworking.github.io/VendingMachine/

Considera   : Uso de constantes,variables,condicionales,funciones,clases,arrays,métodos de búsqueda y operaciones sobre el array.

Considera   : Manejo de DOM, Eventos y LocalStorage.


***********************************************




NOTAS PREVIAS

El programa emula el funcionamiento de una vending machine de 18 productos con monedero. Estos productos se crean a partir de un objeto constructor.

Los productos están referenciados por una ubicación en la máquina. Las ubicaciones son las siguientes:


A1 = Coca Cola , A2 = Fanta , A3 = Sprite , ... etc.


Cada producto tiene un precio y un stock inicial de 5 unidades.



FUNCIONAMIENTO

Una vez cargado el index.html e inicializada la vending machine es posible realizar compra de productos.

Para comprar un producto se debe presionar el boton comprar del producto de su interes. Una vez seleccionado el producto se le pedirá agregar dinero.

Puede agregar tanto dinero como desee desde 1 peso. Si agrega menos dinero que el valor del producto se le pedirá ingresar más cantidad de dinero.

Cuando su monedero tenga un monto en dinero igual o superior al valor producto de su interés se ejecutará automáticamente la compra.

Si queda saldo en su monedero puede volver a comprar más productos o solicitar la devolución de su saldo. 

Para solicitar la devolución de su saldo en el monedero debe presionar el boton rojo que dice RETIRAR SALDO MONEDERO

Para realizar una nueva compra con el saldo disponible en su monedero solo debe preceder a elegir el producto de su interés y hacer clic al boton comprar.

Si el producto de su interés queda sin stock se le pedirá elegir un producto diferente al hacer clic en el bonton comprar.

Haciendo uso de sessionStorage se suma el total de dinero recaudado por concepto de las ventas realizadas.


IMPORTANTE!

Si un cliente solicita la devolución de su saldo "vuelto" se asume que ha finalizado su compra, por tanto, el saldo del monedero de la vending machine se restablece a cero.
Esto da paso a un nuevo cliente que accede a la vending machine con el stock de productos disponibles en ese momento.




NOTA

Recargar el navegador implica inicializar la vending machine. El stock de producto queda al 100% (5 unidades por producto).




INFORMACION ADICIONAL

Cada vez que se realiza una compra se rebaja una unidad del producto adquirido.
Si alguno de los productos llega a quedar sin stock automáticamente cambia su imagen por una en blanco y negro y se llama a la función quiebreStock notificando al proveedor de este acontecimiento (ver consola).‣敖摮湩䵧捡楨敮�