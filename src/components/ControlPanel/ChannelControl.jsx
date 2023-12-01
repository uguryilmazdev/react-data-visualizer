import { useChannel } from "../../context/ChannelContext"

// eslint-disable-next-line react/prop-types
// --
// This component provides add - remove channel functions.
// It allows to users to create as many channels as they want.
export default function ChannelControl() {
    const { addChannel, numberOfChannel, handleChannelNumber, removeChannel } = useChannel();

    return (
        <div className="d-flex flex-column">
            <div className="d-flex">
                <button className="btn btn-success mx-2 my-1 w-100" type="button" onClick={() => {addChannel(numberOfChannel)}}>Add Channel</button>
                <input type="number" className="w-25 rounded form-control" defaultValue={1} onChange={(e) => {handleChannelNumber(e)}}/>
            </div>
            <button className="btn btn-danger mx-2 my-1 w-100" type="button" onClick={removeChannel}>Remove Channel</button>
        </div>
    )
}