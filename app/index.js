import { createStore } from 'redux';
import reducer from './reducers';

import {
  ALL_POLITICIANS,
  SEARCH_BY_NAME
} from './constants/actionTypes';

const store     = createStore(reducer);
const holder    = document.getElementById('holder');
const searchBtn = document.getElementById('search-btn');
const input     = document.getElementById('name-input');

// searchBtn.addEventListener('click', onClick);
input.addEventListener('keyup', onClick);

store.subscribe(render);
store.dispatch({type: ALL_POLITICIANS});

function render() {
    resetHolder();
    const politicianHtml = store.getState().politicians.map( politician => {
      let p = document.createElement('p');
      p.innerHTML = politician.nome;
      holder.appendChild(p);
      return p;
    });
}

function resetHolder() {
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
}

function onClick() {
  console.log('foi = '+input.value)
  store.dispatch({type: SEARCH_BY_NAME, term: input.value});
}
