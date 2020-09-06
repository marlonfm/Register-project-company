import React,{createContext, useState} from 'react'

export const Context = createContext();
export default function Providers ({children}) {

    const [status, setStatus] = useState(false);

    return(
        <Context.Provider value={{
            status,
            setStatus
        }}>
            {children}
        </Context.Provider>
        );
}