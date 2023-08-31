import React, { createContext, useState } from 'react'

export const NameContext = createContext()

// const getName = prompt("Enter Name")
export default function NameContextProvider(props) {
    const [userName, setUserName] = useState('')

    return (
        <NameContext.Provider value={{ userName, setUserName }}>
            {props.children}
        </NameContext.Provider>
    )
}