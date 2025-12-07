const vetor = [];

const form = document.getElementById("formCadastro");
const tabela = document.querySelector("#tabela tbody");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const pessoa = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        idade: document.getElementById("idade").value,
        genero: document.getElementById("genero").value,
        telefone: document.getElementById("telefone").value,
        cidade: document.getElementById("cidade").value
    };

    vetor.push(pessoa);
    atualizarTabela();
    form.reset();
});

function atualizarTabela() {
    tabela.innerHTML = "";

    vetor.forEach((item, indice) => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.email}</td>
            <td>${item.idade}</td>
            <td>${item.genero}</td>
            <td>${item.telefone}</td>
            <td>${item.cidade}</td>
            <td>
                <button class="btn-excluir" onclick="excluir(${indice})">Excluir</button>
            </td>
        `;

        tabela.appendChild(linha);
    });
}

function excluir(indice) {
    vetor.splice(indice, 1);
    atualizarTabela();
}
