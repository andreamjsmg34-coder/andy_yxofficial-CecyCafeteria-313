/* =====================================
   VARIABLES
===================================== */

let pedido = [];

let historialPedidos = [];

let numeroPedido = 1;

let pedidoActual = null;


/* =====================================
   PRODUCTOS DEL MENÚ
===================================== */

const categorias = {

    "Hamburguesas": {
        icono: "🍔",
        descripcion: "Hamburguesas preparadas para disfrutar.",
        productos: [
            {
                nombre: "Hamburguesa",
                precio: 35,
                imagen: "hamburguesa.jpg",
                descripcion: "Hamburguesa preparada para disfrutar."
            }
        ]
    },


    "Sándwiches": {
        icono: "🥪",
        descripcion: "Opciones rápidas y deliciosas.",
        productos: [
            {
                nombre: "Sándwich",
                precio: 25,
                imagen: "sandwich.jpg",
                descripcion: "Sándwich preparado para una comida rápida."
            }
        ]
    },


    "Tortas": {
        icono: "🥖",
        descripcion: "Elige el tipo de torta que prefieras.",
        productos: [
            {
                nombre: "Torta de jamón",
                precio: 30,
                imagen: "torta-jamon.jpg",
                descripcion: "Torta preparada con jamón."
            },
            {
                nombre: "Torta de pierna",
                precio: 35,
                imagen: "torta-pierna.jpg",
                descripcion: "Torta preparada con pierna."
            },
            {
                nombre: "Torta de milanesa",
                precio: 40,
                imagen: "torta-milanesa.jpg",
                descripcion: "Torta preparada con milanesa."
            },
            {
                nombre: "Torta de pollo",
                precio: 35,
                imagen: "torta-pollo.jpg",
                descripcion: "Torta preparada con pollo."
            }
        ]
    },


    "Tacos": {
        icono: "🌮",
        descripcion: "Escoge tus tacos favoritos.",
        productos: [
            {
                nombre: "Tacos de bistec",
                precio: 35,
                imagen: "tacos-bistec.jpg",
                descripcion: "Tacos preparados con bistec."
            },
            {
                nombre: "Tacos de pollo",
                precio: 30,
                imagen: "tacos-pollo.jpg",
                descripcion: "Tacos preparados con pollo."
            },
            {
                nombre: "Tacos al pastor",
                precio: 35,
                imagen: "tacos-pastor.jpg",
                descripcion: "Tacos preparados al estilo pastor."
            },
            {
                nombre: "Tacos de chorizo",
                precio: 30,
                imagen: "tacos-chorizo.jpg",
                descripcion: "Tacos preparados con chorizo."
            }
        ]
    },


    "Quesadillas": {
        icono: "🧀",
        descripcion: "Quesadillas con diferentes ingredientes.",
        productos: [
            {
                nombre: "Quesadilla de queso",
                precio: 25,
                imagen: "quesadilla-queso.jpg",
                descripcion: "Quesadilla con queso."
            },
            {
                nombre: "Quesadilla de pollo",
                precio: 30,
                imagen: "quesadilla-pollo.jpg",
                descripcion: "Quesadilla con pollo."
            },
            {
                nombre: "Quesadilla de champiñones",
                precio: 28,
                imagen: "quesadilla-champinones.jpg",
                descripcion: "Quesadilla con champiñones."
            },
            {
                nombre: "Quesadilla de chorizo",
                precio: 30,
                imagen: "quesadilla-chorizo.jpg",
                descripcion: "Quesadilla con chorizo."
            }
        ]
    },


    "Pizza": {
        icono: "🍕",
        descripcion: "Elige el tipo de pizza que quieras.",
        productos: [
            {
                nombre: "Pizza de pepperoni",
                precio: 30,
                imagen: "pizza-pepperoni.jpg",
                descripcion: "Pizza con pepperoni."
            },
            {
                nombre: "Pizza de jamón",
                precio: 30,
                imagen: "pizza-jamon.jpg",
                descripcion: "Pizza con jamón."
            },
            {
                nombre: "Pizza hawaiana",
                precio: 35,
                imagen: "pizza-hawaiana.jpg",
                descripcion: "Pizza con jamón y piña."
            },
            {
                nombre: "Pizza de queso",
                precio: 25,
                imagen: "pizza-queso.jpg",
                descripcion: "Pizza con queso."
            }
        ]
    },


    "Papas y Sabritas": {
        icono: "🍟",
        descripcion: "Papas y botanas para disfrutar.",
        productos: [
            {
                nombre: "Papas clásicas",
                precio: 25,
                imagen: "papas-clasicas.jpg",
                descripcion: "Papas clásicas."
            },
            {
                nombre: "Papas con queso",
                precio: 30,
                imagen: "papas-queso.jpg",
                descripcion: "Papas acompañadas con queso."
            },
            {
                nombre: "Papas con salsa",
                precio: 28,
                imagen: "papas-salsa.jpg",
                descripcion: "Papas acompañadas con salsa."
            },
            {
                nombre: "Sabritas",
                precio: 18,
                imagen: "sabritas.jpg",
                descripcion: "Botana Sabritas."
            }
        ]
    },


    "Golosinas": {
        icono: "🍬",
        descripcion: "Dulces para disfrutar durante el recreo.",
        productos: [
            {
                nombre: "Dulces",
                precio: 10,
                imagen: "dulces.jpg",
                descripcion: "Dulces variados."
            },
            {
                nombre: "Chocolates",
                precio: 15,
                imagen: "chocolates.jpg",
                descripcion: "Chocolates variados."
            },
            {
                nombre: "Gomitas",
                precio: 12,
                imagen: "gomitas.jpg",
                descripcion: "Gomitas de diferentes sabores."
            },
            {
                nombre: "Paletas",
                precio: 8,
                imagen: "paletas.jpg",
                descripcion: "Paletas de diferentes sabores."
            }
        ]
    },


    "Bebidas": {
        icono: "🥤",
        descripcion: "Bebidas frías para acompañar tu comida.",
        productos: [
            {
                nombre: "Agua simple",
                precio: 15,
                imagen: "agua-simple.jpg",
                descripcion: "Agua simple."
            },
            {
                nombre: "Agua de jamaica",
                precio: 18,
                imagen: "agua-jamaica.jpg",
                descripcion: "Agua fresca de jamaica."
            },
            {
                nombre: "Agua de horchata",
                precio: 18,
                imagen: "agua-horchata.jpg",
                descripcion: "Agua fresca de horchata."
            },
            {
                nombre: "Agua de sandía",
                precio: 18,
                imagen: "agua-sandia.jpg",
                descripcion: "Agua fresca de sandía."
            },
            {
                nombre: "Agua de limón",
                precio: 18,
                imagen: "agua-limon.jpg",
                descripcion: "Agua fresca de limón."
            },
            {
                nombre: "Refresco",
                precio: 10,
                imagen: "refresco.jpg",
                descripcion: "Refresco frío."
            }
        ]
    },


    "Yogurt con fruta": {
        icono: "🍓",
        descripcion: "Yogurt acompañado con fruta.",
        productos: [
            {
                nombre: "Yogurt con fresa",
                precio: 25,
                imagen: "yogurt-fresa.jpg",
                descripcion: "Yogurt con fresa."
            },
            {
                nombre: "Yogurt con plátano",
                precio: 25,
                imagen: "yogurt-platano.jpg",
                descripcion: "Yogurt con plátano."
            },
            {
                nombre: "Yogurt con papaya",
                precio: 25,
                imagen: "yogurt-papaya.jpg",
                descripcion: "Yogurt con papaya."
            },
            {
                nombre: "Yogurt con sandía",
                precio: 25,
                imagen: "yogurt-sandia.jpg",
                descripcion: "Yogurt con sandía."
            },
            {
                nombre: "Yogurt con manzana",
                precio: 25,
                imagen: "yogurt-manzana.jpg",
                descripcion: "Yogurt con manzana."
            },
            {
                nombre: "Yogurt con fruta mixta",
                precio: 30,
                imagen: "yogurt-mixto.jpg",
                descripcion: "Yogurt acompañado con fruta mixta."
            }
        ]
    },


    "Ensaladas": {
        icono: "🥗",
        descripcion: "Opciones frescas para disfrutar.",
        productos: [
            {
                nombre: "Ensalada de frutas",
                precio: 30,
                imagen: "ensalada-frutas.jpg",
                descripcion: "Ensalada preparada con frutas."
            },
            {
                nombre: "Ensalada mixta",
                precio: 30,
                imagen: "ensalada-mixta.jpg",
                descripcion: "Ensalada con ingredientes variados."
            },
            {
                nombre: "Ensalada de verduras",
                precio: 30,
                imagen: "ensalada-verduras.jpg",
                descripcion: "Ensalada preparada con verduras."
            }
        ]
    },


    "Cacahuates y botanas": {
        icono: "🥜",
        descripcion: "Botanas para disfrutar durante el recreo.",
        productos: [
            {
                nombre: "Cacahuates naturales",
                precio: 15,
                imagen: "cacahuates-naturales.jpg",
                descripcion: "Cacahuates naturales."
            },
            {
                nombre: "Cacahuates enchilados",
                precio: 15,
                imagen: "cacahuates-enchilados.jpg",
                descripcion: "Cacahuates enchilados."
            },
            {
                nombre: "Cacahuates japoneses",
                precio: 15,
                imagen: "cacahuates-japoneses.jpg",
                descripcion: "Cacahuates japoneses."
            }
        ]
    },


    "Pan y repostería": {
        icono: "🍩",
        descripcion: "Pan dulce y repostería.",
        productos: [
            {
                nombre: "Dona",
                precio: 15,
                imagen: "dona.jpg",
                descripcion: "Dona tradicional."
            },
            {
                nombre: "Dona de chocolate",
                precio: 18,
                imagen: "dona-chocolate.jpg",
                descripcion: "Dona con chocolate."
            },
            {
                nombre: "Dona glaseada",
                precio: 18,
                imagen: "dona-glaseada.jpg",
                descripcion: "Dona glaseada."
            },
            {
                nombre: "Concha",
                precio: 15,
                imagen: "concha.jpg",
                descripcion: "Concha tradicional."
            },
            {
                nombre: "Concha de vainilla",
                precio: 15,
                imagen: "concha-vainilla.jpg",
                descripcion: "Concha de vainilla."
            },
            {
                nombre: "Concha de chocolate",
                precio: 15,
                imagen: "concha-chocolate.jpg",
                descripcion: "Concha de chocolate."
            },
            {
                nombre: "Cuernito",
                precio: 18,
                imagen: "cuernito.jpg",
                descripcion: "Cuernito de pan."
            },
            {
                nombre: "Pan dulce",
                precio: 15,
                imagen: "pan-dulce.jpg",
                descripcion: "Pan dulce variado."
            }
        ]
    },


    "Chilaquiles": {
        icono: "🍲",
        descripcion: "Chilaquiles preparados para disfrutar.",
        productos: [
            {
                nombre: "Chilaquiles rojos",
                precio: 35,
                imagen: "chilaquiles-rojos.jpg",
                descripcion: "Chilaquiles con salsa roja."
            },
            {
                nombre: "Chilaquiles verdes",
                precio: 35,
                imagen: "chilaquiles-verdes.jpg",
                descripcion: "Chilaquiles con salsa verde."
            },
            {
                nombre: "Chilaquiles con pollo",
                precio: 45,
                imagen: "chilaquiles-pollo.jpg",
                descripcion: "Chilaquiles acompañados con pollo."
            },
            {
                nombre: "Chilaquiles con huevo",
                precio: 40,
                imagen: "chilaquiles-huevo.jpg",
                descripcion: "Chilaquiles acompañados con huevo."
            }
        ]
    }

};


