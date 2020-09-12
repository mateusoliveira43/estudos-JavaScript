function meuEscopo () {
  const corpoDocumento = document.querySelector('.container');

  const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
  ];

  let i;
  for (i = 0; i < elementos.length; i += 1) {
    const tag = document.createElement(elementos[i].tag);
    const texto = document.createTextNode(elementos[i].texto);
    tag.appendChild(texto);
    corpoDocumento.appendChild(tag);
  }
}
meuEscopo();
