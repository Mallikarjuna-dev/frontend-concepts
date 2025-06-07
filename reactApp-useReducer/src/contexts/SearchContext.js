import React, { createContext, useContext, useReducer } from 'react';

const SearchContext = createContext();

const initialState = {
    query: '',
    results: [],
    page: 1,
    mode: 'pagination',
};

function searchReducer(state, action) {
    switch (action.type) {
        case 'SET_QUERY':
            return { ...state, query: action.payload };
        case 'SET_RESULTS':
            return { ...state, results: action.payload };
        case 'SET_PAGE':
            return { ...state, page: action.payload };
        case 'SET_MODE':
            return { ...state, mode: action.payload };
        default:
            throw new Error('Invalid search action type');
    }
}

export function SearchProvider({ children }) {
    const [state, dispatch] = useReducer(searchReducer, initialState);
    return (
        <SearchContext.Provider value={{ state, dispatch }}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearch = () => useContext(SearchContext);