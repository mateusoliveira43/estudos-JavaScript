const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

console.log(backgroundColorBody);
for (const i of ps) {
  i.style.backgroundColor = backgroundColorBody;
  i.style.color = 'white';
}
