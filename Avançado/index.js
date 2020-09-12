function recursiva (max) {
  console.log(max);
  if (max >= 5) return;
  max++;
  recursiva(max);
}

recursiva(0);

function * geradora1 () {
  yield 'valor 1';
  yield 'valor 2';
  yield 'valor 3';
}

function * geragera () {
  yield * geradora1();
  yield 'mais um!!!';
}

function * geradora2 () {
  let i = 0;
  while (i < 3) {
    yield i;
    i++;
  }
}

const g1 = geragera();
const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
for (const i of g1) {
  console.log(i);
}
