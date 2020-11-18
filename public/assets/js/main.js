$(".item-1").click(() => {
    $("#item-1").removeClass("noDisplay")
    $("#menu").addClass("noDisplay")
})

$(".item-2").click(() => {
    $("#item-2").removeClass("noDisplay")
    $("#menu").addClass("noDisplay")
})

$(".item-3").click(() => {
    $("#item-3").removeClass("noDisplay")
    $("#menu").addClass("noDisplay")
})

$(".item-4").click(() => {
    $("#item-4").removeClass("noDisplay")
    $("#menu").addClass("noDisplay")
})

$(".item-5").click(() => {
    $("#item-5").removeClass("noDisplay")
    $("#menu").addClass("noDisplay")
})

$(".item-6").click(() => {
    $("#item-6").removeClass("noDisplay")
    $("#menu").addClass("noDisplay")
})

$(".sobre").click(() => {
    $("#sobre").removeClass("noDisplay")
    $("#menu").addClass("noDisplay")
})

$(".volver, .navbar-brand").click(() => {
    $("#item-1").addClass("noDisplay")
    $("#item-2").addClass("noDisplay")
    $("#item-3").addClass("noDisplay")
    $("#item-4").addClass("noDisplay")
    $("#item-5").addClass("noDisplay")
    $("#item-6").addClass("noDisplay")
    $("#sobre").addClass("noDisplay")
    $("#menu").removeClass("noDisplay")
})

setTimeout(() => {
    alert("Android es un sistema operativo para equipos móviles de código abierto, desarrollado por Google y lanzado el año 2008. Contiene distintos lenguajes, entre estos está JAVA Script, C y C++, además, es de carácter colaborativo, o sea, cualquier usuario de  puede crear aplicaciones y acceder a los códigos de estas. Actualmente Android es el sistema operativo móvil más usado, siendo 9 de cada 10 personas las que poseen dispositivos activos en el mundo, siendo aproximadamente, 2.500 millones de personas.")
}, 1000)