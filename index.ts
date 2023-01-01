// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

interface IVoyantType {
  type: string;
}

interface IVoyant {
  name: string;
  id: number;
  type: IVoyantType[];
}

const voyants: IVoyant[] = [
  { id: 1, name: 'name 1', type: [{ type: 'Astrology' }] },
  { id: 2, name: 'name 2', type: [{ type: 'Astrology' }] },
];

function getVoyantById(id: number): IVoyant | null {
  return voyants.find((voyant) => voyant.id === id) || null;
}

const voyantDiv: HTMLElement = document.querySelector('#voyant');

voyantDiv.innerHTML = `${getVoyantById(1).name}`;

console.log('push');
