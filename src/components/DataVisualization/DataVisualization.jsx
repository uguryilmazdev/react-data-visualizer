// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Channel from "./Channel";
import { useChannel } from "../../context/ChannelContext";

function DataVisualization() {
   const { channels } = useChannel();

    // log channels
    useEffect(() => {
        console.log('All channels:', channels);
    }, [channels]);

    return (
        <section>
            {channels.map((channel, index) => (
                <Channel key={index} channelID={index} />
            ))}
        </section>
    )
}

export default DataVisualization;