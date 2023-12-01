// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useChannel } from "../../context/ChannelContext";
import { useGenerator } from "../../context/GeneratorContext";

function ControlPanel() {
    const { addChannel, removeChannel, clearAllChannels, handleChannelNumber, numberOfChannel } = useChannel();
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
        <section className="control-panel-section d-flex flex-column flex-xl-row align-items-center justify-content-evenly p-3 rounded">
            <div className="d-flex flex-row">
                <button className="btn btn-success mx-2 my-1" type="button" onClick={startGenerator}>Start</button>
                <button className="btn btn-danger mx-2 my-1" type="button" onClick={stopGenerator}>Stop</button>
                <button className="btn btn-warning mx-2 my-1" type="button" onClick={() => {stopGenerator(); clearAllChannels();}}>Clear</button>
            </div>
            <div className="d-flex flex-column align-items-center">
                <label htmlFor="timeIntervalSelector" className="text-light">Choose Time Interval</label>
                <input type="range" id="timeIntervalSelector" min="100" max="10000" step="100" value={timeInterval} onChange={handleTimeIntervalChange}/>
                <span className="text-light">{timeInterval}</span>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center my-1">
                <div className="input-group mx-3 my-1 w-75">
                    <span className="input-group-text">Lower Bound</span>
                    <input type="number" className="form-control" value={randomMin} onChange={(e) => {clearAllChannels(); handleRandomMinChange(e);}}/>
                </div>
                <div className="input-group mx-3 my-1 w-75">
                    <span className="input-group-text">Upper Bound</span>
                    <input type="number" className="form-control" value={randomMax} onChange={(e) => {clearAllChannels(); handleRandomMaxChange(e);}}/>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <button className="btn btn-success mx-2 my-1 w-100" type="button" onClick={() => {addChannel(numberOfChannel)}}>Add Channel</button>
                    <input type="number" className="w-25 rounded form-control" defaultValue={1} onChange={(e) => {handleChannelNumber(e)}}/>
                </div>
                <button className="btn btn-danger mx-2 my-1 w-100" type="button" onClick={removeChannel}>Remove Channel</button>
            </div>
        </section>
    )
}

export default ControlPanel;