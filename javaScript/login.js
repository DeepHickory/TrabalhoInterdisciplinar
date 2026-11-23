const formulario = document.querySelector("form");
const erro = document.querySelector(".erro");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const usuario = formulario.elements.usuario.value;
  const senha = formulario.elements.senha.value;
  let pagina = "";

  if (usuario === "doador" && senha === "doa#2026") {
    pagina = "painel-doador.html";
  } else if (usuario === "entidade" && senha === "ent!2026") {
    pagina = "painel-canil.html";
  } else if (usuario === "admin" && senha === "adm@2026") {
    pagina = "painel-admin.html";
  }

  if (pagina === "") {
    erro.hidden = false;
  } else {
    location.href = pagina;
  }
});
