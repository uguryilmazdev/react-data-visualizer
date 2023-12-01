import { useGenerator } from "../../context/GeneratorContext"

// eslint-disable-next-line react/prop-types
export default function TimeIntervalControl() {
    const { timeInterval, handleTimeIntervalChange } = useGenerator();

    return (
        <div className="d-flex flex-column align-items-center">
            <label htmlFor="timeIntervalSelector" className="text-light">Choose Time Interval</label>
            <input type="range" id="timeIntervalSelector" min="100" max="10000" step="100" value={timeInterval} onChange={handleTimeIntervalChange}/>
            <span className="text-light">{timeInterval}</span>
        </div>
    )
}