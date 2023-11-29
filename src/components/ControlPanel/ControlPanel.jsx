// eslint-disable-next-line no-unused-vars
import React from "react";
import { useChannel } from "../../context/ChannelContext";

function ControlPanel() {
    const { addChannel, removeChannel } = useChannel();

    return (
        <section>
            <div>

            </div>
            <div>
                <button onClick={addChannel}>Add Channel</button>
                <button onClick={removeChannel}>Remove Channel</button>
            </div>
        </section>
    )
}

export default ControlPanel;