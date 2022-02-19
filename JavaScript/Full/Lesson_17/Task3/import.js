import { defer } from './index.js';

const sayHi = () => {
  console.log('Hi');
};

const sayHifunc = defer(sayHi, 1000);

sayHifunc();
