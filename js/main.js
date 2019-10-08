$(document).on("click", "#hyt", function() {


    if ($("#nombre").val() === "") {
        $("#nombre").css("border-color", "#ff5454");
        $("#nombre").css("box-shadow", "0 0 10px #ff5454");
        alert("Falta llenar campo nombre");

    }

    if ($("#apellidos").val() === "") {
        $("#apellidos").css("border-color", "#ff5454");
        $("#apellidos").css("box-shadow", "0 0 10px #ff5454");
        alert("Falta llenar campo apellido");

    }

    if ($("#direccion").val() === "") {
        $("#direccion").css("border-color", "#ff5454");
        $("#direccion").css("box-shadow", "0 0 10px #ff5454");
        alert("Falta llenar campo dirección");

    }

    if (($("#direccion").val() != "") && ($("#apellidos").val() != "") && ($("#dnombre").val() != "")) {
        alert("se envio formulario");
    }
});




function cambio(elemento) {
    if ($(elemento).val() != "") {
        $(elemento).css("border-color", "#4AD9B0");
        $(elemento).css("box-shadow", "0 0 10px #4AD9B0");
    } else {
        $(elemento).css("border-color", "#ff5454");
        $(elemento).css("box-shadow", "0 0 10px #ff5454");
    }

}


function check(elemento) {
    if ($(elemento).val() != "") {
        $(elemento).css("border-color", "#F2226E");
        $(elemento).css("box-shadow", "0 0 10px #F2226E");
    }

}