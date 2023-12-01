import { useRef } from "react";
import { useChannel } from "../../context/ChannelContext";
import { useLoadingData } from "../../context/LoadingDataContext";
import exportToExcel from "../../utils/exportToExcel";

// eslint-disable-next-line react/prop-types
export default function FileControl() {
    const { getAllChannelValues, setChannels } = useChannel();
    const { loadingData, handleFileSelect, handleFileChange } = useLoadingData();
    const fileInputRef = useRef();

    return (
        <div className="d-flex flex-column">
            <button className="btn btn-primary mx-2 my-1 w-100" type="button" onClick={() => {const channels = getAllChannelValues(); exportToExcel(channels);}}>Save</button>
            <div>
                <button  className="btn btn-primary mx-2 my-1 w-100" onClick={() => {handleFileSelect(fileInputRef)}}>Load</button>
                <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={async (e) => {handleFileChange(e, setChannels), console.log(loadingData)}}/>
            </div>
        </div>
    )
}