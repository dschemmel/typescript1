// Import stylesheets
import './style.scss';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

class Test1 {
  p1 = 0;
  p2 = '';
}

type ITest1 = {
  [k in keyof Test1]: Test1[k];
}

class Test2 {
  p1 = 0;
  p2 = '';
  p3 = {
    pp1: '',
    pp2: 0,
  }
}

type ITest2 = {
  [k in keyof Test2]: Test2[k];
}

class Test3 {
  p1 = 0;
  p2 = '';
  p3: ITest1;
}

type ITest3 = {
  [k in keyof Test3]: Test3[k];
}

const t1a: ITest1 = { p1: 1, p2: 'hallo'};
const t2a: ITest2 = { p1: 2, p2: 't2p2', p3: { pp1: 't2pp1', pp2: 5}};
const t3a: ITest3 = { p1: 1, p2: 'hallo', p3: new Test1()};

const t3b: ITest3 = t3a;

appDiv.innerHTML = `
  <h3>t3a</h3>
  <pre>${JSON.stringify(t3a, null, '\t')}</pre>
  <h3>t3b</h3>
  <pre>${JSON.stringify(t3b, null, '\t')}</pre>
`;
