// eslint-disable-next-line no-unused-vars
import React from "react";
import GeneratorControl from "./GeneratorControl";
import TimeIntervalControl from "./TimeIntervalControl";
import BoundryControl from "./BoundryControl";
import ChannelControl from "./ChannelControl";
import FileControl from "./FileControl";

function ControlPanel() {
    return (
        <section className="control-panel-section d-flex flex-column flex-xl-row align-items-center justify-content-evenly p-3 rounded">
            <GeneratorControl />
            <TimeIntervalControl />
            <BoundryControl />
            <ChannelControl />
            <FileControl />
        </section>
    )
}

export default ControlPanel;