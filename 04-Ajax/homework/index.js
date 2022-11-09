const url = "http://localhost:5000/amigos";

//limpiar inputs:
let cleanInputs = () => {
    $("#input").val("");
    $("#inputDelete").val("");
};

$("img").hide();

//funcion getFriends:

const getFriends = () => {
    $("img").show();
    let lista = $("#lista");
    lista.empty();
    $.get(url, (informacion) => {
        // console.log(informacion);
        for (const amigo of informacion) {
            lista.append(`<li>${amigo.name}</li>`);
        }
        $("img").hide();
    });
};

//funcionalidad lista amigos
$("#boton").click(getFriends);

//funcionalidad de buscar un amigo
$("#search").click(() => {
    let id = $("#input").val();
    //   console.log(id);
    let amigo = $("#amigo");
    if (!id) return amigo.text("Debe colocar un id correcto");

    $.get(`${url}/${id}`, (data) => {
        amigo.text(data.name);
    }).fail(() => {
        amigo.text("Este amigo no existe");
    });

    cleanInputs();
});

//funcionalidad eliminar amigo
$("#delete").click(() => {
    let idDelete = $("#inputDelete").val();
    $.ajax({
        url: `${url}/${idDelete}`,
        type: "DELETE",
        success: () => {
            $("#success").text(`el amigo número ${idDelete} borrado éxitosamente`);
            getFriends();
            cleanInputs();
        },
    });
});