// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Channel from "./Channel";
import { useChannel } from "../../context/ChannelContext";

function DataVisualization() {
   const { channels, addChannel } = useChannel();

  /*  useEffect(() => {
        addChannel();
    }, []); */

    // log channels
    useEffect(() => {
        console.log('All channels:', channels);
    }, [channels]);

    return (
        <>
            {channels.map((channel, index) => (
                <Channel key={index} channelID={index} />
            ))}
        </>
    )
}

export default DataVisualization;