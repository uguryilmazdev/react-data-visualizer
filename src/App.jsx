// eslint-disable-next-line no-unused-vars
import React from "react"
import { ChannelProvider } from "./context/ChannelContext"
import { GeneratorProvider } from "./context/GeneratorContext"
import { LoadingDataProvider } from "./context/LoadingDataContext"
import DataVisualization from "./components/DataVisualization/DataVisualization"
import ControlPanel from "./components/ControlPanel/ControlPanel"
import './App.css'

function App() {
  return (
    <ChannelProvider>
      <GeneratorProvider>
        <LoadingDataProvider>
          <main>
            <DataVisualization />
            <ControlPanel />
          </main>
        </LoadingDataProvider>
      </GeneratorProvider>
    </ChannelProvider>
  )
}

export default App
