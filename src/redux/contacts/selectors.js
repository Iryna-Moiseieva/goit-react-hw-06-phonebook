export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const getVisibleContacts = state => {
  const dataFilter = getFilter(state) || '';
  const optimizedFilter = dataFilter.toLowerCase();
  const contacts = getContacts(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(optimizedFilter)
  );
};
