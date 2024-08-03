function pegarjson() {

    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;

    if (nome === "" || senha === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var usuario = {
        nome: nome,
        senha: senha,
        email: email
    }

    console.log(nome);

    //Criando a lista
    var usuarios = JSON.parse(localStorage.getItem("usuariosJSON")) || [];

    console.log(usuarios);

    //Adiciona o item da lista
    usuarios.push(usuario);

    //Salvando o item na lista
    localStorage.setItem("usuariosJSON", JSON.stringify(usuarios));
    alert("Obrigado por Cadastrar");

}

function pegarjson() {
    //Pega o JSON
    let text = localStorage.getItem("usuariosJSON");

    //Deserializa o JSON
    let obj = JSON.parse(text);
    console.log(obj);

    var usuarios = JSON.parse(localStorage.getItem("usuariosJSON")) || [];
    var modalBody = document.getElementById("modal-body");
    console.log(modalBody);
    modalBody.innerHTML = ""; //Limpar o conteúdo anterior

    if (usuarios.length > 0) {
        var table = document.createElement("table");
        table.className = "table";

        var thead = document.createElement("thead");
        var trHead = document.createElement("tr");
        trHead.innerHTML =
            `<th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Senha</th>
        <th scope="col">Email</th>
        <th scope="col">Ações</th>
        `;
        thead.appendChild(trHead);
        table.appendChild(thead);

        var tbody = document.createElement("tbody");
        usuarios.foreach(function (usuario, index) {
            var tr = document.createElement("tr");
            tr.innerHTML = `
            <th scope="row">${index + 1}</th>
            <th >${usuario.nome}</th>
            <th >${usuario.senha}</th>
            <th >${usuario.email}</th>
            <td><button class="btn btn-danger" onclick"deletarUsuario(${index})">Deletar</button></td>
            `;
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        modalBody.appendChild(table);
    } else {
        modalBody.textContent = "Nenhum usuário cadastrado";
    }
}

function deletarUsuario(index) {
    var usuarios = JSON.parse(localStorage.getItem("usuariosJSON")) || [];
    usuarios.splice(index,1);
    localStorage.setItem("usuáriosJSON", JSON.stringify(usuarios));
    pegarjson(); //Atualizar a lista após a exclusão
}