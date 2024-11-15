const Paragrafo1Text = "Web Developer | Specialist in JavaScript and MySQL | Systems Analysis and Development student at IFBA | Focused on creating robust systems and efficient technol.";
const speed = 100; // Velocidade da digitação em milissegundos 
let index1 = 0;


// Função para envolver cada letra em um <span>
function applyLetterEffect(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;  // Obtém o texto original
  element.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
}

// Aplicando o efeito aos elementos
applyLetterEffect('title1');
applyLetterEffect('title2');


function typeParagrafo1() {
  if (index1 < Paragrafo1Text.length) {
    document.getElementById('Paragrafo1').innerHTML += Paragrafo1Text.charAt(index1);
    index1++;
    setTimeout(typeParagrafo1, speed);
  }
}

typeParagrafo1();

// Button
document.getElementById('buttonprojects').addEventListener('click', function() {
  document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
});
