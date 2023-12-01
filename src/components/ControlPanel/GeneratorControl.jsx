import { useGenerator } from "../../context/GeneratorContext";
import { useChannel } from "../../context/ChannelContext";

// eslint-disable-next-line react/prop-types
// --
// This component provide start - stop - clear functionality.
export default function GeneratorControl() {
    const { startGenerator, stopGenerator} = useGenerator();
    const { clearAllChannels } = useChannel();

    return (
        <div className="d-flex flex-row">
            <button className="btn btn-success mx-2 my-1" type="button" onClick={() => {startGenerator()}}>Start</button>
            <button className="btn btn-danger mx-2 my-1" type="button" onClick={() => {stopGenerator()}}>Stop</button>
            <button className="btn btn-warning mx-2 my-1" type="button" onClick={() => {stopGenerator(); clearAllChannels();}}>Clear</button>
        </div>
    )
}