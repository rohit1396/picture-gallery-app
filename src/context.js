import React, { createContext, useContext, useState } from 'react';

const QueryContext = createContext();

export const QueryProvider = ({children}) => {
    const [description, setDescription] = useState('');
    // const [images, setImages] = useState([]);

    return (
        <QueryContext.Provider value={{description, setDescription}}>
            {children}
        </QueryContext.Provider>
    )
}

export const QueryGlobal = () => {
    return useContext(QueryContext)
}