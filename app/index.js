import { createStore } from 'redux';
import reducer from './reducers';

import {
  ALL_POLITICIANS,
  SEARCH_BY_NAME
} from './constants/actionTypes';

const store     = createStore(reducer);
const holder    = document.getElementById('holder');
const input     = document.getElementById('name-input');

input.addEventListener('keyup', onChange);

store.subscribe(render);
store.dispatch({type: ALL_POLITICIANS});

function render() {
  resetHolder();

  store.getState().politicians.forEach( politician => {
    holder.appendChild(createPoliticianHtml(politician));
  });
}

function createPoliticianHtml(politician) {
  let p = document.createElement('p');
  let vulgo = `<b>vulgo ${politician.codinome}</b>`;
  p.innerHTML = `${politician.nome} ${politician.codinome ? vulgo : ''} `;
  return p;
}

function resetHolder() {
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
}

function onChange() {
  store.dispatch({type: SEARCH_BY_NAME, term: input.value});
}
