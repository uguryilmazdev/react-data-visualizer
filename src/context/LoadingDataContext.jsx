// eslint-disable-next-line no-unused-vars
import React, {createContext, useContext, useState} from "react";
import importFromExcel from "../utils/importFromExcel";

const LoadingDataContext = createContext();

export function useLoadingData() {
    return useContext(LoadingDataContext);
}

// eslint-disable-next-line react/prop-types
export function LoadingDataProvider({ children }) {
    const [loadingData, setLoadingData] = useState([]);

    function handleFileSelect(fileInputRef) {
        const fileInput = fileInputRef.current;
        fileInput.click();
      }

    async function handleFileChange(event, setChannels) {
        const file = event.target.files[0];
        if (file) {
            try {
              // clear channels
              setChannels([]);
              const excelData = await importFromExcel(file);
              setLoadingData(excelData);
            } catch (error) {
              console.error('Error:', error.message);
            }
          }
    }

    return (
        <LoadingDataContext.Provider
        value={{
            loadingData,
            setLoadingData,
            handleFileSelect,
            handleFileChange,
        }}>
            {children}
        </LoadingDataContext.Provider>
    )

}