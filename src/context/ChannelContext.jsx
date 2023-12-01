/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {createContext, useContext, useState} from "react";

const ChannelContext = createContext();

export function useChannel() {
    return useContext(ChannelContext);
}

// eslint-disable-next-line react/prop-types
export function ChannelProvider({children}) {
    const [channels, setChannels] = useState([]);
    const [isCleared, setIsCleared] = useState(false);
    const [channelHeight, setChannelHeight] = useState(200);

    function addChannel() {
        setChannels(prevChannels => [...prevChannels,[]]);
    }

    function removeChannel() {
        setChannels(prevChannels => prevChannels.slice(0, -1));
    }

    function updateChannelValues(index, values) {
        setChannels(prevChannels => {
            const newChannels = [...prevChannels];
            newChannels[index] = values;
            return newChannels;
        })
    }

    function clearAllChannels() {
        setIsCleared(true);

        setTimeout(() => {
            setIsCleared(false);
          }, 500);
      }

    function getAllChannelValues() {
        return channels;
    }

    return (
        <ChannelContext.Provider
            value={{
                channels,
                isCleared,
                channelHeight,
                addChannel,
                removeChannel,
                updateChannelValues,
                clearAllChannels,
                getAllChannelValues,
            }}
        >
            {children}
        </ChannelContext.Provider>
    )
}