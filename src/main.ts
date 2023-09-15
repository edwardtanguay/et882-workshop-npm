import './style.css';
import { sortBy } from 'lodash-es';

const array = [
  { name: 'John', age: 30 },
  { name: 'John', age: 15 },
  { name: 'Jane', age: 25 }
];
const sortedArray = sortBy(array, ['name', 'age']);
console.log(array);
console.log(sortedArray);


document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <div>
  <h1>npm packages</h1>
  <h2>lodash-es</h2>

  </div>
`