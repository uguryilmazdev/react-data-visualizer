// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import { useChannel } from "../../context/ChannelContext";
import { useGenerator } from "../../context/GeneratorContext";

function ControlPanel() {
    const { addChannel, removeChannel, clearAllChannels } = useChannel();
    const { timeInterval, handleTimeIntervalChange, startGenerator, stopGenerator } = useGenerator();

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
                <label htmlFor="rangeInput">Choose Time Interval</label>
                <input
                    type="range"
                    id="rangeInput"
                    min="100"
                    max="10000"
                    step="100"
                    value={timeInterval}
                    onChange={handleTimeIntervalChange}
                />
                <br />
                <span>Selected value: {timeInterval}</span>
            </div>
            <div>
                <button onClick={addChannel}>Add Channel</button>
                <button onClick={removeChannel}>Remove Channel</button>
            </div>
        </section>
    )
}

export default ControlPanel;