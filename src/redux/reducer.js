// import { createSlice } from '@reduxjs/toolkit';

// const getContactsFromLocalStorage = () => {
//   const dataFromLocal = localStorage.getItem('contacts');
//   const parsedDataFromLocal = JSON.parse(dataFromLocal);
//   if (parsedDataFromLocal) {
//     return parsedDataFromLocal;
//   }
//   return [];
// };

// const contactsInitialState = getContactsFromLocalStorage();
// const filterInitialState = '';

// //createSlice

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//         },
//       };
//     }
//   },
//     deleteContact: {
//       reducer(state, action) {
//         const index = state.findIndex(contact => contact.id === action.payload);
//         state.splice(index, 1);
//       },
//     },
//   },
// });

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     filterContacts(state, action) {
//       return action.payload;
//     },
//   },
// });

// //createReducer

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     state.push(action.payload);
//   },

//   [deleteContact]: (state, action) => {
//     const index = state.findIndex(contact => contact.id === action.payload);
//     state.splice(index, 1);
//   },
// });

// export const filterReducer = createReducer(filterInitialState, {
//   [filterContacts]: (state, action) => {
//     return action.payload;
//   },
// });

// const { addContact, deleteContact } = contactsSlice.actions;
// const { filterContacts } = filterSlice.actions;
// const { contactsReducer } = contactsSlice.reducer;
// const { filterReducer } = filterSlice.reducer;
