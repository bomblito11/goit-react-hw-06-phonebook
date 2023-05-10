import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const getContactsFromLocalStorage = () => {
  const dataFromLocal = localStorage.getItem('contacts');
  const parsedDataFromLocal = JSON.parse(dataFromLocal);
  if (parsedDataFromLocal) {
    return parsedDataFromLocal;
  }
  return [];
};

const contactsInitialState = getContactsFromLocalStorage();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
