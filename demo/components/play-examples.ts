export default [
  {
    name: 'Hello World ($bind)',
    code: `// Hello World ($bind)
const state = '';
const view = state => <div>
  <h1>Hello {state}</h1>
  <input $bind />
</div>;
app.start(document.body, state, view, {});
`
  },

  {
    name: 'Hello World ($on)',
    code: `// Hello World ($on)
const state = {};
const view = ({who}) => <div>
  <h1>Hello {who}</h1>
  <input $oninput="hello" />
</div>;
const update = {
  'hello': (_, e) => ({who:e.target.value})
}
app.start(document.body, state, view, update);
`
  },

  {
    name: 'Hello World (debounce)',
    code: `// Hello World (debounce)
const state = '';
const view = state => <div>
  <h1>Hello {state}</h1>
  <input $oninput />
</div>;
const update = {
  'oninput': [(_, e) => e.target.value, { delay: 300 }]
}
app.start(document.body, state, view, update);
`
  },

  {
    name: 'Clock',
    code: ` // Clock
const state = new Date();
const view = state => <h1>{state.toLocaleTimeString()}</h1>;
const update = {
  'timer': state => new Date()
}
window.setInterval(() => { app.run('timer') }, 1000);
app.start(document.body, state, view, update);
`
  },

  {
    name: 'Stopwatch',
    code: ` // Stopwatch
const state = {
  current: new Date(),
  start: new Date(),
  active: false
}
const view = state => {
  const elapsed = state.active ?
    ((state.current - state.start) / 1000).toFixed(3) + ' seconds'
    : '(stopped)';
  return <div>
    <h1>{elapsed}</h1>
    <button $onclick="start">Start</button>
    <button $onclick="stop">Stop</button>
  </div>;
};
const update = {
  'start':state =>({
    current: new Date(),
    start: new Date(),
    active: true}),
  'stop': state => ({ active: false }),
  'timer': state => ({ ...state, current: new Date() })
};
window.setInterval(() => { app.run('timer') }, 100);
app.start(document.body, state, view, update);
`
  },

  {
    name: 'Counter (JSX)',
    code: `// Counter (JSX)
const state = 0;
const view = state => <div>
  <h1>{state}</h1>
  <button $onclick='-1'>-1</button>
  <button $onclick='+1'>+1</button>
</div>;
const update = {
  '+1': state => state + 1,
  '-1': state => state - 1
};
app.start(document.body, state, view, update);
`
  },

  {
    name: 'Counter (HTML)',
    code: `// Counter (HTML)
const state = 0;
const view = state => \`<div>
  <h1>\${state}</h1>
  <button onclick="app.run('-1')">-1</button>
  <button onclick="app.run('+1')">+1</button>
</div>\`;
const update = {
  '+1': state => state + 1,
  '-1': state => state - 1
};
app.start(document.body, state, view, update);
`
  }];