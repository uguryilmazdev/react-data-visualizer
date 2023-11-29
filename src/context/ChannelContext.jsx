// eslint-disable-next-line no-unused-vars
import React, {createContext, useContext, useState} from "react";

const ChannelContext = createContext();

export function useChannel() {
    return useContext(ChannelContext);
}

// eslint-disable-next-line react/prop-types
export function ChannelProvider({children}) {
    const [channels, setChannels] = useState([]);

    function addChannel() {
        setChannels(prevChannels => [...prevChannels,[]]);
    }

    function removeChannel(index) {
        setChannels(prevChannels => prevChannels.filter((_, i) => i !== index));
    }

    function updateChannelValues(index, values) {
        setChannels(prevChannels => {
            const newChannels = [...prevChannels];
            newChannels[index] = values;
            return newChannels;
        })
    }

    function getAllChannelValues() {
        return channels;
    }

    return (
        <ChannelContext.Provider
            value={{
                channels,
                addChannel,
                removeChannel,
                updateChannelValues,
                getAllChannelValues,
            }}
        >
            {children}
        </ChannelContext.Provider>
    )
}