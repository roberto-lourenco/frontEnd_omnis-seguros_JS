// Selecionar modelo do veículo
const marcas = {
    volkswagen:["Gol","Polo","T-Cross","Voyage","Virtus"],
    fiat:["Argo","Cronos","Gran Siena","Mobi","Strada","Toro" ],
    chevrolet:["Cruze","Onix","Prisma","Spin","Tracker"]
};
const marcaForms = document.getElementById("marca");
const modeloForms = document.getElementById("modelo");

marcaForms.addEventListener("change", function(){
    const marcaAtual = marcaForms.value;

    modeloForms.innerHTML = `<option value="">Modelo do veículo </option>`

    if(marcas[marcaAtual]){
        marcas[marcaAtual].forEach(function(modelo){
            const newOption = document.createElement("option");
            newOption.value = modelo.toLowerCase();
            newOption.textContent = modelo;
            modeloForms.appendChild(newOption);

        });

    const cpfValido = validarCPF(cpf);
    const errorMessage = document.getElementById('cpfError');
    
    if (!cpfValido) {
      errorMessage.style.display = 'inline'; 
    } else {
      errorMessage.style.display = 'none'; 
    }
    }
});

// Validar cpf
function validarCPF(cpf) {

    cpf = cpf.replace(/\D/g, '');
  

    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;
  
    let soma = 0;
    let resto;
  
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf[i - 1]) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    soma = 0;
  

    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf[i - 1]) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;

    return true;
  }

  
// Padronizar cpf
document.getElementById('cpf').addEventListener('input', function(e) {
    let cpf = e.target.value.replace(/\D/g, ''); 

    if (cpf.length <= 11) {
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    e.target.value = cpf;

    // Valida o CPF
    const cpfValido = validarCPF(cpf);
    const errorMessage = document.getElementById('cpfError');
    
    if (!cpfValido) {
      errorMessage.style.display = 'block'; 
      
    } else {
      errorMessage.style.display = 'none'; 
    }
  });

//   Padronizar celular
const inputTelefone = document.getElementById("telefone");

inputTelefone.addEventListener("input", function () {

  let telefone = inputTelefone.value;
  telefone = telefone.replace(/\D/g, "");

  if (telefone.length <= 2) {
    telefone = telefone.replace(/^(\d{2})/, "($1");
  } else if (telefone.length <= 5) {
    telefone = telefone.replace(/^(\d{2})(\d{1})/, "($1) $2");
  } else if (telefone.length <= 9) {
    telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})/, "($1) $2$3-");
  } else {
    telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2$3-$4");
  }
  inputTelefone.value = telefone;
});
  

  