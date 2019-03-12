
// CLASE del 19 febrero:   Esta explicación va sobre el ejemploLoremIpsum:  Todo lo apuntado aquí no tiene sentido sobre la pantalla en web. Sólo interesa el código como apuntes.


// function Inicio(){
    
//     alert($("#menu_principal").text());

//     $("#boton").click(cambiar);
// }

// function cambiar(){
//     $("#menu_principal").html("<h2 align='center'>MENU_PRINCIPAL</h2>");
//     $("#noticias").html("<img src='encendida.gif'>");
// }

// BOTON: Aqui se explica: Este ejemplo no vale en esta pagina porque va con ejemploLoremIpsum pero esto del boton seria la funcion que cambia al pulsar arriba en el boton que se encuentra sobre la funcion Inicio.





// alert($("#menu_principal").text());    Esta nos sirve para sacar en un alert el contenido que se le pide de una etiqueta.       alert($("#menu_principal").html()); Y con esta podemos sacar el html de esa parte del menu principal en vez de solo el Texto 

// alert($("a").text("Pulsa para ir al sitio")); Esto en cambio nos realiza un cambio directo sobre el texto. En este caso cambia el texto de todos los enlaces. 


// $("#menu_principal").text("Cambio el texto del menu"); 
// $("#menu_principal").html("<h2 align='center'>Cambio el título de texto con el formato del html</h2>");



// $("#noticias").html("<img src='encendida.gif'>"); Con esta reemplazamos todo el html de noticias por una Imagen .




// alert($("#noticias").width());   Esto nos dice el ancho de la id noticias
// $("#noticias").width(300); Esto nos cambia el ancho a 300

// alert($("#noticias").height());   Esto nos dice el alto de la id noticias
// $("#noticias").height(300); Esto nos cambia el alto a 300






// let articulos=$("div.articulo");

// articulos.height(500);
// articulos.width(500);   Esto nos cambia ancho y alto de los articulos que antes han sido declarados en variables ya que se usan varias veces. Tambien se puede hacer concadenado así articulos.height(500).width(500).text("cambio el texto");


// alert($("#boton").attr("type")); Este caso nos diria el atributo
// $("a").attr("href","http://www.google.es"); Con esto en cambio lo que va despues de la coma , cambia al atributo que está antes.
// $("#menu_principal a").attr("target","_blank"); Te abre una ventana diferente


// $("#noticias").css("background-color","pink");    Al id le cambia el fondo a rosa
// $("a").css("color","white");            a los enlaces le ponemos el texto en color blanco
// $("a").css("text-decoration","none");         a los enlaces le quitamos el subrayado de abajo


// Clase explicacion 26 febrero:---------------------------------------------------------------


$(document).ready(Inicio);

function Inicio(){
    let parrafos=$("p");
    parrafos.css("background-color","pink")
            .text("Modificado");

    // para actuar sobre el primer párrafo solamente:

    parrafos.first().css("background-color","green")
            .first().text("Soy el primero???");

    // para actuar sobre el último parrafo:

    parrafos.last().css("background-color","red")
            .last().text("Soy el ultimo");
    
    // para elegir una posición concreta:

    parrafos.eq(2).css("background-color","tomato")
            .text("Soy el tercero");

    // Declaramos enlaces en una variable y por alert sacamos el texto del primer enlaces, mostramos el href del segundo enlace eq(1) / es segundo porque se cuenta desde 0 / y mostramos el tamaño del ultimo enlace

    let enlaces=$("a");
    alert(enlaces.fist().text());
    alert(enlaces.eq(1).attr("href"));
    alert(enlaces.last().css("font-size"));
    


}