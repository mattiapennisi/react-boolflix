import { createContext, useContext, useState } from 'react'

const DefaultContext = createContext()

function DefaultProvider({ children }) {

    const [defaultState, setDefaultState] = useState(null)

    return (
        <DefaultContext.Provider
            value={{
                defaultState,
                setDefaultState,
            }}
        >
            {children}
        </DefaultContext.Provider>
    )
}

function useDefaultState() {
    const context = useContext(DefaultContext)
    return context
}

export { DefaultProvider, useDefaultState }