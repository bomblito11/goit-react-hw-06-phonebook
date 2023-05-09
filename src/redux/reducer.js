import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

const getContactsFromLocalStorage = () => {
  const dataFromLocal = localStorage.getItem('contacts');
  const parsedDataFromLocal = JSON.parse(dataFromLocal);
  if (parsedDataFromLocal) {
    return parsedDataFromLocal;
  }
  return [];
};

const contactsInitialState = getContactsFromLocalStorage();
const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },

  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

export const filterReducer = createReducer(filterInitialState, {
  [filterContacts]: (state, action) => {
    return action.payload;
  },
});
