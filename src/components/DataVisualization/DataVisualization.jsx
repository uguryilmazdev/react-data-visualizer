// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Channel from "./Channel";
import { useChannel } from "../../context/ChannelContext";
import { useLoadingData } from "../../context/LoadingDataContext";

// This component provides main container for all channels.
function DataVisualization() {
   const { channels, updateChannelValues } = useChannel();
   const { loadingData, setLoadingData } = useLoadingData();

   // Catch loading data and load it to channels.
   useEffect(() => {

        if (loadingData.length > 0) {
            loadingData.map((channel, index) => {
                updateChannelValues(index ,channel);
            })
            setLoadingData([]);
        }
   }, [loadingData])

    return (
        <section className="data-visualization-section mb-5">
            {channels.map((channel, index) => (
                <Channel key={index} channelID={index} data={channel} />
            ))}
        </section>
    )
}

export default DataVisualization;