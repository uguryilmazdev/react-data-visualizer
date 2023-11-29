// eslint-disable-next-line no-unused-vars
import React from "react"
import { ChannelProvider } from "./context/ChannelContext"
import DataVisualization from "./components/DataVisualization/DataVisualization"
import ControlPanel from "./components/ControlPanel/ControlPanel"

function App() {
  return (
    <ChannelProvider>
      <>
        <DataVisualization />
        <ControlPanel />
      </>
    </ChannelProvider>
  )
}

export default App
