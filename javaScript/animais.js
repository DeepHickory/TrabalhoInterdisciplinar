let animais = JSON.parse(localStorage.getItem("animais")) || [
  { nome: "Thor", porte: "Médio", idade: "2 anos", sexo: "Macho", foto: "thor" },
  { nome: "Mel", porte: "Pequeno", idade: "1 ano", sexo: "Fêmea", foto: "mel" },
  { nome: "Bidu", porte: "Médio", idade: "12 anos", sexo: "Macho", foto: "bidu" }
];

const formulario = document.querySelector("form");
const lista = document.querySelector(".lista");
let editando = -1; 


function mostrar() {
  lista.innerHTML = "";
  animais.forEach(function (animal, i) {
    lista.innerHTML += `
      <li>
        <span class="foto-mini"><img src="${animal.foto ? "../imagens/fotos/" + animal.foto + ".jpg" : "../imagens/patinha.svg"}" alt="Foto de ${animal.nome}"></span>
        <div>
          <h3>${animal.nome}</h3>
          <small>${animal.porte} · ${animal.idade} · ${animal.sexo}</small>
        </div>
        <button class="botao contorno pequeno" onclick="editar(${i})">Editar</button>
        <button class="botao perigo pequeno" onclick="excluir(${i})">Excluir</button>
      </li>`;
  });
  localStorage.setItem("animais", JSON.stringify(animais));
}


formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const animal = {
    nome: formulario.elements.nome.value,
    porte: formulario.elements.porte.value,
    idade: formulario.elements.idade.value,
    sexo: formulario.elements.sexo.value
  };

if (editando === -1) {
  animais.push(animal);
} else {
  animal.foto = animais[editando].foto;
  animais[editando] = animal;
  editando = -1;
}

  formulario.reset();
  mostrar();
});


function editar(i) {
  formulario.elements.nome.value = animais[i].nome;
  formulario.elements.porte.value = animais[i].porte;
  formulario.elements.idade.value = animais[i].idade;
  formulario.elements.sexo.value = animais[i].sexo;
  editando = i;
}


function excluir(i) {
  animais.splice(i, 1);
  mostrar();
}

mostrar();
