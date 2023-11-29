// eslint-disable-next-line no-unused-vars
import React, {createContext, useContext, useState} from "react";

const GeneratorContext = createContext();

export function useGenerator() {
    return useContext(GeneratorContext);
}

// eslint-disable-next-line react/prop-types
export function GeneratorProvider({ children }) {
    const [isActive, setIsActive] = useState(false);
    const [timeInterval, setTimeInterval] = useState(1000);

    function startGenerator() {
        setIsActive(true);
    }

    function stopGenerator() {
        setIsActive(false);
    }

    const handleTimeIntervalChange = (event) => {
        setTimeInterval(event.target.value);
      };

    return (
        <GeneratorContext.Provider
        value={{
            isActive,
            timeInterval,
            startGenerator,
            stopGenerator,
            handleTimeIntervalChange,
        }}>
            {children}
        </GeneratorContext.Provider>
    )
}