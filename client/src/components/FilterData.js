// Returns data filter function based on the query and names in the phonebook
export const searchName = (data, query) => {
    return data.filter(person => person.name.toLowerCase().includes(query.toLowerCase()))
};