/* =====================================
   INICIO
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const formulario =
        document.getElementById("formLogin");


    if (formulario) {

        formulario.addEventListener(
            "submit",
            function (evento) {

                evento.preventDefault();

                iniciarSesion();

            }
        );

    }


    /*
       El menú se genera automáticamente
       utilizando las categorías de arriba.
    */

    mostrarCategorias();

});


/* =====================================
   INICIO DE SESIÓN
===================================== */

function iniciarSesion() {

    const correo =
        document.getElementById("correo").value.trim();


    const contrasena =
        document.getElementById("contrasena").value.trim();


    if (correo === "" || contrasena === "") {

        alert(
            "Por favor completa todos los campos."
        );

        return;

    }


    if (!correo.includes("@")) {

        alert(
            "Escribe un correo electrónico válido."
        );

        return;

    }


    alert(
        "¡Inicio de sesión exitoso!"
    );


    mostrarPantalla(
        "pantallaInicio"
    );

}


/* =====================================
   CREAR CUENTA
===================================== */

function crearCuenta() {

    alert(
        "La creación de cuenta estará disponible " +
        "en una versión futura de CecyCafetería."
    );

}


/* =====================================
   CAMBIAR DE PANTALLA
===================================== */

function mostrarPantalla(idPantalla) {

    const pantallas =
        document.querySelectorAll(".pantalla");


    pantallas.forEach(function (pantalla) {

        pantalla.classList.add("oculto");

    });


    const pantallaSeleccionada =
        document.getElementById(idPantalla);


    if (pantallaSeleccionada) {

        pantallaSeleccionada.classList.remove("oculto");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================
   MOSTRAR CATEGORÍAS
===================================== */

function mostrarCategorias() {

    const menu =
        document.querySelector("#pantallaMenu .menu");


    if (!menu) {

        return;

    }


    menu.innerHTML = "";


    Object.keys(categorias).forEach(
        function (nombreCategoria) {

            const categoria =
                categorias[nombreCategoria];


            const tarjeta =
                document.createElement("div");


            tarjeta.className =
                "categoria";


            tarjeta.innerHTML = `

                <div class="categoria-icono">
                    ${categoria.icono}
                </div>

                <h3>
                    ${nombreCategoria}
                </h3>

                <p>
                    ${categoria.descripcion}
                </p>

                <button
                    type="button"
                    onclick="mostrarProductos('${nombreCategoria}')"
                >
                    Ver opciones
                </button>

            `;


            menu.appendChild(tarjeta);

        }
    );

}


/* =====================================
   MOSTRAR PRODUCTOS DE UNA CATEGORÍA
===================================== */

function mostrarProductos(nombreCategoria) {

    const categoria =
        categorias[nombreCategoria];


    if (!categoria) {

        return;

    }


    const menu =
        document.querySelector("#pantallaMenu .menu");


    if (!menu) {

        return;

    }


    menu.innerHTML = "";


    /*
       Botón para regresar a las categorías.
    */

    const botonRegresar =
        document.createElement("div");


    botonRegresar.style.gridColumn =
        "1 / -1";


    botonRegresar.style.textAlign =
        "center";


    botonRegresar.innerHTML = `

        <button
            type="button"
            class="boton-volver-categoria"
            onclick="mostrarCategorias()"
        >
            ← Volver a categorías
        </button>

        <h2
            style="
                color:#176b45;
                margin:20px 0;
                font-size:28px;
            "
        >
            ${categoria.icono}
            ${nombreCategoria}
        </h2>

    `;


    menu.appendChild(botonRegresar);


    categoria.productos.forEach(
        function (producto) {

            const tarjeta =
                document.createElement("div");


            tarjeta.className =
                "producto";


            tarjeta.innerHTML = `

                <div class="imagen-producto">

                    <img
                        src="img/${producto.imagen}"
                        alt="${producto.nombre}"
                    >

                </div>

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="descripcion">
                    ${producto.descripcion}
                </p>

                <p class="precio">
                    $${producto.precio}
                </p>

                <button
                    type="button"
                    onclick="agregarProducto(
                        '${producto.nombre}',
                        ${producto.precio}
                    )"
                >
                    Agregar al pedido
                </button>

            `;


            menu.appendChild(tarjeta);

        }
    );

}


/* =====================================
   AGREGAR PRODUCTO
===================================== */

function agregarProducto(nombre, precio) {

    const productoExistente =
        pedido.find(function (producto) {

            return producto.nombre === nombre;

        });


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        pedido.push({

            nombre: nombre,

            precio: precio,

            cantidad: 1

        });

    }


    actualizarPedido();


    alert(
        nombre +
        " fue agregado a tu pedido."
    );

}


/* =====================================
   MOSTRAR PEDIDO
===================================== */

function actualizarPedido() {

    const lista =
        document.getElementById("listaPedido");


    const totalElemento =
        document.getElementById("total");


    if (!lista || !totalElemento) {

        return;

    }


    lista.innerHTML = "";


    if (pedido.length === 0) {

        lista.innerHTML =
            "<p>Aún no has agregado productos.</p>";

        totalElemento.textContent =
            "0";

        return;

    }


    let total = 0;


    pedido.forEach(
        function (producto, indice) {

            const subtotal =
                producto.precio *
                producto.cantidad;


            total += subtotal;


            const elemento =
                document.createElement("div");


            elemento.className =
                "producto-pedido";


            elemento.innerHTML = `

                <div class="producto-pedido-info">

                    <strong>
                        ${producto.nombre}
                    </strong>

                    <span>
                        $${producto.precio}
                        ×
                        ${producto.cantidad}
                        =
                        $${subtotal}
                    </span>

                </div>

                <button
                    type="button"
                    onclick="eliminarProducto(${indice})"
                >
                    Eliminar
                </button>

            `;


            lista.appendChild(elemento);

        }
    );


    totalElemento.textContent =
        total;

}


/* =====================================
   ELIMINAR PRODUCTO
===================================== */

function eliminarProducto(indice) {

    if (
        indice < 0 ||
        indice >= pedido.length
    ) {

        return;

    }


    pedido.splice(indice, 1);

    actualizarPedido();

}


/* =====================================
   CALCULAR TOTAL
===================================== */

function calcularTotal() {

    let total = 0;


    pedido.forEach(
        function (producto) {

            total +=
                producto.precio *
                producto.cantidad;

        }
    );


    return total;

}


/* =====================================
   CONFIRMAR PEDIDO
===================================== */

function confirmarPedido() {

    if (pedido.length === 0) {

        alert(
            "No puedes confirmar un pedido vacío."
        );

        return;

    }


    const total =
        calcularTotal();


    const ahora =
        new Date();


    const nuevoPedido = {

        numero: numeroPedido,

        productos: JSON.parse(
            JSON.stringify(pedido)
        ),

        total: total,

        estado: "Preparando",

        pagado: true,

        fecha:
            ahora.toLocaleDateString("es-MX"),

        hora:
            ahora.toLocaleTimeString(
                "es-MX",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            )

    };


    historialPedidos.push(
        nuevoPedido
    );


    pedidoActual =
        nuevoPedido;


    numeroPedido++;


    mostrarPantallaPreparando(
        nuevoPedido
    );

}


/* =====================================
   MOSTRAR PEDIDO EN PREPARACIÓN
===================================== */

function mostrarPantallaPreparando(
    pedidoRealizado
) {

    const numero =
        document.getElementById(
            "numeroPedido"
        );


    const resumen =
        document.getElementById(
            "resumenPreparacion"
        );


    const total =
        document.getElementById(
            "totalPreparacion"
        );


    const titulo =
        document.getElementById(
            "tituloEstado"
        );


    const mensaje =
        document.getElementById(
            "mensajeEstado"
        );


    const icono =
        document.getElementById(
            "iconoEstado"
        );


    const preparando =
        document.getElementById(
            "estadoPreparando"
        );


    const entregado =
        document.getElementById(
            "estadoEntregado"
        );


    const progreso =
        document.getElementById(
            "barraProgreso"
        );


    const botonTicket =
        document.getElementById(
            "botonTicket"
        );


    if (
        !numero ||
        !resumen ||
        !total ||
        !titulo ||
        !mensaje ||
        !icono ||
        !preparando ||
        !entregado ||
        !progreso ||
        !botonTicket
    ) {

        return;

    }


    numero.textContent =
        String(
            pedidoRealizado.numero
        ).padStart(3, "0");


    total.textContent =
        pedidoRealizado.total;


    titulo.textContent =
        "¡Pedido recibido!";


    mensaje.textContent =
        "Tu pedido está siendo preparado.";


    icono.textContent =
        "🟡";


    preparando.classList.remove(
        "oculto"
    );


    entregado.classList.add(
        "oculto"
    );


    botonTicket.classList.add(
        "oculto"
    );


    resumen.innerHTML = "";


    pedidoRealizado.productos.forEach(
        function (producto) {

            const elemento =
                document.createElement("p");


            const subtotal =
                producto.precio *
                producto.cantidad;


            elemento.textContent =
                producto.nombre +
                " × " +
                producto.cantidad +
                " — $" +
                subtotal;


            resumen.appendChild(
                elemento
            );

        }
    );


    progreso.style.transition =
        "none";


    progreso.style.width =
        "0%";


    mostrarPantalla(
        "pantallaConfirmacion"
    );


    setTimeout(function () {

        progreso.style.transition =
            "width 5s linear";


        progreso.style.width =
            "100%";

    }, 100);


    setTimeout(function () {

        pedidoRealizado.estado =
            "Entregado";


        icono.textContent =
            "🟢";


        titulo.textContent =
            "¡Pedido entregado!";


        mensaje.textContent =
            "Tu pedido está listo.";


        preparando.classList.add(
            "oculto"
        );


        entregado.classList.remove(
            "oculto"
        );


        botonTicket.classList.remove(
            "oculto"
        );


    }, 5200);

}


/* =====================================
   MOSTRAR TICKET
===================================== */

function mostrarTicket() {

    if (!pedidoActual) {

        alert(
            "No hay un pedido disponible."
        );

        return;

    }


    if (
        pedidoActual.estado !==
        "Entregado"
    ) {

        alert(
            "Tu pedido todavía se está preparando."
        );

        return;

    }


    const numero =
        document.getElementById(
            "numeroTicket"
        );


    const fecha =
        document.getElementById(
            "fechaTicket"
        );


    const hora =
        document.getElementById(
            "horaTicket"
        );


    const lista =
        document.getElementById(
            "resumenTicket"
        );


    const total =
        document.getElementById(
            "totalTicket"
        );


    if (
        !numero ||
        !fecha ||
        !hora ||
        !lista ||
        !total
    ) {

        return;

    }


    numero.textContent =
        String(
            pedidoActual.numero
        ).padStart(3, "0");


    fecha.textContent =
        pedidoActual.fecha;


    hora.textContent =
        pedidoActual.hora;


    lista.innerHTML = "";


    pedidoActual.productos.forEach(
        function (producto) {

            const fila =
                document.createElement("div");


            fila.className =
                "ticket-producto";


            const subtotal =
                producto.precio *
                producto.cantidad;


            fila.innerHTML = `

                <span>
                    ${producto.nombre}
                    × ${producto.cantidad}
                </span>

                <strong>
                    $${subtotal}
                </strong>

            `;


            lista.appendChild(
                fila
            );

        }
    );


    total.textContent =
        pedidoActual.total;


    mostrarPantalla(
        "pantallaTicket"
    );

}


/* =====================================
   FINALIZAR PEDIDO
===================================== */

function finalizarPedido() {

    pedido = [];


    actualizarPedido();


    alert(
        "¡Gracias por comprar en CecyCafetería! ☕"
    );


    mostrarPantalla(
        "pantallaInicio"
    );

}


/* =====================================
   MIS PEDIDOS
===================================== */

function mostrarPedidos() {

    const lista =
        document.getElementById(
            "listaPedidos"
        );


    if (!lista) {

        return;

    }


    lista.innerHTML = "";


    if (
        historialPedidos.length === 0
    ) {

        lista.innerHTML =
            "<p>Todavía no tienes pedidos.</p>";


        mostrarPantalla(
            "pantallaPedidos"
        );


        return;

    }


    historialPedidos.forEach(
        function (pedidoRealizado) {

            const tarjeta =
                document.createElement("div");


            tarjeta.className =
                "tarjeta-pedido";


            const iconoEstado =
                pedidoRealizado.estado ===
                "Entregado"
                    ? "🟢"
                    : "🟡";


            tarjeta.innerHTML = `

                <h3>
                    Pedido #${String(
                        pedidoRealizado.numero
                    ).padStart(3, "0")}
                </h3>

                <p>
                    Fecha:
                    ${pedidoRealizado.fecha}
                </p>

                <p>
                    Hora:
                    ${pedidoRealizado.hora}
                </p>

                <p>
                    Total:
                    $${pedidoRealizado.total}
                </p>

                <span class="estado">
                    ${iconoEstado}
                    ${pedidoRealizado.estado}
                </span>

                <p>
                    💳 Pago:
                    <strong>Pagado</strong>
                </p>

            `;


            lista.appendChild(
                tarjeta
            );

        }
    );


    mostrarPantalla(
        "pantallaPedidos"
    );

}


/* =====================================
   HISTORIAL
===================================== */

function mostrarHistorial() {

    const lista =
        document.getElementById(
            "listaHistorial"
        );


    if (!lista) {

        return;

    }


    lista.innerHTML = "";


    if (
        historialPedidos.length === 0
    ) {

        lista.innerHTML =
            "<p>No hay pedidos en el historial.</p>";


        mostrarPantalla(
            "pantallaHistorial"
        );


        return;

    }


    historialPedidos.forEach(
        function (pedidoRealizado) {

            const tarjeta =
                document.createElement("div");


            tarjeta.className =
                "tarjeta-pedido";


            let productos = "";


            pedidoRealizado.productos.forEach(
                function (producto) {

                    const subtotal =
                        producto.precio *
                        producto.cantidad;


                    productos += `

                        <p>
                            ${producto.nombre}
                            ×
                            ${producto.cantidad}
                            — $${subtotal}
                        </p>

                    `;

                }
            );


            const iconoEstado =
                pedidoRealizado.estado ===
                "Entregado"
                    ? "🟢"
                    : "🟡";


            tarjeta.innerHTML = `

                <h3>
                    Pedido #${String(
                        pedidoRealizado.numero
                    ).padStart(3, "0")}
                </h3>

                <p>
                    Fecha:
                    ${pedidoRealizado.fecha}
                </p>

                <p>
                    Hora:
                    ${pedidoRealizado.hora}
                </p>

                ${productos}

                <p>
                    Total:
                    <strong>
                        $${pedidoRealizado.total}
                    </strong>
                </p>

                <span class="estado">
                    ${iconoEstado}
                    ${pedidoRealizado.estado}
                </span>

            `;


            lista.appendChild(
                tarjeta
            );

        }
    );


    mostrarPantalla(
        "pantallaHistorial"
    );

}


/* =====================================
   CERRAR SESIÓN
===================================== */

function cerrarSesion() {

    const confirmar =
        confirm(
            "¿Seguro que deseas cerrar sesión?"
        );


    if (!confirmar) {

        return;

    }


    const formulario =
        document.getElementById(
            "formLogin"
        );


    if (formulario) {

        formulario.reset();

    }


    pedido = [];

    pedidoActual = null;


    actualizarPedido();


    mostrarPantalla(
        "pantallaLogin"
    );

}