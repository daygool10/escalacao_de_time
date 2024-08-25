document.addEventListener("DOMContentLoaded", function() {
    changeFormation();
});

function changeFormation() {
    const formation = document.getElementById("formation").value;
    const field = document.getElementById("field");
    field.innerHTML = ''; // Limpa os jogadores existentes

    let positions = [];

    if (formation === "4-4-2") {
        positions = [
            {top: '80%', left: '50%'}, // Goleiro
            {top: '60%', left: '22%'}, {top: '60%', left: '42%'}, {top: '60%', left: '62%'}, {top: '60%', left: '82%'}, // Defensores
            {top: '40%', left: '22%'}, {top: '40%', left: '42%'}, {top: '40%', left: '62%'}, {top: '40%', left: '82%'}, // Meio-campistas
            {top: '20%', left: '40%'}, {top: '20%', left: '60%'} // Atacantes
        ];
    } else if (formation === "4-3-3") {
        positions = [
            {top: '80%', left: '50%'}, // Goleiro
            {top: '60%', left: '22%'}, {top: '60%', left: '42%'}, {top: '60%', left: '62%'}, {top: '60%', left: '82%'}, // Defensores
            {top: '40%', left: '32%'}, {top: '40%', left: '52%'}, {top: '40%', left: '72%'}, // Meio-campistas
            {top: '20%', left: '32%'}, {top: '20%', left: '52%'}, {top: '20%', left: '72%'} // Atacantes
        ];
    } else if (formation === "3-5-2") {
        positions = [
            {top: '80%', left: '50%'}, // Goleiro
            {top: '60%', left: '30%'}, {top: '60%', left: '50%'}, {top: '60%', left: '70%'}, // Defensores
            {top: '40%', left: '20%'}, {top: '40%', left: '35%'}, {top: '40%', left: '50%'}, {top: '40%', left: '65%'}, {top: '40%', left: '80%'}, // Meio-campistas
            {top: '20%', left: '40%'}, {top: '20%', left: '60%'} // Atacantes
        ];
    } else if (formation === "5-3-2") {  // Nova formação
        positions = [
            {top: '80%', left: '45%'}, // Goleiro
            {top: '60%', left: '10%'}, {top: '60%', left: '25%'}, {top: '60%', left: '45%'}, {top: '60%', left: '65%'}, {top: '60%', left: '80%'}, // Defensores
            {top: '40%', left: '25%'}, {top: '40%', left: '45%'}, {top: '40%', left: '65%'}, // Meio-campistas
            {top: '20%', left: '35%'}, {top: '20%', left: '55%'} // Atacantes
        ];
    } else if (formation === "4-2-3-1") { // Nova formação
        positions = [
            {top: '80%', left: '50%'}, // Goleiro
            {top: '70%', left: '20%'}, {top: '70%', left: '35%'}, {top: '70%', left: '65%'}, {top: '70%', left: '80%'}, // Defensores
            {top: '50%', left: '35%'}, {top: '50%', left: '65%'}, // Volantes
            {top: '35%', left: '20%'}, {top: '35%', left: '50%'}, {top: '35%', left: '80%'}, // Meias
            {top: '10%', left: '50%'} // Atacante
        ];
    } else if (formation === "3-4-3") { // Nova formação
        positions = [
            {top: '80%', left: '50%'}, // Goleiro
            {top: '60%', left: '30%'}, {top: '60%', left: '50%'}, {top: '60%', left: '70%'}, // Defensores
            {top: '40%', left: '20%'}, {top: '40%', left: '40%'}, {top: '40%', left: '60%'}, {top: '40%', left: '80%'}, // Meio-campistas
            {top: '20%', left: '30%'}, {top: '20%', left: '50%'}, {top: '20%', left: '70%'} // Atacantes
        ];
    } else if (formation === "4-5-1") { // Nova formação
        positions = [
            {top: '80%', left: '50%'}, // Goleiro
            {top: '60%', left: '20%'}, {top: '60%', left: '40%'}, {top: '60%', left: '60%'}, {top: '60%', left: '80%'}, // Defensores
            {top: '35%', left: '15%'}, {top: '35%', left: '30%'}, {top: '35%', left: '50%'}, {top: '35%', left: '70%'}, {top: '35%', left: '85%'}, // Meio-campistas
            {top: '10%', left: '50%'} // Atacante
        ];
    } else if (formation === "4-1-4-1") { // Nova formação
        positions = [
            {top: '80%', left: '50%'}, // Goleiro
            {top: '60%', left: '20%'}, {top: '70%', left: '35%'}, {top: '70%', left: '65%'}, {top: '60%', left: '80%'}, // Defensores
            {top: '55%', left: '50%'}, // Volante
            {top: '25%', left: '20%'}, {top: '35%', left: '40%'}, {top: '35%', left: '60%'}, {top: '25%', left: '80%'}, // Meias
            {top: '10%', left: '50%'} // Atacante
        ];
    } else if (formation === "4-2-4") { // Nova formação
        positions = [
            {top: '80%', left: '50%'}, // Goleiro
            {top: '60%', left: '20%'}, {top: '65%', left: '40%'}, {top: '65%', left: '60%'}, {top: '60%', left: '80%'}, // Defensores
            {top: '35%', left: '40%'}, {top: '35%', left: '60%'}, // Volantes
            {top: '20%', left: '20%'}, {top: '10%', left: '40%'}, {top: '10%', left: '60%'}, {top: '20%', left: '80%'}, // Atacantes
        ];
    }

    positions.forEach((pos, index) => {
        const player = document.createElement("div");
        player.classList.add("player");
        player.style.top = pos.top;
        player.style.left = pos.left;
        player.textContent = `Jogador ${index + 1}`;
        player.onclick = () => editPlayerName(player);
        field.appendChild(player);
    });
}

function editPlayerName(player) {
    const name = prompt("Digite o nome do jogador:");
    if (name) {
        player.textContent = name;
    }
}
