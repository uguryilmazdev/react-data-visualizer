import { useChannel } from "../../context/ChannelContext";
import { useGenerator } from "../../context/GeneratorContext";

// eslint-disable-next-line react/prop-types
// --
// This component provides lower and upper boundry of random data generator.
// Changing boundries clear channels for consistent data graphs.
export default function BoundryControl() {
    const { clearAllChannels, } = useChannel();
    const { randomMin, randomMax, handleRandomMinChange, handleRandomMaxChange } = useGenerator();

    return (
        <div className="d-flex flex-column align-items-center justify-content-center my-1">
            <div className="input-group mx-3 my-1 w-50">
                <span className="input-group-text">Lower Bound</span>
                <input type="number" className="form-control" value={randomMin} onChange={(e) => {clearAllChannels(); handleRandomMinChange(e);}}/>
            </div>
            <div className="input-group mx-3 my-1 w-50">
                <span className="input-group-text">Upper Bound</span>
                <input type="number" className="form-control" value={randomMax} onChange={(e) => {clearAllChannels(); handleRandomMaxChange(e);}}/>
            </div>
        </div>
    )
}