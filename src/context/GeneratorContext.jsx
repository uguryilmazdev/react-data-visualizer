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
    const [randomMin, setRandomMin] = useState(1);
    const [randomMax, setRandomMax] = useState(10);

    // --- Control generator process - start / stop functionality
    function startGenerator() {
        // Check if lower boundry smaller than upper
        if (randomMin < randomMax) {
            setIsActive(true);
        } else {
            console.log("Lower boundry must be smaller than upper boundry!")
        }
    }

    function stopGenerator() {
        setIsActive(false);
    }

    // --- Control generator process - time interval
    function handleTimeIntervalChange(e) {
        setTimeInterval(e.target.value);
    }

    // --- Control generator process - lower / upper boundry (mix-max values)
    function handleRandomMinChange(e) {
        // check if lower boundry is a number and bigger than -1
        if (!isNaN(e.target.value) && e.target.value >= 0) {
            setRandomMin(e.target.value);
        } else {
            console.log("Lower bound must be positive zero or positive integer!")
        }
    }

    function handleRandomMaxChange(e) {
        // check if upper boundry is a number and bigger than -1
        if (!isNaN(e.target.value) && e.target.value >= 0) {
            setRandomMax(e.target.value);
        } else {
            console.log("Upper bound must be positive integer!")
        }
    }

    return (
        <GeneratorContext.Provider
        value={{
            isActive,
            timeInterval,
            randomMin,
            randomMax,
            startGenerator,
            stopGenerator,
            handleTimeIntervalChange,
            handleRandomMinChange,
            handleRandomMaxChange,
        }}>
            {children}
        </GeneratorContext.Provider>
    )
}