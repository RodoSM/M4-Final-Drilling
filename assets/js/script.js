
$(document).ready(function () {
    // Función general 
    function cargarPersonajes(url, sliceStart, sliceEnd) {
        $.ajax({
            url:`https://swapi.dev/api/people/?page=${url}`,
            method: "GET",
            dataType: "json",
            success: function (response) {
                let card = "";
                response.results.slice(sliceStart, sliceEnd).forEach(character => {
                    card += `
                    <div class="card">
                        <h3>${character.name}</h3>
                        <p>Genero: ${character.gender}</p>
                        <p>Altura: ${character.height} cm</p>
                        <p>Peso: ${character.mass} kg</p>
                    </div>`;
                });
                $("#characterInfo").html(card); // Mostrar personajes

            },
            error: function (error) {
                $("#error-message").text('Hubo un error al cargar los personajes: ' + error.message);
            }
        });
    }

    // Función para el evento hover
    function Hover(selector, url, sliceStart, sliceEnd) {
        $(selector).hover(
            function () { // mouseenter
                cargarPersonajes(url, sliceStart, sliceEnd);
            },
            function () { // mouseleave
                $("#characterInfo").empty(); // Limpiar personajes
            }
        );
    }

    // Configurar eventos hover para cada sección con su URL(numero) y rango de personajes
    Hover("#principales", 1, 0, 5);   // Personajes 1-5
    Hover("#secundarios", 1, 5, 10); // Personajes 6-10
    Hover("#otros", 2, 0, 5);        // Personajes 11-15
});


