// eslint-disable-next-line no-unused-vars
import React, {createContext, useContext, useState} from "react";

const GeneratorContext = createContext();

export function useGenerator() {
    return useContext(GeneratorContext);
}

// eslint-disable-next-line react/prop-types
export function GeneratorProvider({ children }) {
    const [isActive, setIsActive] = useState(false);

    function startGenerator() {
        setIsActive(true);
    }

    function stopGenerator() {
        setIsActive(false);
    }

    return (
        <GeneratorContext.Provider
        value={{
            isActive,
            startGenerator,
            stopGenerator,
        }}>
            {children}
        </GeneratorContext.Provider>
    )
}