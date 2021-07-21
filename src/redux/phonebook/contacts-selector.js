
import { createSelector } from "@reduxjs/toolkit";


export const getLoading = state => state.contacts.loading
export const getFilter = state => state.contacts.filter;

export const  getAllContacts = state => state.contacts.items

export const getFilteredContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(normalizedFilter))
    }
)