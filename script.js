//  título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "TV +";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento titulo no DOM
body.appendChild(titulo);


// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>TV-Smart</h2>
    <img src="https://a-static.mlcdn.com.br/1500x1500/smart-tv-86-4k-uhd-led-lg-86ur8750-wi-fi-bluetooth-alexa-3-hdmi-ia-matter/magazineluiza/237454400/a4cbf419d54715afbfb92585e28e3eb3.jpg" alt="TV-smart" width="300"  height="250"> 
    <p>Smart TV 86” 4K UHD LED LG 86UR8750 - Wi-Fi Bluetooth Alexa.</p>
    <p id="preco-x-salada">R$ 7.599,05</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)