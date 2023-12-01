// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useRef} from "react";
import getRandomInt from "../../utils/randomGenerator";
import normalizeChannelHeight from "../../utils/normalizeChannelHeight";
import randomColorGenerator from "../../utils/randomColorGenerator";
import { useChannel } from "../../context/ChannelContext";
import { useGenerator } from "../../context/GeneratorContext"

// This component provides a new channel container.
// It is a horizontal streamline.
// eslint-disable-next-line react/prop-types
function Channel({ channelID, data }) {
    const { isCleared, channelHeight, updateChannelValues } = useChannel();
    const { isActive, randomMin, randomMax, timeInterval } = useGenerator();
    const [randomNumbers, setRandomNumbers] = useState(data);
    const [channelColor, setChannelColor] = useState('#000');
    const channelRef = useRef(null);

    // Generate random color for channel when the component's first render.
    // Random color effects channel border.
    useEffect(() => {
      const color = randomColorGenerator();
      setChannelColor(color);
    }, []);

    // Generate a random number within the specified time interval
    // If it is started (start button is pressed), generator begins.
    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                const newRandomNumber = getRandomInt(randomMin, randomMax);
                setRandomNumbers(prevNumbers => [...prevNumbers, newRandomNumber]);

                // Activate channel's horizontal scroll while adding new bars.
                if (channelRef.current) {
                  channelRef.current.scrollLeft += 25;
                }
            }, timeInterval);
        }

        return () => clearInterval(interval);
    }, [isActive]);

    // Update channel values
    useEffect(() => {
            updateChannelValues(channelID, randomNumbers);
    }, [randomNumbers]);

    // Clear random number
    useEffect(() => {
        if (isCleared) {
            setRandomNumbers([]);
        }
    }, [isCleared])

    return (
      // Here, channel-container height is tricky:
      // 200px maximum bar height; 24 px bar number height; 8px overflow height; 3*2 px border height = 200px + 38px total height
      // so we need extra 38px.
      // This is not best practice. It should be reviewed.
    <div className="channel-container d-flex align-items-end mb-5" ref={channelRef} style={{ height: `${channelHeight + 38}px`,borderColor: channelColor}}>
      {randomNumbers.map((number, index) => (
        <div key={index} className="d-flex flex-column align-items-center justify-content-center me-3">
          <div
            className="text-bg-primary"
            style={{height: `${normalizeChannelHeight(number, randomMin, randomMax, channelHeight)}px`, minWidth: '20px'}}
          >
          </div>
          <div>{number}</div>
        </div>
      ))}
    </div>
    )
}

export default Channel;