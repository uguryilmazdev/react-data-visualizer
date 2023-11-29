// eslint-disable-next-line no-unused-vars
import React from "react";
import { useChannel } from "../../context/ChannelContext";
import { useGenerator } from "../../context/GeneratorContext";

function ControlPanel() {
    const { addChannel, removeChannel, clearAllChannels } = useChannel();
    const { startGenerator, stopGenerator } = useGenerator();

    return (
        <section>
            <div>
                <button onClick={startGenerator}>Start</button>
                <button onClick={stopGenerator}>Stop</button>
                <button onClick={() => {
                    stopGenerator();
                    clearAllChannels();
                }}>Clear</button>
            </div>
            <div>
                <button onClick={addChannel}>Add Channel</button>
                <button onClick={removeChannel}>Remove Channel</button>
            </div>
        </section>
    )
}

export default ControlPanel;