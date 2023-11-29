// eslint-disable-next-line no-unused-vars
import React from "react";
import { useChannel } from "../../context/ChannelContext";
import { useGenerator } from "../../context/GeneratorContext";

function ControlPanel() {
    const { addChannel, removeChannel, clearAllChannels } = useChannel();
    const {
        timeInterval,
        randomMin,
        randomMax,
        handleTimeIntervalChange,
        handleRandomMinChange,
        handleRandomMaxChange,
        startGenerator,
        stopGenerator
    } = useGenerator();

    return (
        <section>
            <div>
                <button onClick={startGenerator}>Start</button>
                <button onClick={stopGenerator}>Stop</button>
                <button onClick={() => { stopGenerator(); clearAllChannels(); }}>Clear</button>
            </div>
            <div>
                <div>
                    <label htmlFor="timeIntervalSelector">Choose Time Interval</label>
                    <input type="range" id="timeIntervalSelector" min="100" max="10000" step="100" value={timeInterval} onChange={handleTimeIntervalChange}
                    />
                    <br />
                    <span>Selected value: {timeInterval}</span>
                </div>
                <div>
                    <input type="number" value={randomMin} onChange={handleRandomMinChange}/>
                    <input type="number" value={randomMax} onChange={handleRandomMaxChange}/>
                </div>
            </div>
            <div>
                <button onClick={addChannel}>Add Channel</button>
                <button onClick={removeChannel}>Remove Channel</button>
            </div>
        </section>
    )
}

export default ControlPanel;